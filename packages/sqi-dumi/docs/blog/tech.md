---
title: 技术选型
order: 1
nav:
  title: 博客
  order: 3
---

# 项目技术选型

## 技术栈

- 管理：pnpm workspace + turborepo
- 技术栈：react + typescript
- css预编译器：sass
- 文档：dumi（暂定）
- 构建工具：rslib + gulp
  - rslib 是用来替代 tsc + babel 的组合，css 使用 `gulp` 编排
- 代码规范：eslint + prettier（考虑换成 biome）

## 选择原因

### monorepo + turborepo

在单个仓库多项目的管理中，较为流行的有 `nx`、 `lerna` 和 `pnpm workspace`，这其中个人感觉 `pnpm monorepo` 是最容易上手的，而且也不用安装额外依赖。

而 `turborepo` 则是一个专门用于 monorepo 的构建系统，正常来说，一个 monorepo 项目的启动，必须要考虑先构建哪个包，再构建哪个包，最终运行哪个包，整个启动流程的构建脚本执行顺序，任务调度很费神。而使用 `turborepo`，只需要基于 `turbo.json`，运行类似于 `turbo run dev` 的命令， `turborepo` 会自动寻找到依赖关系，并执行对应的命令，完成项目启动。

`turborepo` 也有缓存任务结果的能力，热启动速度很快

### sass

不喜欢 css in js，运行时的性能开销是永远迈不过去的坎。当然并不是说 css in js 没有优势，定制化极为方便。再对比 less 和 sass 的话，就纯属个人喜好而已。

### dumi

没用 storybook 单纯不喜欢那个 UI，而且在源码示例的展示方面 dumi 还是更符合国人审美。

## rslib

最初计划依然使用构建模式 `gulp + tsc + babel` 诸如此类的传统构建（tsc 编译的产物可读性还是非常不错的），后来觉得可以尝试一下新的库开发工具。

rust 的加持下，选择的是 `rslib`，其实我还蛮喜欢 `rspack` 系列的。后来尝试了一下 `tsdown`（更快），又切回了 `rslib`，原因是 dev 下出现错误会无限 rebuild，感觉目前并不适合用于生产

### css 的加载设计

最初是想用 `tdesign` 那一套方式，即组件内导入 css，好处是开发者无感知的 css 按需引入（这种方式构建也简单），缺陷是 `next` `remix` 这些框架对这种方式并不是很友好。

`tdesign` 额外构建了一份无样式的纯组件产物，`semi` 则是提供了兼容插件，排除掉了组件内联导入的 css，各有利弊。

而此组件库依然采用 antd4.x 的 css 设计方案（arco 和它一样），提供多种 css 产物格式，方便开发者使用，在此模式下，css 需要开发者手动引入，全量导入或者使用 `babel-plugin-import` 按需导入
