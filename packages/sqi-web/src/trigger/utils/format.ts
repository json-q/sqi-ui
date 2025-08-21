import { isObject } from '@sqi-ui/utils';
import type { Alignment, Side, TriggerPlacement } from '../type';

type AlignRelative = 'left' | 'right' | 'top' | 'bottom';

export function formatDirection(placement: TriggerPlacement): [Side, AlignRelative, boolean, boolean] {
  const splitDirection = placement.split('-');
  const side = splitDirection[0] as Side;
  const align = splitDirection[1] as Alignment;

  let relativeAlign: AlignRelative | undefined;

  const isVertical = side === 'top' || side === 'bottom';
  const isHorizontal = side === 'left' || side === 'right';

  if (isVertical) {
    if (align === 'start') relativeAlign = 'left';
    if (align === 'end') relativeAlign = 'right';
  }

  if (isHorizontal) {
    if (align === 'start') relativeAlign = 'top';
    if (align === 'end') relativeAlign = 'bottom';
  }

  return [side, relativeAlign!, isVertical, isHorizontal];
}

export function formatOffset(offset?: number | { x?: number; y?: number }) {
  if (!offset) return [0, 0];

  if (isObject(offset)) return [offset.x || 0, offset.y || 0];
  return [offset || 0, offset || 0];
}
