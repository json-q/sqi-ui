import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';
import type { PortalContainer } from '../_common/Portal';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export interface TriggerProps {
  children?: ReactElement;
  popper?: ReactElement;
  /**
   * @description popper 位置
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
   * @description popper 偏移量
   */
  offset?: number | { x: number; y: number };
  /**
   * @description popper 元素层级
   * @default 0
   */
  zIndex?: number;
  /**
   * @description 指定 popper 挂载的位置
   * @default document.body
   */
  getContainer?: PortalContainer;
}
