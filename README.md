# 个人组件库

## 技术栈

- 管理模式：pnpm workspace + turborepo
- 语言：react + typescript
- css预编译器：scss
- 文档：dumi（暂定）
- 构建工具：~~rslib~~（tsdown）
- 代码规范：eslint + prettier（考虑换成 biome）

## 选择原因

### monorepo + turborepo

在单个仓库多项目的管理中，较为流行的有 `nx`、 `lerna` 和 `pnpm workspace`，这其中个人感觉 `pnpm monorepo` 是最容易上手的，而且也不用安装额外依赖。

而 `turborepo` 则是一个专门用于 monorepo 的构建系统，正常来说，一个 monorepo 项目的启动，必须要考虑先构建哪个包，再构建哪个包，最终运行哪个包，整个启动流程的构建脚本执行顺序，任务调度很费神。而使用 `turborepo`，只需要基于 `turbo.json`，运行类似于 `turbo run dev` 的命令， `turborepo` 会自动寻找到依赖关系，并执行对应的命令，完成项目启动。

而且 `turborepo` 也有缓存任务结果的能力，热启动速度很快

### scss

老实说，我不喜欢 cssinjs，运行时的性能开销是永远迈不过去的坎。当然并不是说 cssinjs 没有优势，只是个人喜好而已。

### dumi

没有用 storybook 单纯因为不喜欢那个 UI，而且在源码示例的展示方面 dumi 还是更符合国人审美。

## tsdown

rust 的加持下，最初选择的是 `rslib`，其实我还蛮喜欢 `rspack` 系列的，但是 webpack 构建产物的可读性算是臭名昭著了，`rslib` 也没有回避这个问题。

其实 `tsdown` 在构建 cjs 产物上的可读性相较于 esm 差一点，不过也还行。

> `tsdown` 的构建速度实际体验下来要比 `rslib` 更优，特别是开启 [使用oxc-transform进行dts构建](https://tsdown.dev/zh-CN/options/dts#%E5%90%AF%E7%94%A8-isolateddeclarations) 之后构建更快
