---
title: Popup 弹出层
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 5
---

# Popup 弹出层

核心功能基于 `Trigger` 组件并继承其大部分属性，但是会对 Trigger 的部分默认值进行覆盖

组件提供少部分样式，对于自定义样式程度较高的弹出内容，你可以使用此组件进行进一步扩展

## 基础使用

<code src="./demos/base.tsx"></code>

## 触发行为

<code src="./demos/trigger-type.tsx"></code>

## 方向

设置 `placement` 指定 Popup 弹出位置，通过 `showArrow` 来选择是否显示箭头

<code src="./demos/placement.tsx"></code>

## 自动翻转偏移

默认会进行边缘检测偏移以及自动翻转，如果你不需要或者想减少计算带来的开销，可以设置 `enableFlip=false` 或 `enableShift=false` 来选择性关闭不需要的功能

<code src="./demos/shift.tsx"></code>

## 复杂的嵌套弹出层

<code src="./demos/nest.tsx"></code>

## 禁止弹出

禁用弹出，将不会触发任何弹出层相关的行为

<code src="./demos/disabled.tsx"></code>

## 动态自适应

当目标元素尺寸变化时会自动检测，并重新更新弹出层的位置

<code src="./demos/rect-observer.tsx"></code>

## 弹出层样式

设置 `styles.content` 或者 `classNames.content` 来设置内容样式

如果需要设置与触发元素等宽的弹出层宽度，则设置 `styles.content` 为 `{ width: 'var(--reference-width)' }` 即可。

<code src="./demos/styles.tsx"></code>

## API

### PopupProps

| 属性           | 描述                     | 类型                                                 | 默认值 |
| -------------- | ------------------------ | ---------------------------------------------------- | ------ |
| children       | 触发元素                 | `ReactNode`                                          | -      |
| content        | Popup 内容               | `ReactNode`                                          | -      |
| showArrow      | 是否展示箭头             | `boolean`                                            | `true` |
| destroyOnClose | 隐藏时是否销毁           | `boolean`                                            | `true` |
| offset         | 元素相对于触发元素的距离 | `number`                                             | `6`    |
| rootClassName  | 根节点 className         | `string`                                             | -      |
| styles         | style 语法糖             | `{ content?: CSSProperties; arrow?: CSSProperties;}` | -      |
| classNames     | className 语法糖         | `{ content?: string; arrow?: string;}`               | -      |

以下属性皆继承自 Trigger 组件

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placement | popper 位置 | `TriggerPlacement` | `top` |
| enableFlip | 开启自动翻转 | `boolean` | `true` |
| enableShift | 开启自动位移 | `boolean` | `true` |
| zIndex | popper 元素层级 | `number` | `1` |
| getContainer | 指定 popper 挂载的位置 | `() => HTMLElement` | `document.body` |
| trigger | 触发方式 | `TriggerType` | `hover` |
| disabled | 禁用行为 | `boolean` | - |
| delay | 触发延迟的时间 ms 仅 hover 生效 | `number` | `100` |
| outFocusToClose | 目标失去焦点时触发的是对应的 Popup 是否关闭 Popup | `boolean` | `true` |
| defaultVisible | 非受控显示隐藏状态 | `boolean` | - |
| visible | 受控显示隐藏状态 | `boolean` | - |
| onVisibleChange | 状态更改触发 | `(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void` | - |
