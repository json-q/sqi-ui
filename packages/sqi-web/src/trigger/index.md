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

推荐使用 `Popup` 组件来替代 `Trigger` 组件，`Popup` 组件提供了兼容度更好的集成并对样式进行美化。更完整的使用示例请查看 `Popup` 组件

## Popper 定位

Trigger 组件的定位使用 [lite-position](https://github.com/json-q/lite-position) ，该包实现了类似 [floating-ui](https://floating-ui.com) 的核心功能，其体积 Gzip 后不足 3kb

<code src="./demos/popper.tsx"></code>

注意：

当设置 `offset` 属性时，如果设置成 `number`，则会根据主轴所在方向自动偏移**主轴**所在的距离，如果想要同时偏移主轴和副轴，请使用 `offset` 元组 `[number,number]`

## 触发行为

<code src="./demos/basic-trigger.tsx"></code>

## 点击 popper 元素使 trigger 失焦不关闭

<code src="./demos/focus-outside-click.tsx"></code>

## 关闭销毁

默认情况下，当 popper 关闭时，相关 dom 会被隐藏，通过设置 `motion.unmountOnExit` 为 true 可以在关闭时销毁 dom

<code src="./demos/destroy-exit.tsx"></code>

## API

### TriggerProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | popper 的根元素 className | `string` | - |
| children | 触发的目标元素 | `ReactElement` | - |
| popper | 悬浮元素 | `ReactElement` | - |
| arrow | 箭头元素 | `ReactElement` | - |
| motion | 动画 props 继承自 [react-transition-state](https://szhsin.github.io/react-transition-state) | `Omit<CSSMotionProps, 'children'>` | - |
| placement | popper 位置 | `TriggerPlacement` | `bottom` |
| enableFlip | 开启自动翻转 | `boolean` | `true` |
| enableShift | 开启自动位移 | `boolean` | `true` |
| offset | popper 偏移量 | `number \| [mainAxis: number, crossAxis: number]` | `0` |
| zIndex | popper 元素层级 | `number` | `1` |
| getContainer | 指定 popper 挂载的位置 | `() => HTMLElement` | `document.body` |
| trigger | 触发方式 | `TriggerType` | `"hover"` |
| disabled | 禁用行为 | `boolean` | - |
| delay | 触发延迟的时间 ms 仅 hover 生效 | `number` | `100` |
| outFocusToClose | 目标失去焦点时触发的是对应的 Popup 是否关闭 Popup | `boolean` | `true` |
| clickOutsideClose | 点击外部是否可关闭 | `boolean` | `true` |
| defaultVisible | 非受控显示隐藏状态 | `boolean` | - |
| visible | 受控显示隐藏状态 | `boolean` | - |
| onVisibleChange | 状态更改触发 | `(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void` | - |

### TriggerPlacement

共 12 个方位

`top` | `right` | `bottom` | `left` | `top-start` | `top-end` | `right-start` | `right-end` | `bottom-start` | `bottom-end` | `left-start` | `left-end`

### TriggerType

对应 eventListener 的事件名称

`hover` | `click` | `focus` | `context-menu`
