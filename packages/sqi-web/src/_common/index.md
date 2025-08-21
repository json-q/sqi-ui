---
title: Base 基础组件
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: 9
---

# Base 基础组件

基础组件仅供内部作为底层组件使用，不对外提供任何可扩展性功能

## Portal

### 挂载销毁

<code src="./demos/portal.tsx"></code>

## CSSMotion 动画

`CSSMotion` 组件基于 [react-transition-state](https://szhsin.github.io/react-transition-state) 进行简易二次封装，支持所有其 API 参数，更多 API 可查阅 [react-transition-state](https://szhsin.github.io/react-transition-state) 文档

`CSSMotion` 支持直接传入 children 和 回调 children 两种方式，当直接传入 children 时，请确保该节点是一个标准的 HTMLElement，因为动画效果会作为 css 绑定到该节点，非 HTMLElement 节点将无法正确绑定动画效果

### 基本使用

初始即显示，隐藏/销毁时会存在动画过程

<code src="./demos/css-motion-base.tsx"></code>

> 当设置 `unmountOnExit` 为 `false` 时，组件不会销毁，你需要主动设置相关 css 隐藏组件

### 切换显示

<code src="./demos/css-motion-toggle.tsx"></code>

### 和 Portal 组件一起使用

<code src="./demos/css-motion-portal.tsx"></code>

## ResizeObserver

此处的 `ResizeObserver` 仅关注目标元素尺寸变化

<code src="./demos/resize-observer.tsx"></code>
