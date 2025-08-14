import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import type { ConfigSize } from '../config-provider';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  /**
   * @description 非受控 是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 受控 是否选中
   */
  checked?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 状态切换时触发
   */
  size?: ConfigSize;
  /**
   * @description 选中和非选中的展示内容
   */
  label?: [checked?: ReactNode, unchecked?: ReactNode];
  /**
   * @description loading 状态
   */
  loading?: boolean;
  /**
   * @description 自定义 loading 图标
   */
  loadingIcon?: ReactNode;
  /**
   * @description 状态切换时触发
   */
  onChange?: SwitchChangeEventHandler;
  /**
   * @description 点击时触发(禁用状态无效)
   */
  onClick?: SwitchClickEventHandler;
}
