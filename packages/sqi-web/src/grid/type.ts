import type { HTMLAttributes } from 'react';
import type { Breakpoint } from '../_util/responsiveObserve';
import type { LiteralUnion } from '../_util/type';

export type RowGutter = number | Partial<Record<Breakpoint, number>>;

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 栅格间隔
   * @default 0
   */
  gutter?: RowGutter | RowGutter[];
  /**
   * @description 列元素对齐方式
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * @description 列元素对齐方式
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  /**
   * @description 是否自动换行
   * @default true
   */
  wrap?: boolean;
}

export type FlexType = number | LiteralUnion<'none' | 'auto'>;
export interface ColSize {
  flex?: FlexType;
  span?: number;
  order?: number;
  offset?: number;
}

export interface ColProps extends HTMLAttributes<HTMLDivElement>, Partial<Record<Breakpoint, number | ColSize>> {
  /**
   * @description 栅格占位格数
   */
  span?: number;
  /**
   * @description 栅格偏移格数
   * @default 0
   */
  offset?: number;
  /**
   * @description 栅格排列顺序
   */
  order?: number;
  /**
   * @description 自定义 flex 布局属性
   */
  flex?: FlexType;
}
