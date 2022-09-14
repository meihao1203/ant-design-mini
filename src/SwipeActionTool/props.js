export const SwipeActionToolDefaultProps = {
  key: '', // 唯一标识
  className: '', // 样式
  right: [], // 左滑出的数据
  disable: false, // 禁止滑动
  swiped: false, // 设置滑动状态
  rightItemWidth: 150, // 元素宽度
  callbackData: {}, // onRightItemEvent回调数据
  onTouchEnd: () => {}, // 触摸结束
  onSwipeEnd: () => {}, // 滑动结束的回调
  onSwipeStart: () => {}, // 滑动开始的回调
  onRightItemEvent: () => {}, // 左滑出的元素的点击事件
};
  