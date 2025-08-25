'use client';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { useIsomorphicLayoutEffect, useMergeProps, useMergeState } from '@sqi-ui/hooks';

import ResizeObserverComponent from '../_common/ResizeObserver';
import Portal from '../_common/Portal';
import CSSMotion, { type CSSMotionInstance } from '../_common/CSSMotion';
import { getReactNodeRef } from '../_util/dom';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import { ConfigContext } from '../config-provider/context';

import useTrigger from './hooks/useTrigger';
import { computedPosition } from './utils';
import { collectScrollParentList, type ElementCollection } from './utils/collectScrollParentList';
import debounce from './utils/debounce';
import type { TriggerProps } from './type';

const defaultProps: TriggerProps = {
  placement: 'bottom',
  enableFlip: true,
  enableShift: true,
  offset: 0,
  zIndex: 1,
  trigger: 'hover',
  delay: 100,
  outFocusToClose: true,
  clickOutsideClose: true,
};

const basePositionStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 'auto',
  right: 'auto',
  margin: 0,
  willChange: 'transform',
};

const popperStyle = { ...basePositionStyle };

const arrowStyle = { ...basePositionStyle };

const Trigger = forwardRef<HTMLElement, TriggerProps>((baseProps, ref) => {
  const { componentConfig } = useContext(ConfigContext);
  const {
    className,
    children,
    popper,
    enableShift,
    motion = {},
    enableFlip,
    offset,
    placement,
    getContainer,
    zIndex,
    trigger,
    delay,
    outFocusToClose,
    disabled,
    defaultVisible,
    visible,
    arrow,
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

  const [innerVisible, setInnerVisible] = useMergeState(false, {
    defaultValue: defaultVisible,
    value: visible,
    onChange: onVisibleChange,
  });

  const { genPopupProps, genTriggerProps } = useTrigger({
    clickOutsideClose,
    delay,
    disabled,
    visible: innerVisible,
    onVisibleChange: setInnerVisible,
    trigger,
    triggerEl: referenceRef.current,
    outFocusToClose,
  });

  useImperativeHandle(ref, () => referenceRef.current as HTMLElement);

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

      computedPosition(
        { reference: referenceRef.current, popper: popperRef.current, arrow: arrowRef.current },
        { placement: placement!, enableFlip, enableShift, offset },
      );
    },
    [placement, enableFlip, enableShift, offset],
  );

  const [scrollParents, setScrollParents] = useState<ElementCollection>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> `updatePosition` need props effect
  const asyncUpdatePosition = useCallback(
    debounce<any>(() => {
      return new Promise<any>((resolve) => {
        updatePosition();
        resolve(undefined);
      });
    }),
    [placement, enableFlip, enableShift, offset],
  );

  useIsomorphicLayoutEffect(() => {
    const referenceParents = collectScrollParentList(referenceRef.current);
    const popperParents = collectScrollParentList(popperRef.current);
    const scrollParents = [...referenceParents, ...popperParents];
    setScrollParents(scrollParents);
  }, []);

  const registerListener = () => {
    scrollParents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', asyncUpdatePosition, { passive: true });
    });
    window.addEventListener('resize', asyncUpdatePosition, { passive: true });
  };

  const cleanListener = () => {
    scrollParents.forEach((scrollParent) => {
      scrollParent.removeEventListener('scroll', asyncUpdatePosition);
    });
    window.removeEventListener('resize', asyncUpdatePosition);
  };

  useIsomorphicLayoutEffect(() => {
    if (innerVisible === undefined) return;

    // 只有当展示时才注册监听事件，不展示后移除
    if (innerVisible === true) {
      motionRef.current?.toggle(true);
      asyncUpdatePosition();
      registerListener();
    } else if (innerVisible === false) {
      motionRef.current?.toggle(false);
      cleanListener();
    }
  }, [innerVisible]);

  useIsomorphicLayoutEffect(() => {
    if (!innerVisible) return;

    asyncUpdatePosition();
    cleanListener();
    registerListener();

    return () => cleanListener();
  }, [placement, innerVisible, scrollParents, enableFlip, enableShift, offset]);

  if (!isElementChild) return;

  const renderPopper = () => {
    if (!popper) return null;

    return (
      <CSSMotion ref={motionRef} {...motion}>
        {({ className: motionCls }) => {
          return (
            <Portal getContainer={getContainer}>
              <div
                role="tooltip"
                {...genPopupProps()}
                className={clsx(motionCls, className)}
                style={{ ...popperStyle, zIndex }}
              >
                {arrow ? (
                  <div ref={arrowRef} style={{ ...arrowStyle, zIndex }}>
                    {arrow}
                  </div>
                ) : null}

                {cloneElement(popper as any, { ref: mergedPopperRef })}
              </div>
            </Portal>
          );
        }}
      </CSSMotion>
    );
  };

  return (
    <>
      <ResizeObserverComponent ref={referenceRef} onResize={() => asyncUpdatePosition()}>
        {cloneElement(children as any, {
          ...genTriggerProps(children),
        })}
      </ResizeObserverComponent>

      {renderPopper()}
    </>
  );
});

Trigger.displayName = 'Trigger';
export default Trigger;
