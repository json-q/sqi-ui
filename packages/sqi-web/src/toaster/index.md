---
title: Toaster 轻提示
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 5
---

# Toaster 轻提示

完全自定义内容的轻提示组件

## 基础用法

<code src="./demos/base.tsx"></code>

## 方向

<code src="./demos/placement.tsx"></code>

## 多个 Toaster 组件

若一个页面中存在多个 Toaster 组件，则必须给 `Toaster` 组件设置 `id` 拥有唯一性，你可以使用 react `useId` 来进行标识

## API

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 唯一标识符，用于区分不同的 Toaster 实例 | `string \| number` | - |
| `placement` | Toast 弹出的位置 | `'top-start'` `'top-center'` `'top-end'` `'bottom-start'` `'bottom-center'` `bottom-end` | `top-center` |
| `gap` | toast 之间的间距 | `number` | - |
| `className` | toast 容器的 className | `string` | - |
| `style` | toast 容器的 style | `React.CSSProperties` | - |
| `offset` | 距离边界的距离 | `{ top?: string \| number;  right?: string \| number; bottom?: string \| number; left?: string \| number } \| string \| number` | - |
| `duration` | toast 自动关闭的持续时间(ms) | `number` | - |

> 💡 注：表中“默认值”一栏为 `-` 表示该属性无默认值（即为可选且未指定默认行为），具体默认行为可能由组件内部实现决定。
