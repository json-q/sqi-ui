import type { CompositionEvent, FormEvent, InputHTMLAttributes, MouseEvent, ReactNode } from 'react';
import type { LiteralUnion } from '../_util/type';
import type { ConfigSize } from '../config-provider';

export type ValueType = string;

export interface VisibilityToggle {
  /**
   * @description 密码是否可见
   */
  visible?: boolean;
  /**
   * @description 自定义渲染密码图标
   */
  renderIcon?: (visible: boolean) => ReactNode;
  /**
   * @description 切换密码显隐时触发
   */
  onVisibleChange?: (visible: boolean) => void;
}

export interface MaxLength {
  /**
   * @description 字符最大长度
   */
  length?: number;
  /**
   * @description 是否显示字符长度限制
   * @default true
   */
  showLimit?: boolean;
  /**
   * @description 超出内容长度仅提示错误，不限制输入
   */
  errorOnly?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type' | 'value' | 'onChange' | 'maxLength'> {
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
   * @description 是否允许清除
   */
  allowClear?: boolean;
  /**
   * @description 输入框对齐方式
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @description 输入框样式变体
   * @default 'outline'
   */
  variant?: 'outline' | 'borderless' | 'underline';

  /**
   * @description 输入框前置标签
   */
  addonBefore?: ReactNode;
  /**
   * @description 输入框后置标签
   */
  addonAfter?: ReactNode;
  /**
   * @description 输入框前缀
   */
  prefix?: ReactNode;
  /**
   * @description 输入框后缀 type="password" 时会存在默认 suffix, 可传入覆盖默认图标
   */
  suffix?: ReactNode;
  visibilityToggle?: boolean | VisibilityToggle;
  maxLength?: number | MaxLength;
  /**
   * @description 输入内容变化时触发
   */
  onChange?: (value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void;
}
