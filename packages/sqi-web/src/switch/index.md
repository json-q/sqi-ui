---
title: Switch 开关
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Switch 开关

## 基础使用

<code src="./demos/base.tsx"></code>

## 禁用和加载态

<code src="./demos/status.tsx"></code>

## 尺寸

<code src="./demos/size.tsx"></code>

## 自定义 Loading 图标

<code src="./demos/custom-icon.tsx"></code>

## API

| 属性           | 描述                     | 类型                                           | 默认值  |
| -------------- | ------------------------ | ---------------------------------------------- | ------- |
| defaultChecked | 非受控 是否选中          | `boolean`                                      |         |
| checked        | 受控 是否选中            | `boolean`                                      |         |
| disabled       | 是否禁用                 | `boolean`                                      | `false` |
| size           | 尺寸                     | `sm`\|`md`\|`lg`                               | `md`    |
| label          | 文本                     | `[checked?: ReactNode, unchecked?: ReactNode]` |         |
| loading        | loading 状态             | `boolean`                                      | `false` |
| loadingIcon    | 自定义 loading 图标      | `ReactNode`                                    |         |
| onChange       | 状态切换时触发           | ` (checked: boolean, event: Event) => void`    |         |
| onClick        | 点击时触发(禁用状态无效) | ` (checked: boolean, event: Event) => void`    |         |
