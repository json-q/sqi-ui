import type { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import type { ConfigSize } from '../config-provider';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;

  className?: string;
  style?: CSSProperties;
  size?: ConfigSize;
  // disabled?: boolean;
  title?: string;
  bordered?: boolean;
  icon?: ReactNode;
  closable?: boolean | ReactNode;
  onClose?: (e: MouseEvent<HTMLElement>) => void;
  color?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
