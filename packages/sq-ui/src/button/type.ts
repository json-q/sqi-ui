import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * 按钮内容
   */
  children?: ReactNode;
  /**
   * @description 按钮类型
   * @default "default" 容器灰色背景
   */
  type?: 'primary' | 'default' | 'text';
  /**
   * @description 按钮状态
   */
  status?: 'primary' | 'danger' | 'warning' | 'success';
  /**
   * @description 按钮变体
   */
  variant?: 'outline' | 'ghost' | 'dashed';
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
}
