---
title: Button 按钮
nav:
  title: 组件
  order: 2
group:
  title: 通用
  order: 1
---

# Button 按钮

## 基础使用

基本使用，type 预设 `primary` `default` `link` 三种基础按钮/颜色类型，可通过设置 `status` 来获得更多的颜色按钮。

当设置 `type='link;` 或 href 属性时，元素渲染则会变为 a 标签，且行为与 a 标签一致

<code src="./demos/base.tsx"></code>

## 禁用状态

<code src="./demos/disabled.tsx"></code>

## loading 状态

<code src="./demos/loading.tsx"></code>

## variant 变体

可设置 `outline` `text` `dashed` 三种其它样式变体

<code src="./demos/variant.tsx"></code>

## 按钮尺寸

<code src="./demos/size.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 按钮内容 | `ReactNode` |  |
| type | 按钮类型 | `primary`\|`default`\|`link` | `default` |
| status | 按钮状态 | `primary`\| `danger`\| `warning`\| `success` |  |
| variant | 按钮变体 | `default` \|`outline`\|`text`\|`dashed` |  |
| loading | 按钮loading | `boolean` | `false` |
| htmlType | 原生 `button` 标签的 type 属性 | `button`\| `submit`\| `reset` | `button` |
| disabled | 按钮是否禁用 | `boolean` | `false` |
| icon | 按钮图标 | `ReactNode` |  |
| size | 按钮尺寸 | `ConfigSize` | `md` |
| href | 与 a 标签 href 行为一致 | `string` |  |
| target | a 标签 target 属性，href 存在时生效 | `string` |  |
| anchorProps | a 标签属性，href 存在时生效 | `HTMLProps<HTMLAnchorElement>` |  |
| onClick | 点击按钮的回调 | `MouseEventHandler<HTMLButtonElement \| HTMLAnchorElement>` |  |
