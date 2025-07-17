'use client';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import { useIsomorphicLayoutEffect, useMergeProps } from '@sqi-ui/hooks';

import ResizeObserverComponent from '../_common/ResizeObserver';
import Portal from '../_common/Portal';
import { getReactNodeRef } from '../_util/dom';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import { ConfigContext } from '../config-provider/context';

import { computedPosition } from './utils';
import type { TriggerProps } from './type';

const defaultProps: TriggerProps = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
  offset: 0,
  zIndex: 0,
};

const Trigger = forwardRef<any, TriggerProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { children, popup, enableShift, enableFlip, zIndex, offset, direction, getContainer } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Trigger,
  );

  const isElementChild = isValidElement(children);

  const referenceRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
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
    (e?: Event) => {
      if (e && e.type !== 'resize' && !(e.target as Node)?.contains(referenceRef.current)) return;

      computedPosition(
        { reference: referenceRef.current, popup: popupRef.current, arrow: arrowRef.current },
        { direction: direction!, enableFlip, enableShift, offset },
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
        <Portal getContainer={getContainer} autoLockScroll={false}>
          {/* {<div ref={arrowRef} className={`${prefixCls}-trigger-arrow`}></div>} */}
          <div
            className={`${prefixCls}-trigger`}
            style={{ position: 'absolute', top: 0, left: 0, willChange: 'transform', zIndex }}
          >
            {cloneElement(popup as any, { ref: mergedPopupRef })}
          </div>
        </Portal>
      ) : null}
    </>
  ) : null;
});

Trigger.displayName = 'Trigger';

export default Trigger;
