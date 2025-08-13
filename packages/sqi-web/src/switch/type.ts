import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import type { ConfigSize } from '../config-provider';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  disabled?: boolean;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
  checked?: boolean;
  defaultChecked?: boolean;
  loadingIcon?: ReactNode;

  size?: ConfigSize;
  label?: [checked?: ReactNode, unchecked?: ReactNode];
  loading?: boolean;
}
