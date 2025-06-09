import type { CSSProperties, ReactNode } from 'react';
import type { Breakpoint } from '../_util/responsiveObserve';

export type GridRowGutter = number | Partial<Record<Breakpoint, number>>;

export interface RowProps {
  /**
   * @description 栅格间隔
   * @default 0
   */
  gutter?: GridRowGutter | GridRowGutter[];
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

  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}
