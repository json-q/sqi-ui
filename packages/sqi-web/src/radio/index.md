---
title: Radio 单选
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Radio 单选

## 基础使用

<code src="./demos/base.tsx"></code>

## 不同按钮类型

注意：`Radio.Button` 自身不具备交互性，必须与 `Radio.Group` 一起使用才可正常工作

<code src="./demos/appearance.tsx"></code>

## 禁用

注意：Radio 自身的 `disabled` 优先级比 `Radio.Group` 高

<code src="./demos/disabled.tsx"></code>

## 尺寸

注意：Radio 自身的 `size` 优先级比 `Radio.Group` 高

<code src="./demos/size.tsx"></code>

## 垂直排列

你可以使用 `Space` 组件或者 `flex` 布局样式，创建垂直排列的 Radio 组合

<code src="./demos/vertical.tsx"></code>

> 请注意示例中的 `gap` 属性的兼容性，详见 [Can I Use](https://caniuse.com/flexbox-gap)
