# Web

## 构建

- 多产物构建
- css 按需加载（需使用 `babel- plugin-import`）

### 构建模式

- 编译使用 `rslib`，仅编译 js。
- css 使用 `gulp` 操作，因为 css 产物较为复杂，且组件内不直接引用 css ，会有很多特殊操作，以插件形式给 `rslib` 也并不是很合适，`gulp` 这种阶段构建的就很直观
