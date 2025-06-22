---
title: Input 输入框
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Input 输入框

## 基础使用

<code src="./demos/base.tsx"></code>

## 尺寸

使用 `size` 改变输入框的尺寸

<code src="./demos/size.tsx"></code>

## 样式变体

使用 `variant` 改变输入框的样式

<code src="./demos/variant.tsx"></code>

## 对齐方式

使用 `align` 调整输入内容的对齐方式

<code src="./demos/align.tsx"></code>

## 状态

使用 `status` 设置输入框的状态

<code src="./demos/status.tsx"></code>

## 前置后置标签

使用 `addonBefore` 和 `addonAfter` 在输入框前后添加内容

<code src="./demos/addon.tsx"></code>

## 前后缀

使用 `prefix` 和 `suffix` 在输入框内添加前缀和后缀

<code src="./demos/affix.tsx"></code>

## 密码框

使用 `type="password"` 创建密码框，处于密码框状态下，`suffix` 是不生效的

使用 `visibilityToggle` 控制密码是否可见，也可传入对象 `visibilityToggle.visible` 进行外部受控，传入 `visibilityToggle.renderIcon` 自定义密码框的图标

<code src="./demos/password.tsx"></code>

## 输入长度限制

使用 `maxLength` 限制输入的长度，当传入 `number` 类型时，会显示输入长度，你可以传入对象格式来隐藏字数限制的提示

<code src="./demos/max-length.tsx"></code>

> 当 `maxLength` 为 Object 时，`showLimit` 默认为 undefined，如果你需要展示字数限制的提示，请显式设置 `showLimit` 为 true
