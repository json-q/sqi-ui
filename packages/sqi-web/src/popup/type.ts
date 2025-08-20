import type { CSSProperties, ReactNode } from 'react';
import type { TriggerProps } from '../trigger';

export type PickTriggerProps = Pick<
  TriggerProps,
  // trigger behavior
  | 'trigger'
  | 'disabled'
  | 'delay'
  // popper behavior
  | 'defaultVisible'
  | 'visible'
  | 'onVisibleChange'
  | 'getContainer'
  | 'direction'
  | 'enableFlip'
  | 'enableShift'
  // popper style
  | 'zIndex'
  | 'outFocusToClose'
>;

export interface PopupProps extends PickTriggerProps {
  /**
   * @description 触发元素
   */
  children?: ReactNode;
  /**
   * @description Popup 内容
   */
  content?: ReactNode;
  /**
   * @description 是否展示箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * @description 隐藏时是否销毁
   * @default true
   */
  destroyOnClose?: boolean;
  /**
   * @description popper 元素相对于触发元素的距离
   * @default 4
   */
  offset?: number;
  styles?: {
    content?: CSSProperties;
    arrow?: CSSProperties;
  };
  classNames?: {
    content?: string;
    arrow?: string;
  };
}
