'use client';
import React, { cloneElement, forwardRef, isValidElement, useCallback, useImperativeHandle, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import type { TriggerProps } from './type';
import { getReactNodeRef } from '../_util/dom';
import { computedPosition } from './utils/computedPosition';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import ResizeObserverComponent from '../_common/ResizeObserver';
import Portal from '../_common/Portal';

const Trigger = forwardRef<any, TriggerProps>((props, ref) => {
  const { children, popup, enableShift = true, enableFlip = true, zIndex = 0, offset, direction = 'left' } = props;

  const isElementChild = isValidElement(children);

  const referenceRef = useRef<HTMLDivElement>(null);
  const originPopupRef = getReactNodeRef(popup);
  const popupRef = useRef<HTMLDivElement>(null);
  const mergedPopupRef = useComposeRef(originPopupRef, popupRef);

  useImperativeHandle(ref, () => {});

  // =============== Warning ===============
  const canUseChildrenRef = supportNodeRef(children);
  const canUsePopupRef = supportNodeRef(popup);
  if (isElementChild && process.env.NODE_ENV !== 'production') {
    if (!canUseChildrenRef) {
      console.error(
        '[@sqi-ui/web]: The `children` not support ref. Please use `React.forwardRef` to wrap your component.',
      );
      if (!canUsePopupRef) {
        console.error(
          '[@sqi-ui/web]: The `popup` not support ref. Please use `React.forwardRef` to wrap your component.',
        );
      }
    }
  }

  const updatePosition = useCallback(
    (e?: any) => {
      if (e && e.type !== 'resize' && !e.target.contains(referenceRef.current)) return;

      computedPosition(
        { reference: referenceRef.current, popup: popupRef.current },
        { direction, enableFlip, enableShift, offset },
      );
    },
    [direction, enableFlip, enableShift, offset],
  );

  useIsomorphicLayoutEffect(() => {
    updatePosition();

    document.addEventListener('scroll', updatePosition, {
      capture: true,
      passive: true,
    });

    window.addEventListener('resize', updatePosition);

    return () => {
      document.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [direction, enableFlip, enableShift, offset]);

  return isElementChild ? (
    <>
      <ResizeObserverComponent ref={referenceRef}>{children}</ResizeObserverComponent>
      {popup ? (
        <Portal
          autoLockScroll={false}
          rootStyle={{ position: 'absolute', top: 0, left: 0, willChange: 'transform', zIndex }}
        >
          {cloneElement(popup as any, { ref: mergedPopupRef })}
        </Portal>
      ) : null}
    </>
  ) : null;
});

Trigger.displayName = 'Trigger';

export default Trigger;
