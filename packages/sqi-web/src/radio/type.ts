import type { ReactNode } from 'react';
import type { BaseCheckboxProps } from '../_common/BaseCheckbox';

export type RadioValue = string | number;

export interface RadioProps extends Omit<BaseCheckboxProps, 'type' | 'prefixCls'> {
  /**
   * @description 是否选中
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
   * @default false
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
   * @description 单选按钮的值, 这个值会同步设置到 input 的 value 属性
   */
  value?: RadioValue;
}
