import type { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * 按钮内容
   */
  children?: ReactNode;
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: 'primary' | 'default' | 'text';
  /**
   * @description 按钮状态
   * @default "default"
   */
  status?: 'primary' | 'danger' | 'warning' | 'success';
  /**
   * @description 原生 `<button>` 标签的 type 属性
   * @default "button"
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * @description 按钮是否禁用
   */
  disabled?: boolean;
}
