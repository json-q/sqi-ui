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
import { useIsomorphicLayoutEffect, useMergeProps, useMergeState } from '@sqi-ui/hooks';

import ResizeObserverComponent from '../_common/ResizeObserver';
import Portal from '../_common/Portal';
import { getReactNodeRef } from '../_util/dom';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import { ConfigContext } from '../config-provider/context';

import { computedPosition } from './utils';
import type { TriggerProps } from './type';
import { collectScrollParentList } from './utils/collectScrollParentList';
import CSSMotion, { type CSSMotionInstance } from '../_common/CSSMotion';

import useTrigger from './hooks/useTrigger';
import clsx from 'clsx';

const defaultProps: TriggerProps = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
  offset: 0,
  zIndex: 0,
  trigger: 'hover',
  delay: 100,
  clickOutsideClose: true,
  disabled: false,
};

const positionStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  willChange: 'transform',
};

const Trigger = forwardRef<any, TriggerProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const {
    children,
    popper,
    enableShift,
    // arrow,
    motion = {},
    enableFlip,
    offset,
    direction,
    getContainer,
    zIndex,
    trigger,
    delay,
    disabled,
    visible,
    clickOutsideClose,
    onVisibleChange,
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Trigger);

  const isElementChild = isValidElement(children);

  const referenceRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const originPopperRef = getReactNodeRef(popper);
  const popperRef = useRef<HTMLDivElement>(null);
  const mergedPopperRef = useComposeRef(originPopperRef, popperRef);
  const motionRef = useRef<CSSMotionInstance>(null);

  const [innerVisible, setInnerVisible] = useMergeState(visible!, { onChange: onVisibleChange });

  const { genPopupProps, genTriggerProps } = useTrigger({
    clickOutsideClose,
    delay,
    disabled,
    visible: innerVisible,
    onVisibleChange: setInnerVisible,
    trigger,
    triggeEl: referenceRef.current,
  });

  useImperativeHandle(ref, () => {});

  // =============== Warning ===============
  const canUseChildrenRef = supportNodeRef(children);
  const canUsePopperRef = supportNodeRef(popper);
  if (isElementChild && process.env.NODE_ENV !== 'production') {
    if (!canUseChildrenRef) {
      console.error(
        '[@sqi-ui/web]: The `children` not support ref. Please use `React.forwardRef` to wrap your component.',
      );
    }
    if (!canUsePopperRef) {
      console.error(
        '[@sqi-ui/web]: The `popper` not support ref. Please use `React.forwardRef` to wrap your component.',
      );
    }
  }

  // ======================== Position Update ===========================
  const updatePosition = useCallback(
    (e?: Event) => {
      if (e && e.type !== 'resize' && !(e.target as Node)?.contains(referenceRef.current)) return;

      setTimeout(() => {
        computedPosition(
          { reference: referenceRef.current, popper: popperRef.current, arrow: arrowRef.current },
          { direction: direction!, enableFlip, enableShift, offset },
        );
      });
    },
    [direction, enableFlip, enableShift, offset],
  );

  useIsomorphicLayoutEffect(() => {
    if (innerVisible === undefined) return;
    updatePosition();

    // Toggle Motion
    if (innerVisible === true) {
      motionRef.current?.toggle(true);
    } else if (innerVisible === false) {
      motionRef.current?.toggle(false);
    }
  }, [innerVisible]);

  useIsomorphicLayoutEffect(() => {
    updatePosition();

    // Parent scroll listener
    const referenceParents = collectScrollParentList(referenceRef.current);
    const popperParents = collectScrollParentList(popperRef.current);
    const scrollPrents = [...referenceParents, ...popperParents];

    scrollPrents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', updatePosition, { passive: true });
    });

    window.addEventListener('resize', updatePosition, { passive: true });

    return () => {
      scrollPrents.forEach((scrollParent) => {
        scrollParent.removeEventListener('scroll', updatePosition);
      });

      window.removeEventListener('resize', updatePosition);
    };
  }, [direction, enableFlip, enableShift, offset, referenceRef.current, mergedPopperRef, arrowRef.current]);

  return isElementChild ? (
    <>
      <ResizeObserverComponent ref={referenceRef} onResize={() => updatePosition()}>
        {cloneElement(children, {
          ...genTriggerProps(children),
        })}
      </ResizeObserverComponent>

      {popper ? (
        <CSSMotion ref={motionRef} {...motion} unmountOnExit={motion.unmountOnExit || true}>
          {({ className }) => {
            return (
              <Portal getContainer={getContainer}>
                <div
                  {...genPopupProps()}
                  className={clsx(`${prefixCls}-trigger`, className)}
                  style={{ ...positionStyle, zIndex }}
                >
                  {cloneElement(popper as any, { ref: mergedPopperRef })}
                </div>
              </Portal>
            );
          }}
        </CSSMotion>
      ) : null}
    </>
  ) : null;
});

Trigger.displayName = 'Trigger';

export default Trigger;
