import type { CSSProperties, ReactNode } from 'react';
import type { BaseCheckboxChangeEvent, BaseCheckboxProps } from '../_common/BaseCheckbox';
import type { ConfigSize } from '../config-provider';

export type RadioValue = string | number;

export type RadioChangeEvent = BaseCheckboxChangeEvent;

// onChange 思路：由于 input 被 label 包裹，所以点击 label 可以触发 input 的 onChange
// 点击时，onChange 会调用 radio 的 props 和触发 groupContext 的 onChange
// groupContext 的 onChange 会内部设置此次点击的 value，然后由 radio 消费对比当前 value 和点击项 value 是否一致，若一致，则视为 checked

export interface RadioGroupContextState {
  name?: string;
  value?: RadioValue;
  disabled?: boolean;
  size?: ConfigSize;
  appearance?: 'radio' | 'button';
  buttonVariant?: 'filled' | 'outline';
  onChange?: (value: RadioChangeEvent) => void;
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
   * @description 选中值发生变化时触发
   */
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioOptions {
  label: ReactNode;
  value: RadioValue;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  title?: string;
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioProps
  extends Omit<BaseCheckboxProps, 'type' | 'prefixCls' | 'size' | 'onChange' | 'value' | 'children'> {
  children?: ReactNode | (({ checked }: { checked: boolean }) => ReactNode);
  /**
   * @description 内部 props，不要使用它，除非你知道自己在干什么
   * @internal
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
