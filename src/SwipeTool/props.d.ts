import { IBaseProps } from '../_base';

interface RightItem {
  type: String; // 类型标识
  text: String; // 按钮文案
  color: String; // 文字颜色
  bgColor: String; // 背景颜色
  fontSize?: number; // 字体大小
  confirmText?: String; // 按钮二次确认文案
  eventType?: "auto" | "self"; // 按钮点击类型
}

export interface ISwipeToolProps extends IBaseProps {
  key: string, // 唯一标识
  disable?: boolean, // 禁止滑动
  swiped: boolean, // 设置滑动状态
  right: RightItem[], // 左滑出的数据
  rightItemWidth?: number, // 元素宽度
  callbackData?: any, // onRightItemEvent回调数据
  onTouchEnd: (key: string, callbackData: any) => {}, // 触摸结束
  onSwipeStart: (key: string, callbackData: any) => {}, // 滑动开始的回调
  onSwipeEnd: (key: string, isLeft: boolean, callbackData: any) => {}, // 滑动结束的回调
  onRightItemEvent: (type: string, key: string, callbackData: any) => {}, // 左滑出的元素的点击事件
}

export declare const SwipeToolDefaultProps: Partial<ISwipeToolProps>;