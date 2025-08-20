---
title: Divider 分割线
nav:
  title: 组件
  order: 2
group:
  title: 布局
  order: 2
---

# Divider 分割线

## 基本使用

<code src="./demos/base.tsx"></code>

## 带文字分割线

传入 `text` 属性或 `children` 指定分割线内容, 使用 `align` 指定文字内容的对齐方式, `dashed` 设置是否为虚线

<code src="./demos/with-text.tsx"></code>

## 垂直分割线

<code src="./demos/vertical.tsx"></code>

## API

| 属性      | 描述                      | 类型                       | 默认值       |
| --------- | ------------------------- | -------------------------- | ------------ |
| direction | 分割线方向                | `horizontal`\|`vertical`   | `horizontal` |
| align     | 分割线内容对齐方式        | `left`\|`right` \|`center` | `center`     |
| dashed    | 是否虚线                  | `boolean`                  |              |
| text      | 分割线内容，同 `children` | `ReactNode`                |              |
| style     | 内联样式                  | `CSSProperties`            |              |
| className | 自定义类名                | `string`                   |              |
| children  | 子节点内容                | `ReactNode`                |              |
