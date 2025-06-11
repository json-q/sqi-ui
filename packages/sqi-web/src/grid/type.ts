import type { CSSProperties, ReactNode } from 'react';
import type { Breakpoint } from '../_util/responsiveObserve';

export type RowGutter = number | Partial<Record<Breakpoint, number>>;

export interface RowProps {
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

  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type FlexType = string | number | 'auto' | 'none';
export interface ColSize {
  flex?: FlexType;
  span?: number;
  order?: number;
  offset?: number;
}

export interface ColProps {
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

  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  /**
   * @description 自定义 flex 布局属性
   */
  flex?: FlexType;

  xs?: number | ColProps;
  sm?: number | ColProps;
  md?: number | ColProps;
  lg?: number | ColProps;
  xl?: number | ColProps;
  xxl?: number | ColProps;
}
