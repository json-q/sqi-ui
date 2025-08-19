import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';
import type { CSSMotionProps } from '../_common/CSSMotion';
import type { PortalContainer } from '../_common/Portal';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export type TriggerType = 'hover' | 'click' | 'focus' | 'context-menu';

export interface TriggerProps {
  /**
   * popper 的根元素 className
   */
  className?: string;
  /**
   * @description 触发的目标元素
   */
  children?: ReactElement;
  /**
   * @description 悬浮元素
   */
  popper?: ReactElement;
  /**
   * @description 箭头元素
   */
  arrow?: ReactElement;
  /**
   * @description 动画 props 继承自 [react-transition-state](https://szhsin.github.io/react-transition-state)
   */
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
   * @default 0
   */
  offset?: number | { x: number; y: number };
  /**
   * @description popper 元素层级
   * @default 1
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
   * @description 禁用行为
   */
  disabled?: boolean;
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
  /**
   * @description 非受控显示隐藏状态
   */
  defaultVisible?: boolean;
  /**
   * @description 受控显示隐藏状态
   */
  visible?: boolean;
  /**
   * @description 状态更改触发
   */
  onVisibleChange?: (visible: boolean, events?: { e: Event; trigger: string }) => void;
}
