import type { HTMLAttributes } from 'react';
import type { ConfigSize } from '@sq-ui/web';

export type SizeType = ConfigSize | number | undefined;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 间距大小
   * @default ''
   */
  size?: SizeType | [SizeType, SizeType];
  /**
   * @description 方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 垂直对齐方式
   * @default ''
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 是否自动换行
   * @default false
   */
  wrap?: boolean;
  /**
   * @description 分隔符
   * @default ''
   */
  split?: React.ReactNode;
}
