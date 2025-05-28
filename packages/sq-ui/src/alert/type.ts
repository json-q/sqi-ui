import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export interface AlertProps {
  /**
   * @description 提示标题
   */
  title?: ReactNode;
  /**
   * @description 提示内容
   */
  description?: ReactNode;
  /**
   * @description 提示类型
   * @default 'info'
   */
  type?: 'success' | 'info' | 'warning' | 'error';
  /**
   * @description 是否可关闭
   */
  closable?: boolean;
  /**
   * @description 是否显示提示图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * @description 自定义显示图标，仅 showIcon 为 true 时生效
   */
  icon?: ReactNode;
  /**
   * @description 自定义操作
   */
  action?: ReactNode;
  /**
   * @description 关闭时触发
   */
  onClose?: (e: MouseEvent) => void;
  className?: string;
  style?: CSSProperties;
}
