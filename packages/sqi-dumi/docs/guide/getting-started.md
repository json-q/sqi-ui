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

### 基础使用

推荐在 webpack、rspack、vite 等现代构建工具中使用，需引入全局的 css 变量才可正常显示样式，组件依赖这些 css 变量

```tsx | pure
// 需引入少量的全局样式属性才可使用
import '@sqi-ui/web/es/style/index.css';
import { Button } from '@sqi-ui/web';

export default function App() {
  return <Button type="primary">Hello World</Button>;
}
```

### 在 Next 中使用

首先需要在 `next.config.ts` 中配置 `transpilePackages`

```ts {4}
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@sqi-ui/web'],
};

export default nextConfig;
```

然后在 `global.css` 中引入全量的 css 样式

```css
/* global.css */
@import '@sqi-ui/web/dist/index.css';
```

你无需再标记 `use client`，组件中已经进行标记来兼容 Next.js

```tsx | pure
import { Button } from '@sqi-ui/web';

export default function Home() {
  return <Button type="primary">Hello Next</Button>;
}
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
