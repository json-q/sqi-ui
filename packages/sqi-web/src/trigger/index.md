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

## 核心功能

<code src="./demos/core.tsx"></code>

注意：

- 当 `direction` 的主轴处于 `top` 和 `bottom` 时，`offset` 仅支持 y 轴的偏移
- 当 `direction` 的主轴处于 `left` 和 `right` 时，`offset` 仅支持 x 轴的偏移。

> Why? 当同时支持 x y 轴的偏移，由于直接对 popup 本身设置了偏移，在计算边界时则会对此偏移进行值累加，最终会导致边缘检测出现明显的误差（popup 的边缘检测看上去会很奇怪）
