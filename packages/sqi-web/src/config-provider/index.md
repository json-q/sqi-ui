---
title: ConfigProvider 全局配置
nav:
  title: 组件
  order: 2
group:
  title: 其它
  order: 8
---

# ConfigProvider 全局配置

## 基础使用

通过使用 `ConfigProvider` 可以设置全局的组件属性

<code src="./demos/base.tsx"></code>

## 嵌套 ConfigProvider

嵌套 `ConfigProvider` 可以覆盖外层 `ConfigProvider` 的属性

<code src="./demos/nest.tsx"></code>

## API

| 属性            | 描述                             | 类型              | 默认值     |
| --------------- | -------------------------------- | ----------------- | ---------- |
| componentConfig | 全局配置组件的默认参数           | `ComponentConfig` |            |
| size            | 组件默认尺寸，仅 `size` 属性生效 | `ConfigSize`      | `md`       |
| prefixCls       | 组件类名前缀                     | `string`          | `sqi`      |
| iconPrefix      | 组件图标前缀                     | `string`          | `sqi-icon` |
| children        | 子节点内容                       | `ReactNode`       |            |
