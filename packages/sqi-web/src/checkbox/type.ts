import type { ReactNode } from 'react';
import type { BaseCheckboxChangeEvent, BaseCheckboxProps } from '../_common/BaseCheckbox';

export type CheckboxValue = string | number;

export type CheckboxChangeEvent = BaseCheckboxChangeEvent;

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
