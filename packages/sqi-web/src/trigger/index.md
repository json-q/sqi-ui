---
title: Trigger 触发器
nav:
  title: 组件
  order: 2
group:
  title: 其它
  order: 8
---

# Trigger 触发器

通常情况下，不建议直接使用 Trigger 组件。严格意义上说，Trigger 组件也是内部使用的，且不携带任何样式，外部使用会让代码组织变得更复杂。

推荐使用 `Popup` 组件来替代 `Trigger` 组件

## Popper 定位

实现一个 popper.js 的基础功能（逻辑实现并不优雅，且诸多情况未考虑，比如 `table th tr` 下的定位父元素，css `will-change transform` 等的定位父元素）

目前采取把箭头相对于 popper 定位，进行小范围偏移可以减少非常多逻辑代码

后续可能会对定位功能进行重写，如果有能力重写的话，I am very vegetable :)

<code src="./demos/popper.tsx"></code>

注意：

- 当 `direction` 的主轴处于 `top` 和 `bottom` 时，`offset` **仅 y 轴** 的偏移可工作
- 当 `direction` 的主轴处于 `left` 和 `right` 时，`offset` **仅 x 轴** 的偏移可工作。

> Why? 当同时支持 x y 轴的偏移，由于直接对 popper 本身设置了偏移，在计算边界时则会对此偏移进行值累加，最终会导致边缘检测出现明显的误差（也不是误差，而是此时 popper 的边缘检测看上去会很奇怪）

## 触发行为

动画无法添加 transform，因为 position 的定位使用 `transform`，会有冲突

<code src="./demos/basic-trigger.tsx"></code>

## API

### TriggerProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | popper 的根元素 className | `string` | - |
| children | 触发的目标元素 | `ReactElement` | - |
| popper | 悬浮元素 | `ReactElement` | - |
| arrow | 箭头元素 | `ReactElement` | - |
| motion | 动画 props 继承自 [react-transition-state](https://szhsin.github.io/react-transition-state) | `Omit<CSSMotionProps, 'children'>` | - |
| direction | popper 位置 | `TriggerDirection` | `bottom` |
| enableFlip | 开启自动翻转 | `boolean` | `true` |
| enableShift | 开启自动位移 | `boolean` | `true` |
| offset | popper 偏移量 | `number \| { x: number; y: number }` | 0 |
| zIndex | popper 元素层级 | `number` | `1` |
| getContainer | 指定 popper 挂载的位置 | `string \| HTMLElement \| () => HTMLElement` | `document.body` |
| trigger | 触发方式 | `TriggerType \| TriggerType[]` | `"hover"` |
| disabled | 禁用行为 | `boolean` | - |
| delay | 触发延迟的时间 ms 仅 hover 生效 | `number` | `100` |
| outFocusToClose | 目标失去焦点时触发的是对应的 Popup 是否关闭 Popup | `boolean` | `true` |
| clickOutsideClose | 点击外部是否可关闭 | `boolean` | `true` |
| defaultVisible | 非受控显示隐藏状态 | `boolean` | - |
| visible | 受控显示隐藏状态 | `boolean` | - |
| onVisibleChange | 状态更改触发 | `(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void` | - |

### TriggerDirection

共 12 个方位

`top` | `right` | `bottom` | `left` | `top-start` | `top-end` | `right-start` | `right-end` | `bottom-start` | `bottom-end` | `left-start` | `left-end`

### TriggerType

对应 eventListener 的事件名称

`hover` | `click` | `focus` | `mousedown` | `context-menu`
