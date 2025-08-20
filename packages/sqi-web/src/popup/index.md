---
title: Popup 弹出层
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 4
---

# Popup 弹出层

核心功能基于 `Trigger` 组件并继承其大部分属性，但是会对 Trigger 的部分默认值进行覆盖

组件提供少部分样式，对于自定义样式程度较高的弹出内容，你可以使用此组件进行进一步扩展

## 基础使用

<code src="./demos/base.tsx"></code>

## 触发行为

<code src="./demos/trigger-type.tsx"></code>

## 方向

设置 `direction` 指定 Popup 弹出位置，通过 `showArrow` 来选择是否显示箭头

<code src="./demos/direction.tsx"></code>

## 自动翻转偏移

默认会进行边缘检测偏移以及自动翻转，如果你不需要或者想减少计算带来的开销，可以设置 `enableFlip=false` 或 `enableShift=false` 来选择性关闭不需要的功能

箭头的额外样式是 demo 中为了更方便观察原本的边缘碰撞效果而添加的，并非组件自带

<code src="./demos/shift.tsx"></code>

## 复杂的嵌套弹出层

<code src="./demos/nest.tsx"></code>

## 禁止弹出

禁用弹出，将不会触发任何弹出层相关的行为

<code src="./demos/disabled.tsx"></code>

## API

### PopperProps

| 属性           | 描述                     | 类型                                                 | 默认值 |
| -------------- | ------------------------ | ---------------------------------------------------- | ------ |
| children       | 触发元素                 | `ReactNode`                                          | -      |
| content        | Popup 内容               | `ReactNode`                                          | -      |
| showArrow      | 是否展示箭头             | `boolean`                                            | `true` |
| destroyOnClose | 隐藏时是否销毁           | `boolean`                                            | `true` |
| offset         | 元素相对于触发元素的距离 | `number`                                             | `4`    |
| styles         | style 语法糖             | `{ content?: CSSProperties; arrow?: CSSProperties;}` | -      |
| classNames     | className 语法糖         | `{ content?: string; arrow?: string;}`               | -      |

以下属性皆继承自 Trigger 组件

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | popper 位置 | `TriggerDirection` | `bottom` |
| enableFlip | 开启自动翻转 | `boolean` | `true` |
| enableShift | 开启自动位移 | `boolean` | `true` |
| zIndex | popper 元素层级 | `number` | `1` |
| getContainer | 指定 popper 挂载的位置 | `string \| HTMLElement \| () => HTMLElement` | `document.body` |
| trigger | 触发方式 | `TriggerType \| TriggerType[]` | `"hover"` |
| disabled | 禁用行为 | `boolean` | - |
| delay | 触发延迟的时间 ms 仅 hover 生效 | `number` | `100` |
| outFocusToClose | 目标失去焦点时触发的是对应的 Popup 是否关闭 Popup | `boolean` | `true` |
| defaultVisible | 非受控显示隐藏状态 | `boolean` | - |
| visible | 受控显示隐藏状态 | `boolean` | - |
| onVisibleChange | 状态更改触发 | `(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void` | - |
