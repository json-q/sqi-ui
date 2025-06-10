---
title: Gird 布局
nav:
  title: 组件
  order: 2
group:
  title: 布局
  order: 2
---

# Gird 布局

将区域分为 24 栅格，规范整体布局

## 基础使用

<code src="./demos/base.tsx"></code>

## 列间距

- gutter 传入 `number`，则为列间距
- gutter 传入 `[number, number]`，则为列间距和行间距
- gutter 传入对象，例如 `{ xs: 4, sm: 8, md: 16, lg: 32 }`，则为响应式间距

<code src="./demos/gap.tsx"></code>

## Flex 自定义填充

<code src="./demos/flex.tsx"></code>

## Col 横向排版

<code src="./demos/justify.tsx"></code>

## Col 竖向对齐

<code src="./demos/align.tsx"></code>
