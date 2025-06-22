---
title: Input 输入框
nav:
  title: 组件
  order: 2
group:
  title: 输入
  order: 2
---

# Input 输入框

## 基础使用

<code src="./demos/base.tsx"></code>

## 尺寸

使用 `size` 改变输入框的尺寸

<code src="./demos/size.tsx"></code>

## 样式变体

使用 `variant` 改变输入框的样式

<code src="./demos/variant.tsx"></code>

## 对齐方式

使用 `align` 调整输入内容的对齐方式

<code src="./demos/align.tsx"></code>

## 状态

使用 `status` 设置输入框的状态

<code src="./demos/status.tsx"></code>

## 提示内容

使用 `tips` 设置输入框的提示内容，内容的颜色跟随 `status` 的设置

<code src="./demos/tips.tsx"></code>

## 前置后置标签

使用 `addonBefore` 和 `addonAfter` 在输入框前后添加内容

<code src="./demos/addon.tsx"></code>

## 前后缀

使用 `prefix` 和 `suffix` 在输入框内添加前缀和后缀

<code src="./demos/affix.tsx"></code>

## 密码框

使用 `type="password"` 创建密码框，处于密码框状态下，`suffix` 是不生效的

使用 `visibilityToggle` 控制密码是否可见，也可传入对象 `visibilityToggle.visible` 进行外部受控，传入 `visibilityToggle.renderIcon` 自定义密码框的图标

<code src="./demos/password.tsx"></code>

## 输入长度限制

使用 `maxLength` 限制输入的长度，当传入 `number` 类型时，会显示输入长度，你可以传入对象格式来隐藏字数限制的提示

<code src="./demos/max-length.tsx"></code>

## API

下面是将提供的关于输入框组件`InputProps`接口属性转换成Markdown格式的表格介绍：

### InputProps

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性) | `string` | `text` |
| size | 输入框尺寸 | `ConfigSize` | `md` |
| status | 输入框状态 | `success`\|`warning`\| `error` |  |
| tips | 提示内容 | `ReactNode` |  |
| disabled | 是否禁用 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| align | 输入框对齐方式 | `left`\|`center` \|`right` | `left` |
| variant | 输入框样式变体 | `outline`\|`borderless`\|`underline` | `outline` |
| addonBefore | 输入框前置标签 | `ReactNode` |  |
| addonAfter | 输入框后置标签 | `ReactNode` |  |
| prefix | 输入框前缀 | `ReactNode` |  |
| suffix | 输入框后缀 | `ReactNode` |  |
| visibilityToggle | 是否启用密码显隐切换及配置 | `boolean`\| [VisibilityToggle](#visibilitytoggle) |  |
| maxLength | 字符最大长度及其配置 | `number`\| [MaxLength](#maxlength) |  |
| onChange | 输入内容变化时触发 | `(value: string, e: FormEvent<HTMLInputElement> \| MouseEvent \| CompositionEvent<HTMLDivElement>) => void` |  |

### VisibilityToggle

| 属性            | 描述               | 类型                              | 默认值 |
| --------------- | ------------------ | --------------------------------- | ------ |
| visible         | 密码是否可见       | `boolean`                         |        |
| renderIcon      | 自定义渲染密码图标 | `(visible: boolean) => ReactNode` |        |
| onVisibleChange | 切换密码显隐时触发 | `(visible: boolean) => void`      |        |

### MaxLength

| 属性      | 描述                               | 类型      | 默认值 |
| --------- | ---------------------------------- | --------- | ------ |
| length    | 字符最大长度                       | `number`  |        |
| showLimit | 是否显示字符长度限制               | `boolean` | `true` |
| errorOnly | 超出内容长度仅提示错误，不限制输入 | `boolean` |        |
