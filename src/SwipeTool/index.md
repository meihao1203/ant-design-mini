---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# SwipeTool 滑动工具
列表的功能扩展
## 何时使用
通过滑动操作来展示隐藏的功能菜单

## 代码示例

### 基本使用
<code src='../../demo/pages/SwipeTool'></code>


## 属性
|属性           |类型        |必填  |默认值  |说明   |
| ------------ |------------|-----|-------|--------------|
|className     | `string`   | 否  | ''    | 组件样式       |
|key           | `string`   | 是  | ''    | 滑动唯一标识    |
|right         | `RightItem`| 是  | []    | 左滑滑出的数据  |
|swiped        | `boolean`  | 是  | false | 滑动状态       |
|disable       | `boolean`  | 否  | false | 禁止滑动       |
|rightItemWidth| `number`   | 否  | 150   | 元素宽度       |
|callbackData  | `any`      | 否  | {}    | 事件回调数据    |

### Interface RightItem

| 属性        | 类型          |必填   | 描述                                                         |
| ---------   | ------------ |------|-------------------------------------------------------------|
| type        | `string`     |  是  |类型标识                                                      |
| text        | `string`     |  是  |按钮名字                                                      |
| confirmText | `string`     |  否  |按钮名字                                                      |
| color       | `string`     |  是  |文字颜色                                                      |
| bgColor     | `string`     |  是  |背景颜色                                                      |
| fontSize    | `number`     |  否  |字体大小， 默认 30                                             |
| eventType   | `string`     |  否  |按钮点击类型： 默认 self:直接出发回调事件; auto: 进行二次确认        |

## 事件
|事件名             | 说明                | 类型                                                      |
| -----------------|--------------------|-----------------------------------------------------------|
| onSwipeStart     | 滑动、触摸开始的回调  | (key: string, callbackData: any) => void                  |
| onTouchEnd       | 触摸结束的回调       | (key: string, callbackData: any) => void                  |
| onSwipeEnd       | 滑动结束的回调       | (key: string, isLeft: boolean, callbackData: any) => void |
| onRightItemEvent | 左滑出的元素的点击事件 | (type: string, key: string, callbackData: any) => void    |

