import type { ReactNode } from 'react';
import type { Prettify } from '../_util/type';

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export interface TriggerProps {
  children?: ReactNode;
  direction?: TriggerDirection;
  popup?: ReactNode;
  open?: boolean;
}
