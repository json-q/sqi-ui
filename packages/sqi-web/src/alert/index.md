---
title: Alert 提示
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 3
---

# Alert 提示

## 基本使用

<code src="./demos/base.tsx"></code>

## 多种类型的提示

<code src="./demos/type.tsx"></code>

## 额外的操作按钮

<code src="./demos/action.tsx"></code>

## API

| 属性        | 描述                                         | 类型                                        | 默认值 |
| ----------- | -------------------------------------------- | ------------------------------------------- | ------ |
| title       | 提示标题                                     | `ReactNode`                                 |        |
| description | 提示内容                                     | `ReactNode`                                 |        |
| type        | 提示类型                                     | `success` \| `info` \| `warning` \| `error` | `info` |
| closable    | 是否可关闭                                   | `boolean`                                   |        |
| showIcon    | 是否显示提示图标                             | `boolean`                                   | `true` |
| icon        | 自定义显示图标，仅在 showIcon 为 true 时生效 | `ReactNode`                                 |        |
| action      | 自定义操作                                   | `ReactNode`                                 |        |
| onClose     | 关闭时触发的函数                             | `(e: MouseEvent) => void`                   |        |
| className   | 自定义类名                                   | `string`                                    |        |
| style       | 内联样式                                     | `CSSProperties`                             |        |
