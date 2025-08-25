---
title: Tooltip 文字提示
nav:
  title: 组件
  order: 2
group:
  title: 数据展示
  order: 4
---

# Tooltip 文字提示

## 基本使用

<code src="./demos/base.tsx"></code>

## 主题

<code src="./demos/theme.tsx"></code>

## 触发行为

<code src="./demos/trigger-type.tsx"></code>

## 方向

设置 `placement` 指定 Popup 弹出位置，通过 `showArrow` 来选择是否显示箭头

<code src="./demos/placement.tsx"></code>

## 自动翻转偏移

默认会进行边缘检测偏移以及自动翻转，如果你不需要或者想减少计算带来的开销，可以设置 `enableFlip=false` 或 `enableShift=false` 来选择性关闭不需要的功能

<code src="./demos/shift.tsx"></code>

## 禁止弹出

禁用弹出，将不会触发任何弹出层相关的行为

<code src="./demos/disabled.tsx"></code>

## 动态自适应

当目标元素尺寸变化时会自动检测，并重新更新弹出层的位置

<code src="./demos/rect-observer.tsx"></code>

## API

### TooltipProps

其余属性皆继承自 Popup 组件

| 属性  | 描述 | 类型                                                                      | 默认值    |
| ----- | ---- | ------------------------------------------------------------------------- | --------- |
| theme | 主题 | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'light'` | `default` |
