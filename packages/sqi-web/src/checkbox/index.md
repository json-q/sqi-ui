---
title: Checkbox 多选框
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Checkbox 多选框

使用方式已尽量贴近 `Radio` 组件，减少差异化 API

## 基础使用

<code src="./demos/base.tsx"></code>

## 受控

<code src="./demos/control.tsx"></code>

## 多选组

<code src="./demos/group.tsx"></code>

## 全选/半选

你可以使用 `indeterminate` 来实现全选/半选效果

注意：`indeterminate` 仅支持受控模式

<code src="./demos/indeterminate.tsx"></code>

## 自定义渲染内容

<code src="./demos/custom-render.tsx"></code>

## 配置项渲染

<code src="./demos/options.tsx"></code>

## API

### CheckboxProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `children` | 子元素 | `ReactNode \| ({ checked: boolean })=>ReactNode` | - |
| `checked` | 是否选中（受控） | `boolean` | - |
| `defaultChecked` | 非受控默认选中状态 | `boolean` | `false` |
| `disabled` | 是否禁用（优先级：Checkbox.disabled > CheckboxGroup.disabled） | `boolean` | - |
| `name` | input 的 name 属性 | `string` | - |
| `value` | 单选按钮的值（同步到 input 的 value 属性） | `CheckboxValue` | - |
| `indeterminate` | 设置 indeterminate 状态，只负责样式控制 | `boolean` | - |
| `onChange` | 选中值变化时触发 | `(e: CheckboxChangeEvent) => void` | - |

### CheckboxGroupProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `className` | 自定义类名 | `string` |  |
| `style` | 自定义样式 | `CSSProperties` |  |
| `children` | 子元素 | `ReactNode` |  |
| `name` | 多选按钮组下 input 的 name 属性 | `string` |  |
| `value` | 选中值（受控） | `CheckboxValue[]` |  |
| `defaultValue` | 默认选中的选项（非受控） | `CheckboxValue[]` |  |
| `disabled` | 是否禁用所有单选按钮（优先级：Checkbox.disabled > CheckboxGroup.disabled） | `boolean` | `false` |
| `renderOption` | 自定义渲染，仅配置 `options` 时生效 | ` (params: CheckboxOptions & {checked: boolean}) => ReactNode` |  |
| `onChange` | 选中值变化时触发 | `(e: CheckboxValue) => void` |  |

### CheckboxOptions

| 属性        | 描述         | 类型                               | 默认值 |
| ----------- | ------------ | ---------------------------------- | ------ |
| `label`     | 显示标签     | `ReactNode`                        |        |
| `value`     | 值           | `CheckboxValue`                    |        |
| `disabled`  | 是否禁用     | `boolean`                          |        |
| `className` | 自定义类名   | `string`                           |        |
| `style`     | 自定义样式   | `CSSProperties`                    |        |
| `id`        | 元素 ID      | `string`                           |        |
| `title`     | 额外提示信息 | `string`                           |        |
| `onChange`  | 值变化时触发 | `(e: CheckboxChangeEvent) => void` |        |

### CheckboxChangeEvent

| 属性     | 描述                               | 类型                                                      | 默认值 |
| -------- | ---------------------------------- | --------------------------------------------------------- | ------ |
| `target` | 原生 input 的 props 及少量扩展属性 | `Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>` |        |
| `event`  | 原生 input 事件                    | `ChangeEvent<HTMLInputElement>`                           |        |
