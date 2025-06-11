---
title: 详解 flex
order: 2
nav:
  title: 博客
  order: 3
---

# 详解 flex 1

## flex 1 的用途

开发中经常在 flexbox 中使用 `flex: 1;` 来让某一部分自动填充沾满剩余空间，但是却没怎么了解过相关细节，只知道 `flex 1` 可以让元素填充剩余空间，是几个属性的缩写，也没有去深究过。

> 本人的 css 能力简直渣爆了

## flex 属性的语法

`flex` 是一个属性简写，可以指定1个、2个或3个值：

`flex` 其完整的三值语法顺序是 `flex-grow | flex-shrink | flex-basis`，其默认值是 `0 1 auto`。

- `flex-grow`：默认为 `0`，盒子宽度不会被拉伸。
  - 为 `1` 时，盒子可以伸展，如果有剩余空间，该盒子将按比例分配剩余空间。
- `flex-shrink`：默认为 `1`
  - 为 `1` 时，盒子可以收缩，如果空间不足，该盒子将按比例收缩。
- `flex-basis`：默认为 `auto`，盒子初始宽度固定。
  - 当设置如 `100px` `30%` `auto` 等**带单位**值时，盒子初始宽度根据该值进行设置。

> `flex-shrink` 就很好理解，主要深入的就是 `flex-grow` 和 `flex-basis` 的使用。

### flex-grow 和 flex-basis 的协同使用

`flex-grow` 和 `flex-basis` 是可以互相搭配使用的（`flex-basis` 是基础，`flex-grow` 是扩展补充）

- 项目会先以 `flex-basis` 的值作为初始尺寸。
- 如果容器空间**大于**所有项目的 `flex-basis` 之和，剩余空间会根据 `flex-grow` 的比例分配。

  ```css
  .item1 {
    flex-basis: 100px;
    flex-grow: 1;
  }
  .item2 {
    flex-basis: 200px;
    flex-grow: 2;
  }
  ```

  - 初始总宽度为 `100px + 200px = 300px`。
  - 如果容器宽度为 500px，剩余 200px 会按 1:2 的比例分配（item1 得到 66.67px，item2 得到 133.33px）。

- `flex-basis` 优先级更高
- `flex-basis` 的优先级高于 width，但 `flex-grow` 是基于 `flex-basis` 的扩展。

  ```css
  .item {
    flex-basis: 200px;
    width: 150px;
  }
  ```

  - `flex-basis` 会覆盖 width，盒子初始尺寸仍为 200px。

### 单值语法

- 无单位数（如 `1`）：会被当作 `flex-grow` 的值。
- 有效的宽度值（如 `10em` `30%` `auto`）：会被当作 `flex-basis` 的值。

### 双值语法

- 第一个值必须是无单位数，代表`flex-grow`。
- 第二个值：
  - 如果是无单位数，代表`flex-shrink`。
  - 如果是宽度值，代表`flex-basis`。

### 三值语法

按顺序为`flex-grow`，`flex-shrink`，`flex-basis`。

### flex 的常用缩写

- `flex: 1` 等价于 `flex: 1 1 0%`。即项目的初始大小被忽略，所有空间都根据 `flex-grow `和 `flex-shrink` 来分配。
- `flex: initial` 等价于 `flex: 0 1 auto`。项目不会伸展（`flex-grow:0`），但可以收缩（`flex-shrink:1`），初始大小根据内容或设置的宽度/高度。
- `flex: auto` 等价于 `flex: 1 1 auto`。项目可以伸展和收缩，初始大小根据内容或设置的宽度/高度。
- `flex: none` 等价于 `flex: 0 0 auto`。项目既不会伸展也不会收缩，大小由内容或设置的宽度/高度决定。
