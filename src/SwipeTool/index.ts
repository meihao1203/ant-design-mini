import { SwipeToolDefaultProps } from './props'

const setStyleObj = (rightItemWidth: number) => [
  {
    left: 0,
  },
  {
    left: -rightItemWidth + 'rpx',
  },
  {
    left: -(2 * rightItemWidth) + 'rpx',
  }
];

Component({
  props: SwipeToolDefaultProps,
  data: {
    x: 0, // 主体部分左滑的位置
    damping: 40, // 左滑的速度
    f_x: 0, // 右侧按钮滑动的位置
    myStyle: {}, // 二次确认所需
    tapType: '', // 点击中的type
    disabled: false, // 禁止滑动
    inertiaWidth: 0, // 左滑回弹距离
    rightWidth: 0, // 计算的右侧的宽度
    isSwiped: false, // 是否是已经滑开了
    maxSwipeLength: 0, // 最大的左滑的宽度
    speed: 10, // 弹性滑动的周期时间，值越小速度越快
    changeArr: [0, 0], // 用来判断最后一次滑动的方向
  },
  didMount() {
    const { rightItemWidth, right, swiped } = this.props;
    const _rightArr = right || [];
    this.setData({
      rightWidth: rightItemWidth * _rightArr.length,
      damping: (6 - _rightArr.length) * 10 + 10,
    });
    swiped && this.initWidth((maxSwipeLength: any) => {
      maxSwipeLength && this.setData({
        x: -(maxSwipeLength + 2),
        isSwiped: true,
      });
    });
  },
  didUpdate(prevProp) {
    const { swiped } = this.props;
    // 设置不同的滑动位置时需要重置
    if (prevProp.swiped !== swiped && !swiped) {
      this.setData({ x: 0, isSwiped: false, tapType: '' });
    }
  },
  methods: {
    initWidth(func?: Function) {
      const { rightItemWidth, right } = this.props;
      this.setData({ rightWidth: rightItemWidth * right.length });
      // 获取宽度信息，设置滑轨的宽度、初始化滑动位置
      // 如果没有获取到该信息则把左滑禁用掉
      my.createSelectorQuery()
        .select(`.paytm-swipe-movable-content-${this.$id}`)
        .boundingClientRect()
        .exec((ret: any) => {
          try {
            this.setData({ maxSwipeLength: ret[0].width });
            func && func(ret[0].width);
          } catch (err) {
            this.setData({ disabled: true });
          }
        });
    },
    // 向外透出事件
    onTouchStart() {
      const { onSwipeStart, key, callbackData } = this.props;
      this.initWidth();
      this.setData({ tapType: '' }); // 清空eventType = auto 的表现
      onSwipeStart(key, callbackData);
    },
    onTouchEnd() {
      const { onTouchEnd, key, callbackData } = this.props;
      onTouchEnd(key, callbackData);
    },
    // 滑动过程中的事件，是内部事件不向外透出，用于控制右侧按钮的位置信息
    onChange(e: any) {
      const { changeArr } = this.data;
      const { x } = e.detail;
      const L = Math.abs(x);
      // changeArr用于精准的控制滑动的方向
      const newArr = changeArr[1] === L ? changeArr : [changeArr[1], L];
      this.setData({ f_x: x, changeArr: newArr });
    },
    // 意外中断了滑动，则立即开始结算滑动动作
    onTouchCancel(e: any) {
      this.onChangeEnd(e);
    },
    onChangeEnd(e: any) {
      const { x } = e.detail;
      const { isSwiped, changeArr } = this.data;
      // 初始态，右滑直接返回
      if (x === 0) return;
      // 判断是否是左滑
      let isLeft = changeArr[1] >= changeArr[0];
      if (!isSwiped && Math.abs(x) < 10) {
        isLeft = false;
      }
      this.onSetSwipe(isLeft);
    },
    onSetSwipe(isLeft: boolean) {
      const { maxSwipeLength, f_x, speed, inertiaWidth, isSwiped } = this.data;
      let mySwipe = isSwiped;
      const { onSwipeEnd, key, callbackData } = this.props;
      // 处理x的位置，两次setData X是因为x如果相同位置不会变
      const _this = this;
      if (Math.abs(f_x) > maxSwipeLength) {
        mySwipe = true;
      }
      // 为了处理到重置状态的效果，此处可添加 小动画
      const maxLeft = mySwipe && isLeft ? -(maxSwipeLength + 2.01) : -(maxSwipeLength + inertiaWidth);
      this.setData(
        {
          x: isLeft ? maxLeft : -0.01,
          disabled: true,
        },
        () => {
          const flag = _this.data.x === -0.01;
          setTimeout(() => {
            _this.setData(
              {
                x: flag ? 0 : -(maxSwipeLength + 2),
                isSwiped: !flag,
                disabled: false,
              },
              () => {
                onSwipeEnd(key, isLeft, callbackData);
              },
            );
          }, speed);
        },
      );
    },
    // 处理右侧点击事件
    rightItemTap(e: any) {
      const { onRightItemEvent, callbackData, rightItemWidth, key } = this.props;
      if (!onRightItemEvent) return;
      const { item, idx } = e.target.dataset.item;
      const { eventType, type } = item;
      const sty = setStyleObj(rightItemWidth)[idx];
      if (this.data.tapType === type) {
        this.onSetSwipe(false);
        this.setData({ tapType: '', myStyle: {} });
        onRightItemEvent(type, key, callbackData);
        return;
      }
      // auto 是展开按钮二次确认的效果
      if (eventType === 'auto') {
        this.setData({ tapType: type, myStyle: sty });
      } else {
        this.onSetSwipe(false);
        onRightItemEvent(type, key, callbackData);
      }
    },
  },
});
