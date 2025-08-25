import type { ReactNode } from 'react';
import type { AlertProps } from '../alert';
import type { ButtonProps } from '../button';
import type { CheckboxGroupProps, CheckboxProps } from '../checkbox';
import type { DividerProps } from '../divider';
import type { ColProps, RowProps } from '../grid';
import type { InputProps } from '../input';
import type { PopupProps } from '../popup';
import type { RadioGroupProps, RadioProps } from '../radio';
import type { SpaceProps } from '../space';
import type { SwitchProps } from '../switch';
import type { TooltipProps } from '../tooltip/type';
import type { TriggerProps } from '../trigger';

export type ConfigSize = 'sm' | 'md' | 'lg';

export interface ConfigProviderProps {
  /**
   * @description 全局配置组件的默认参数
   */
  componentConfig?: ComponentConfig;
  /**
   * @description 组件默认尺寸，仅 `size` 属性生效
   * @default 'md'
   */
  size?: ConfigSize;
  /**
   * @description 组件类名前缀
   * @default 'sqi'
   */
  prefixCls?: string;
  /**
   * @description 组件图标前缀
   * @default 'sqi-icon'
   */
  iconPrefix?: string;
  children?: ReactNode;
}

export type ComponentConfig = {
  Alert?: AlertProps;
  Button?: ButtonProps;
  Checkbox?: CheckboxProps;
  CheckboxGroup?: CheckboxGroupProps;
  Col?: ColProps;
  Divider?: DividerProps;
  Input?: InputProps;
  Popup?: PopupProps;
  Radio?: Omit<RadioProps, '_IS_BUTTON_'>;
  RadioGroup?: RadioGroupProps;
  Row?: RowProps;
  Space?: SpaceProps;
  Switch?: SwitchProps;
  Tooltip?: TooltipProps;
  Trigger?: TriggerProps;
};
