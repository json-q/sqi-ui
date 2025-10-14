'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useIsomorphicLayoutEffect, useMergeProps, useMergeState } from '@sqi-ui/hooks';

import ResizeObserverRect from '../_common/ResizeObserverRect';
import Portal from '../_common/Portal';
import CSSMotion, { type CSSMotionInstance } from '../_common/CSSMotion';
import { getReactNodeRef } from '../_util/dom';
import { supportNodeRef, useComposeRef } from '../_util/ref';
import { ConfigContext } from '../config-provider/context';

import useTrigger from './hooks/useTrigger';
import type { TriggerProps } from './type';
import {
  computePosition,
  flip,
  shift,
  offset as offsetMiddleware,
  arrow as arrowMiddleware,
  autoUpdate,
  raf,
} from './lite-position';

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
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 'auto',
  right: 'auto',
  margin: 0,
};

const popperStyle: React.CSSProperties = { ...basePositionStyle, willChange: 'transform' };

const arrowStyle: React.CSSProperties = { ...basePositionStyle, willChange: 'top,left' };

const Trigger = React.forwardRef<any, TriggerProps>((baseProps, ref) => {
  const { componentConfig, prefixCls } = React.useContext(ConfigContext);
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

  const isElementChild = React.isValidElement(children);

  // ============== Element State =================
  const [referenceEl, setReferenceEl] = React.useState<HTMLElement | null>(null);
  const [rootPopperEl, setRootPopperEl] = React.useState<HTMLElement | null>(null);
  const [arrowEl, setArrowEl] = React.useState<HTMLElement | null>(null);

  // ============== Element Ref =================
  const originPopperRef = getReactNodeRef(popper);
  const popperRef = React.useRef<HTMLElement>(null);
  const mergedPopperRef = useComposeRef(originPopperRef, popperRef);

  // ============== Handle Ref =================
  const motionRef = React.useRef<CSSMotionInstance>(null);
  const cleanup = React.useRef<() => void>(null);

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
    triggerEl: referenceEl,
    outFocusToClose,
  });

  React.useImperativeHandle(ref, () => ({
    reference: referenceEl,
    popper: popperRef.current,
    rootPopper: rootPopperEl,
  }));

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

  const updatePosition = React.useCallback(() => {
    if (!referenceEl || !rootPopperEl) return;

    const {
      middlewareData,
      x,
      y,
      placement: latestPlacement,
      rects,
    } = computePosition(referenceEl, rootPopperEl!, {
      placement: placement,
      middleware: [
        enableShift ? shift() : undefined,
        arrowMiddleware({ element: arrowEl }),
        offsetMiddleware({ offset: offset }),
        enableFlip ? flip() : undefined,
      ],
    });

    rootPopperEl.style.transform = `translate(${x}px, ${y}px)`;
    rootPopperEl.setAttribute('data-trigger-placement', latestPlacement);
    rootPopperEl.style.setProperty('--reference-width', `${rects.reference.width}px`);

    if (arrowEl) {
      arrowEl.style.top = `${middlewareData.arrow!.y}px`;
      arrowEl.style.left = `${middlewareData.arrow!.x}px`;
    }
  }, [placement, referenceEl, rootPopperEl, arrowEl, enableFlip, enableShift, offset]);

  const registerListener = React.useCallback(() => {
    cleanup.current?.();
    if (referenceEl && rootPopperEl) {
      cleanup.current = autoUpdate({
        update: () => raf(updatePosition),
        elements: { reference: referenceEl, popper: rootPopperEl },
      });
    }
  }, [updatePosition, referenceEl, rootPopperEl]);

  useIsomorphicLayoutEffect(() => {
    updatePosition();
    registerListener();

    return () => cleanup.current?.();
  }, [updatePosition, registerListener]);

  useIsomorphicLayoutEffect(() => {
    if (innerVisible === undefined) return;

    // 只有当展示时才注册监听事件，不展示后移除
    if (innerVisible === true) {
      motionRef.current?.toggle(true);
      // 推迟到下一帧执行，不然位置计算有偏差
      raf(() => {
        updatePosition();
        registerListener();
      });
    } else if (innerVisible === false) {
      motionRef.current?.toggle(false);
      // 隐藏时不再监听
      cleanup.current?.();
    }
  }, [innerVisible, updatePosition, registerListener]);

  if (!isElementChild) return;

  const renderPopper = () => {
    if (!popper) return null;

    return (
      <CSSMotion ref={motionRef} {...motion}>
        {({ className: motionCls }) => {
          return (
            <Portal getContainer={getContainer}>
              {/* position wrapper */}
              <div
                {...genPopupProps()}
                ref={setRootPopperEl}
                className={`${prefixCls}-trigger`}
                style={{ ...popperStyle, zIndex }}
              >
                {/* motion wrapper */}
                <div role="tooltip" className={clsx(motionCls, className)}>
                  {arrow ? (
                    <div ref={setArrowEl} style={{ ...arrowStyle, zIndex }}>
                      {arrow}
                    </div>
                  ) : null}

                  {React.cloneElement(popper as any, { ref: mergedPopperRef })}
                </div>
              </div>
            </Portal>
          );
        }}
      </CSSMotion>
    );
  };

  return (
    <>
      <ResizeObserverRect ref={setReferenceEl} onResize={() => raf(updatePosition)}>
        {React.cloneElement(children as any, {
          ...genTriggerProps(children),
        })}
      </ResizeObserverRect>

      {renderPopper()}
    </>
  );
});

Trigger.displayName = 'Trigger';
export default Trigger;
