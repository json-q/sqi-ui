import type { InputHTMLAttributes } from 'react';
import type { LiteralUnion } from '../_util/type';
import type { ConfigSize } from '../config-provider';

export type ValueType = string;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type' | 'value'> {
  /**
   * @description 输入框的值
   */
  value?: ValueType;
  defaultValue?: ValueType;
  /**
   * @description 输入框类型
   * @link https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/input#%3Cinput%3E_types
   * @default 'text'
   */
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
  /**
   * @description 输入框尺寸
   * @default 'md'
   */
  size?: ConfigSize;
  /**
   * @description 输入框状态
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 输入框对齐方式
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @description 输入框样式变体
   * @default 'outline'
   */
  variant?: 'outline' | 'borderless' | 'underline';
}
