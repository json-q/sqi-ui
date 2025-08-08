import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';
import type { PortalContainer } from '../_common/Portal';
import type { CSSMotionProps } from '../_common/CSSMotion';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export type TriggerType = 'hover' | 'click' | 'focus' | 'mousedown' | 'context-menu';

export interface TriggerProps {
  children?: ReactElement;
  popper?: ReactElement;
  arrow?: ReactElement;
  motion?: Omit<CSSMotionProps, 'children'>;
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

  /**
   * @description 触发方式
   * @default "hover"
   */
  trigger?: TriggerType | TriggerType[];
  /**
   * @description 触发延迟的时间 ms 仅 hover 生效
   * @default 100
   */
  delay?: number;
  /**
   * @description 点击外部是否可关闭
   * @default true
   */
  clickOutsideClose?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean, events?: { e: Event; trigger: string }) => void;
  disabled?: boolean;
}
