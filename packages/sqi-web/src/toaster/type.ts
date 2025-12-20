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
  /**
   * @default 'top-center'
   */
  placement?: Placement;
  /**
   * @default 12
   */
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
  /**
   * @default 24
   */
  offset?: Offset;
  /**
   * @default 3000
   */
  duration?: number;
}
