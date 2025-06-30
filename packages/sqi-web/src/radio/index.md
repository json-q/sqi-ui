---
title: Radio 单选
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Radio 单选

## 基础使用

<code src="./demos/base.tsx"></code>

## 不同按钮类型

注意：`Radio.Button` 自身不具备交互性，必须与 `Radio.Group` 一起使用才可正常工作

<code src="./demos/appearance.tsx"></code>

## 禁用

注意：Radio 自身的 `disabled` 优先级比 `Radio.Group` 高

<code src="./demos/disabled.tsx"></code>

## 尺寸

<code src="./demos/size.tsx"></code>

## 垂直排列

你可以使用 `Space` 组件或者 `flex` 布局样式，创建垂直排列的 Radio 组合

<code src="./demos/vertical.tsx"></code>

> 请注意示例中的 `gap` 属性的兼容性，详见 [Can I Use](https://caniuse.com/flexbox-gap)

## 自定义渲染内容

<code src="./demos/custom-render.tsx"></code>

## 配置项渲染

<code src="./demos/options.tsx"></code>

## API

### RadioProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `children` | 子元素 | `ReactNode` | - |
| `checked` | 是否选中（受控） | `boolean` | - |
| `defaultChecked` | 非受控默认选中状态 | `boolean` | `false` |
| `disabled` | 是否禁用（优先级：Radio.disabled > RadioGroup.disabled） | `boolean` | - |
| `label` | 描述文本 | `ReactNode` | - |
| `name` | input 的 name 属性 | `string` | - |
| `value` | 单选按钮的值（同步到 input 的 value 属性） | `RadioValue` | - |
| `onChange` | 选中值变化时触发 | `(e: RadioChangeEvent) => void` | - |

### RadioGroupProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `className` | 自定义类名 | `string` |  |
| `style` | 自定义样式 | `CSSProperties` |  |
| `children` | 子元素 | `ReactNode` |  |
| `name` | 单选按钮组名称 | `string` |  |
| `value` | 选中值（受控） | `sting`\|`number` |  |
| `defaultValue` | 默认选中的选项（非受控） | `sting`\|`number` |  |
| `disabled` | 是否禁用所有单选按钮（优先级：Radio.disabled > RadioGroup.disabled） | `boolean` | `false` |
| `size` | 单选按钮组尺寸（仅 Button 样式下有效） | `ConfigSize` | `'md'` |
| `appearance` | 单选按钮组主题（仅在使用 options 渲染时生效） | `radio` \|`button` | `radio` |
| `buttonVariant` | 单选按钮组样式（仅 Button 下生效） | `filled`\|`outline` | `outline` |
| `options` | 配置形式设置子元素 | [RadioOptions[]](#radiooptions) \|`string[]`\|`number[]` |  |
| `onChange` | 选中值发生变化时触发 | `(e: RadioChangeEvent) => void` |  |

### RadioOptions

| 属性        | 描述                                                  | 类型                            | 默认值 |
| ----------- | ----------------------------------------------------- | ------------------------------- | ------ |
| `label`     | 显示标签                                              | `ReactNode`                     |        |
| `value`     | 值                                                    | `sting`\|`number`               |        |
| `disabled`  | 是否禁用                                              | `boolean`                       |        |
| `className` | 自定义类名                                            | `string`                        |        |
| `style`     | 自定义样式                                            | `CSSProperties`                 |        |
| `id`        | 元素 ID                                               | `string`                        |        |
| `title`     | 额外提示信息                                          | `string`                        |        |
| `onChange`  | 值变化时触发（优先级高于 `RadioGroup` 的 `onChange`） | `(e: RadioChangeEvent) => void` |        |

### RadioChangeEvent

| 属性     | 描述                               | 类型                                                      | 默认值 |
| -------- | ---------------------------------- | --------------------------------------------------------- | ------ |
| `target` | 原生 input 的 props 及少量扩展属性 | `Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>` |        |
| `event`  | 原生 input 事件                    | `ChangeEvent<HTMLInputElement>`                           |        |
