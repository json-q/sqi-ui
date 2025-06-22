---
title: Space 间距
nav:
  title: 组件
  order: 2
group:
  title: 布局
  order: 2
---

# Space 间距

## 基础使用

使用 size 属性设置间距大小，可传入数字自定义间距

<code src="./demos/base.tsx"></code>

## 垂直间距

<code src="./demos/direction-vertical.tsx"></code>

## 对齐方向

<code src="./demos/align.tsx"></code>

## 自动换行

<code src="./demos/wrap.tsx"></code>

## 分隔符

<code src="./demos/split.tsx"></code>

## API

下面是将提供的 `SpaceProps` 接口属性转换为 Markdown 格式的表格介绍：

| 属性      | 描述         | 类型                                            | 默认值         |
| --------- | ------------ | ----------------------------------------------- | -------------- |
| size      | 间距大小     | [SizeType](#sizetype) \| `[SizeType, SizeType]` |                |
| direction | 方向         | `'horizontal' \| 'vertical'`                    | `'horizontal'` |
| align     | 垂直对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'`    |                |
| wrap      | 是否自动换行 | `boolean`                                       | `false`        |
| split     | 分隔符       | `ReactNode`                                     |                |

### SizeType

| 属性     | 描述     | 类型                                | 默认值 |
| -------- | -------- | ----------------------------------- | ------ |
| SizeType | 尺寸大小 | `ConfigSize`\|`number`\|`undefined` |        |
