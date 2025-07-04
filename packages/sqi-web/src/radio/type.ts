import type { CSSProperties, ReactNode } from 'react';
import type { BaseCheckboxChangeEvent, BaseCheckboxProps } from '../_common/BaseCheckbox';
import type { ConfigSize } from '../config-provider';

export type RadioValue = string | number;

export type RadioChangeEvent = BaseCheckboxChangeEvent;

export interface RadioGroupContextState {
  name?: string;
  value?: RadioValue;
  disabled?: boolean;
  size?: ConfigSize;
  appearance?: 'radio' | 'button';
  buttonVariant?: 'filled' | 'outline';
  onChange?: (value: RadioChangeEvent) => void;
}

export interface RadioRenderItem extends RadioOptions {
  checked: boolean;
}

export interface RadioGroupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * @description 单选按钮组名称
   */
  name?: string;
  /**
   * @description 选中值
   */
  value?: RadioValue;
  /**
   * @description 默认选中的选项
   */
  defaultValue?: RadioValue;
  /**
   * @description 是否禁用所有单选按钮, 优先级 Radio.disabled > RadioGroup.disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 单选按钮组尺寸 仅 Button 样式下有效
   * @default 'md'
   */
  size?: ConfigSize;
  /**
   * @description 单选按钮组主题 仅在使用 options 渲染时生效
   * @default 'radio'
   */
  appearance?: 'radio' | 'button';
  /**
   * @description 单选按钮组样式, 仅 Button 下生效
   * @default 'outline'
   */
  buttonVariant?: 'filled' | 'outline';
  /**
   * @description 配置形式设置子元素
   */
  options?: RadioOptions[] | string[] | number[];
  /**
   * @description 自定义渲染内容, 仅使用 options 时生效
   */
  renderOption?: (params: RadioRenderItem) => ReactNode;
  /**
   * @description 选中值发生变化时触发
   */
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioOptions {
  label?: ReactNode;
  value?: RadioValue;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  title?: string;
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioProps
  extends Omit<BaseCheckboxProps, 'type' | 'prefixCls' | 'size' | 'onChange' | 'value' | 'children'> {
  children?: ReactNode | (({ checked }: { checked: boolean }) => ReactNode); // 单独使用时，所有 props 由外部控制，因此内部只回传 checked 即可
  /**
   * @private 内部 props，不要使用它，除非你知道自己在干什么
   */
  _IS_BUTTON_?: boolean;
  /**
   * @description 是否选中
   */
  checked?: boolean;
  /**
   * @description 非受控是否选中
   * @default false
   */
  defaultChecked?: boolean;
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
   * @description 单选按钮的值, 这个值会同步设置到 input 的 value 属性
   */
  value?: RadioValue;
  /**
   * @description 选中值改变时触发
   */
  onChange?: (e: RadioChangeEvent) => void;
}
