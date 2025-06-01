import type { CSSProperties, ReactNode } from 'react';

export interface DividerProps {
  /**
   * @description 分割线方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 分割线内容对齐方式
   * @default 'center'
   */
  align?: 'left' | 'right' | 'center';
  /**
   * @description 是否虚线
   */
  dashed?: boolean;
  /**
   * @description 分割线内容 同 children
   */
  text?: ReactNode;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}
