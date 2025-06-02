---
title: 快速开始
order: 1
nav:
  title: 指南
  order: 1
---

# 快速开始

## 安装

```bash
npm i @sqi-ui/web
```

## 基础使用

推荐在 webpack、rspack、vite 等现代构建工具中使用

```tsx | pure
import { Button } from '@sqi-ui/web';
// 需引入少量的全局样式属性才可使用
import '@sqi-ui/web/es/style/index.css';
```

## 按需加载

组件本身默认会被构建工具 tree shake, css 需使用 `babel-plugin-import` 等工具实现按需加载

### rsbuild 中按需加载

如果使用 `rsbuild`，则其自带类似于 `babel-plugin-import` 的功能

```ts
// in rsbuild.config.ts
  source: {
    transformImport: [
      {
        libraryName: '@sqi-ui/web',
        libraryDirectory: 'es',
        style: 'css', // set `true` to import .less/.scss
      },
    ],
  },
```

### 使用 babel-plugin-import

你可以使用 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) 来实现 css 的按需加载

```bash
npm i babel-plugin-import -D
```

在 babel 配置中加入

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@sqi-ui/web',
      libraryDirectory: 'es',
      style: 'css',
    },
  ],
];
```
