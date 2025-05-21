import type { ButtonHTMLAttributes, HTMLProps, MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * @description 按钮内容
   */
  children?: ReactNode;
  /**
   * @description 按钮类型 type="primary" 和 status="primary" 的视觉效果一致
   * @default "default" 容器灰色背景
   */
  type?: 'primary' | 'default' | 'link';
  /**
   * @description 按钮状态
   */
  status?: 'primary' | 'danger' | 'warning' | 'success';
  /**
   * @description 按钮变体
   */
  variant?: 'default' | 'outline' | 'text' | 'dashed';
  /**
   * @description 按钮 loading
   */
  loading?: boolean;
  /**
   * @description 原生 `<button>` 标签的 type 属性
   * @default "button"
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * @description 按钮是否禁用
   */
  disabled?: boolean;
  /**
   * @description 按钮图标
   */
  icon?: ReactNode;
  /**
   * @description 按钮尺寸
   */
  size?: 'sm' | 'lg';
  /**
   * @description 与 a 标签 href 行为一致
   */
  href?: string;
  /**
   * @description a 标签 target 属性，href 存在时生效
   */
  target?: string;
  /**
   * @description a 标签属性，href 存在时生效
   */
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  /**
   * @description 点击按钮的回调
   */
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
