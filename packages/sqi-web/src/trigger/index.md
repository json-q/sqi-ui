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

## Popper 核心功能

<code src="./demos/core.tsx"></code>

注意：

- 当 `direction` 的主轴处于 `top` 和 `bottom` 时，`offset` **推荐仅设置 y 轴**的偏移
- 当 `direction` 的主轴处于 `left` 和 `right` 时，`offset` **推荐仅设置 x 轴**的偏移。

> Why? 当同时支持 x y 轴的偏移，由于直接对 popper 本身设置了偏移，在计算边界时则会对此偏移进行值累加，最终会导致边缘检测出现明显的误差（也不是误差，而是此时 popper 的边缘检测看上去会很奇怪）
