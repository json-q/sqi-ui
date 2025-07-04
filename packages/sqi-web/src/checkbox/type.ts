import type { CSSProperties, ReactNode } from 'react';
import type { BaseCheckboxChangeEvent, BaseCheckboxProps } from '../_common/BaseCheckbox';

export type CheckboxValue = string | number;

export type CheckboxChangeEvent = BaseCheckboxChangeEvent;

export interface CheckboxRenderItem extends CheckboxOptions {
  checked: boolean;
}

export interface CheckboxGroupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * @description 单选按钮组名称
   */
  name?: string;
  /**
   * @description 选中项
   */
  value?: CheckboxValue[];
  /**
   * @description 默认选中的选项
   */
  defaultValue?: CheckboxValue[];
  /**
   * @description 是否禁用所有多选按钮, 优先级 Checkbox.disabled > CheckboxGroup.disabled
   */
  disabled?: boolean;
  /**
   * @description 配置形式设置子元素
   */
  options?: CheckboxOptions[] | string[] | number[];
  /**
   * @description 自定义渲染内容, 仅使用 options 时生效
   */
  renderOption?: (params: CheckboxRenderItem) => ReactNode;
  /**
   * @description 选中值发生变化时触发
   */
  onChange?: (values: CheckboxValue[]) => void;
}

export interface CheckboxOptions {
  label: ReactNode;
  value: CheckboxValue;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  title?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxProps
  extends Omit<
    BaseCheckboxProps,
    'type' | 'prefixCls' | 'size' | 'onChange' | 'value' | 'children' | '_getCheckedValue'
  > {
  children?: ReactNode | (({ checked }: { checked: boolean }) => ReactNode); // 单独使用时，所有 props 由外部控制，因此内部只回传 checked 即可
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
   * @description 是否禁用。若存在父组件 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Radio.disabled > CheckboxGroup.disabled
   */
  /**
   * @description input 的 name 属性
   */
  name?: string;
  /**
   * @description 单选按钮的值, 这个值会同步设置到 input 的 value 属性
   */
  value?: CheckboxValue;
  /**
   * @description 是否半选, 仅负责样式
   */
  indeterminate?: boolean;
  /**
   * @description 选中值改变时触发
   */
  onChange?: (e: CheckboxChangeEvent) => void;
}
