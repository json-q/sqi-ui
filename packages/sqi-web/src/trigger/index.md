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

严格意义上说，Trigger 组件也是内部使用的，外部使用会让代码组织变得更复杂。

我们推荐使用 Popover 组件（规划中）来替代 Trigger 组件

## Popper 定位

实现一个 popperjs 的基础功能（逻辑实现很脏，且很多情况未考虑，比如 `table th tr` 下的定位父元素，css `will-change transform` 等的定位父元素）

后续可能会对定位功能进行重写，如果有能力重写的话，I am very vegetable :)

> 目前的设计，箭头和定位内容是两套独立的定位逻辑，两者基本互不关联，对功能的实现产生很大影响。在参考 `ant design` 的设计后，可以采取把箭头定位到内容中的方案进行小范围偏移可以减少非常多逻辑代码。使用 `display: block;` 即可实现 abosult 基于 [包含块](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) 定位

<code src="./demos/core.tsx"></code>

注意：

- 当 `direction` 的主轴处于 `top` 和 `bottom` 时，`offset` **仅设置 y 轴**的偏移可工作
- 当 `direction` 的主轴处于 `left` 和 `right` 时，`offset` **仅设置 x 轴**的偏移可工作。

> Why? 当同时支持 x y 轴的偏移，由于直接对 popper 本身设置了偏移，在计算边界时则会对此偏移进行值累加，最终会导致边缘检测出现明显的误差（也不是误差，而是此时 popper 的边缘检测看上去会很奇怪）

## 触发事件

动画无法添加 transform，因为 position 的定位使用 `transform`，会有冲突

<!-- <code src="./demos/motion.tsx"></code> -->
