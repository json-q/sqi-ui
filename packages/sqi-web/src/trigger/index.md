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

实现一个 popperjs 的基础功能（逻辑实现并不优雅，且诸多情况未考虑，比如 `table th tr` 下的定位父元素，css `will-change transform` 等的定位父元素）

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

## 多个触发行为

<!-- <code src="./demos/motion.tsx"></code> -->
