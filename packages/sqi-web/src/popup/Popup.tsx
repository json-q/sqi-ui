'use client';
import React, { forwardRef, isValidElement, useContext, useImperativeHandle, useRef } from 'react';
import type { PopupProps } from './type';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import Trigger from '../trigger';
import clsx from 'clsx';

const defaultProps: PopupProps = {
  trigger: 'hover',
  placement: 'top',
  showArrow: true,
  destroyOnClose: true,
  offset: 2,
};

const Popup = forwardRef<HTMLElement, PopupProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { children, content, destroyOnClose, showArrow, styles, classNames, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Popup,
  );

  const wrapperChildrenRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => wrapperChildrenRef.current as HTMLElement);

  if (!children) return null;

  const wrapperChildren = isValidElement(children) ? children : <span>{children}</span>;

  return (
    <Trigger
      {...restProps}
      ref={wrapperChildrenRef}
      className={`${prefixCls}-popup`}
      motion={{
        timeout: 200,
        name: 'popup',
        mountOnEnter: true,
        preEnter: true,
        unmountOnExit: destroyOnClose,
      }}
      popper={
        <div style={styles?.content} className={clsx(`${prefixCls}-popup-content`, classNames?.content)}>
          {content}
        </div>
      }
      arrow={
        showArrow ? (
          <div style={styles?.arrow} className={clsx(`${prefixCls}-popup-arrow`, classNames?.arrow)}></div>
        ) : undefined
      }
    >
      {wrapperChildren}
    </Trigger>
  );
});

Popup.displayName = 'Popup';

export default Popup;
