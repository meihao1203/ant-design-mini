const rightArr = [
  {
    detail: '一个按钮，无确认',
    event: {
      swiped: false,
      key: 's1',
      rightItemWidth: 300,
      disable: false,
      right: [
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
        },
      ],
    },
  },
  {
    detail: '一个按钮，有二次确认',
    event: {
      swiped: false,
      key: 's2',
      rightItemWidth: 300,
      disable: false,
      right: [
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'auto',
        },
      ],
    },
  },
  {
    detail: '一个按钮，有点击、滑动确认',
    event: {
      swiped: false,
      key: 's2',
      rightItemWidth: 300,
      disable: false,
      right: [
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
        },
      ],
    },
  },
  {
    detail: '两个按钮，一个有二次确认，一个没有二次确认',
    event: {
      swiped: false,
      key: 's3',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
        },
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'auto',
        },
      ],
    },
  },
  {
    detail: '两个按钮，一个有滑动确认，一个没有二次确认',
    event: {
      swiped: false,
      key: 's3',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
        },
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
        },
      ],
    },
  },
  {
    detail: '三个按钮,都有二次确认',
    event: {
      swiped: false,
      key: 's4',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          confirmText: '确认设为常用吗？',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'auto',
        },
        {
          type: 'his',
          text: '往来记录',
          confirmText: '确认往来记录吗？',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'auto',
        },
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'auto',
        },
      ],
    },
  },
  {
    detail: '三个按钮,删除有二次确认',
    event: {
      swiped: false,
      key: 's5',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
        },
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'auto',
        },
      ],
    },
  },
  {
    detail: '三个按钮,删除有滑动确认',
    event: {
      swiped: false,
      key: 's6',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
        },
        {
          type: 'delete',
          confirmText: '确认删除吗？',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
        },
      ],
    },
  },
  {
    detail: '三个按钮,设为常用有滑动确认',
    event: {
      swiped: false,
      key: 's8',
      rightItemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
        },
      ],
    },
  },
  {
    detail: '禁用滑动',
    event: {
      key: 's11',
      disable: true,
    },
  },
];

Page({
  data: {
    rightArr,
    swipeStr: 's10',
  },
  onLoad() {},
  onRightItemEvent(type: string, key: string, callbackData: any) {
    console.log('type, key, callbackData', type, key, callbackData);
    my.showToast({ content: `${key}-${type}` });
  },
  onSwipeEnd(key: string) {
    this.setData({ swipeStr: key });
  },
  onSwipeStart() {
    this.setData({ swipeStr: '' });
  },
  onTouchEnd() {},
});
