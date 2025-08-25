import type { PopupProps } from '../popup';

export interface TooltipProps extends PopupProps {
  /**
   * @description 文字提示风格
   * @default default
   */
  theme?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light';
}
