import type { ReactNode } from 'react';
import type { ButtonProps } from '../button';
import type { SpaceProps } from '../space';
import type { DividerProps } from '../divider';
import type { AlertProps } from '../alert/type';
import type { ColProps, RowProps } from '../grid/type';
import type { InputProps } from '../input/type';

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
  Button?: ButtonProps;
  Space?: SpaceProps;
  Divider?: DividerProps;
  Alert?: AlertProps;
  Row?: RowProps;
  Col?: ColProps;
  Input?: InputProps;
};
