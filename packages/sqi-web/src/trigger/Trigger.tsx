'use client';
import React, { cloneElement, forwardRef, isValidElement, useEffect, useImperativeHandle, useRef } from 'react';
import type { TriggerProps } from './type';
import { getReactNodeRef } from '../_util/dom';
import { computedPosition } from './utils/computedPosition';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import ResizeObserverComponent from '../_common/ResizeObserver';

const Trigger = forwardRef<any, TriggerProps>((props, ref) => {
  const { children, popup } = props;

  const isElementChild = isValidElement(children);

  const referenceRef = useRef(null);
  const originFloatRef = getReactNodeRef(popup);
  const floatRef = useRef(null);
  const mergedFloatRef = useComposeRef(originFloatRef, floatRef);

  useImperativeHandle(ref, () => {});

  // =============== Warning ===============
  const canUseRef = supportNodeRef(children);
  if (isElementChild && !canUseRef && process.env.NODE_ENV !== 'production') {
    console.error(
      '[@sqi-ui/web]: The `children` not support ref. Please use `React.forwardRef` to wrap your component.',
    );
  }

  useEffect(() => {
    computedPosition({ reference: referenceRef.current!, floating: floatRef.current! }, { direction: 'bottom' });
  }, [referenceRef, floatRef]);

  return isElementChild ? (
    <>
      <ResizeObserverComponent ref={referenceRef}>{children}</ResizeObserverComponent>
      {popup ? cloneElement(popup as any, { ref: mergedFloatRef }) : null}
    </>
  ) : null;
});

Trigger.displayName = 'Trigger';

export default Trigger;
