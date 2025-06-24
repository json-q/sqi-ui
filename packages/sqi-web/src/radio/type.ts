import type { ReactNode } from 'react';

export type RadioValue = string | number | boolean;

export interface RadioProps {
  /**
   * @description 是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 非受控是否选中
   * @default false
   */
  defaultChecked?: boolean;
  children?: ReactNode;
  /**
   * @description 是否禁用。若存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。优先级：Radio.disabled > RadioGroup.disabled
   */
  disabled?: boolean;
  /**
   * @description 描述文本
   */
  label?: ReactNode;
  /**
   * @description input 的 name 属性
   */
  name?: string;
  /**
   * @description 单选按钮的值
   */
  value?: RadioValue;
  /**
   * 选中状态变化时触发
   */
  onChange?: (checked: boolean) => void;
}
