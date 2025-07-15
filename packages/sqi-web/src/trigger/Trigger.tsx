'use client';
import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
import type { TriggerProps } from './type';
import { getReactNodeRef } from '../_util/dom';
import { computedPosition } from './utils/computedPosition';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import ResizeObserverComponent from '../_common/ResizeObserver';
import Portal from '../_common/Portal';
import { debounce } from '@sqi-ui/utils';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';

const Trigger = forwardRef<any, TriggerProps>((props, ref) => {
  const { children, popup, direction = 'bottom-start' } = props;

  const isElementChild = isValidElement(children);

  const referenceRef = useRef<HTMLDivElement>(null);
  const originFloatRef = getReactNodeRef(popup);
  const floatRef = useRef<HTMLElement>(null);
  const mergedFloatRef = useComposeRef(originFloatRef, floatRef);

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

  useIsomorphicLayoutEffect(() => {
    const debounceUpdatePosition = debounce(function updatePosition(e: any) {
      if (e && e.type !== 'resize' && !e.target.contains(referenceRef.current)) return;

      computedPosition({ reference: referenceRef.current, floating: floatRef.current }, { direction });
    }, 100);

    document.addEventListener('scroll', debounceUpdatePosition, {
      capture: true,
      passive: true,
    });

    window.addEventListener('resize', debounceUpdatePosition);

    return () => {
      document.removeEventListener('scroll', debounceUpdatePosition);
      window.removeEventListener('resize', debounceUpdatePosition);
    };
  }, []);

  console.log(popup);

  return isElementChild ? (
    <>
      <ResizeObserverComponent ref={referenceRef}>{children}</ResizeObserverComponent>
      {popup ? (
        <Portal rootStyle={{ position: 'absolute', top: 0, left: 0, willChange: 'transform', zIndex: 9999 }}>
          {cloneElement(popup as any, {
            ref: mergedFloatRef,
          })}
        </Portal>
      ) : null}
    </>
  ) : null;
});

Trigger.displayName = 'Trigger';

export default Trigger;
