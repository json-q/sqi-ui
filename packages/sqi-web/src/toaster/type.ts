import type { Placement } from './state';

type Offset =
  | {
      top?: string | number;
      right?: string | number;
      bottom?: string | number;
      left?: string | number;
    }
  | string
  | number;

export interface ToasterProps {
  id?: string | number;
  placement?: Placement;
  gap?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
  offset?: Offset;
  duration?: number;
}
