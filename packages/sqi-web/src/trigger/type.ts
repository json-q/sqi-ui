import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export interface TriggerProps {
  children?: ReactElement;
  popup?: ReactElement;
  open?: boolean;
  /**
   * @description popup 位置
   * @default bottom
   */
  direction?: TriggerDirection;
  /**
   * @description 开启自动翻转
   * @default true
   */
  enableFlip?: boolean;
  /**
   * @description 开启自动位移
   * @default true
   */
  enableShift?: boolean;
  /**
   * @description popup 偏移量
   */
  offset?: number | { x: number; y: number };
  /**
   * @description popup 元素层级
   * @default 0
   */
  zIndex?: number;
}
