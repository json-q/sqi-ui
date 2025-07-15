import type { ReactElement } from 'react';
import type { Prettify } from '../_util/type';

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;

export type TriggerDirection = Prettify<Side | AlignedPlacement>;

export interface TriggerProps {
  children?: ReactElement;
  direction?: TriggerDirection;
  popup?: ReactElement;
  open?: boolean;
}
