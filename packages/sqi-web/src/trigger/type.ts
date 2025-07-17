import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';
import type { PortalContainer } from '../_common/Portal';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export interface TriggerProps {
  children?: ReactElement;
  popup?: ReactElement;
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
  /**
   * @description 指定 popup 挂载的位置
   * @default document.body
   */
  getContainer?: PortalContainer;
}
