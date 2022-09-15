---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 16
toc: 'content'
---

# IndexList 索引滑动选择器

## 何时使用

A-Z索引选择等

## 代码示例

### 基本使用
<code src='../../demo/pages/IndexList'></code>


## 属性
|属性           |类型        |必填  |默认值  |说明   |
| ------------ |------------|-----|-------|--------------|
|className     | `string`   | 否  | ''    | 组件样式       |
|alphabetList  | `string[]` | 是  | []    | 索引数组       |

## 事件
|事件名             | 说明                | 类型                                                      |
| -----------------|--------------------|-----------------------------------------------------------|
| onTouch          | 滑动触摸索引的回调    | (alphabetItem: string) => void                            |

