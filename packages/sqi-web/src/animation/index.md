---
title: Animation 过渡动画
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: 9
---

# Animation 过渡动画

Animation 组件基于 [react-transition-group](https://reactcommunity.org/react-transition-group) 进行封装并提供预设过渡动画效果

`Animation` 下的元素/组件需要是一个规范的 HTMLElement，且能够正确接收 style className ref 属性，如果是自定义组件，则需要使用 `React.forwardRef` 来转发 ref，并保持 className style 属性能正常接收。

## Fade

<code src="./demos/fade.tsx"></code>

## Collapse

当使用 `Collapse` 组件时，不要在最外层元素中添加 padding，会导致测量的尺寸有误。

如果出现过渡动画闪烁等异常问题，需移除 padding 或使用新的 div 进行外层包装

<code src="./demos/collapse.tsx"></code>

## Slide

<code src="./demos/slide.tsx"></code>

## Bounce

<code src="./demos/bounce.tsx"></code>
