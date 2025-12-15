'use client';
import React, { forwardRef, isValidElement, useContext, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import Trigger from '../trigger';
import { ConfigContext } from '../config-provider/context';
import type { PopupProps } from './type';

const defaultProps: PopupProps = {
  trigger: 'hover',
  placement: 'top',
  showArrow: true,
  destroyOnClose: true,
  offset: 6,
};

const Popup = forwardRef<HTMLElement, PopupProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { children, content, destroyOnClose, showArrow, styles, classNames, rootClassName, ...restProps } =
    useMergeProps(baseProps, defaultProps, componentConfig?.Popup);

  const wrapperChildrenRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => wrapperChildrenRef.current as HTMLElement);

  if (!children) return null;

  const wrapperChildren = isValidElement(children) ? children : <span>{children}</span>;

  const renderContent = () => {
    return (
      <div style={styles?.content} className={clsx(`${prefixCls}-popup-content`, classNames?.content)}>
        {content}
      </div>
    );
  };

  const renderPopper = () => {
    if (!showArrow) return;
    return <div style={styles?.arrow} className={clsx(`${prefixCls}-popup-arrow`, classNames?.arrow)}></div>;
  };

  return (
    <Trigger
      {...restProps}
      ref={wrapperChildrenRef}
      className={clsx(`${prefixCls}-popup`, rootClassName)}
      motion={{
        timeout: 160,
        name: 'popup',
        mountOnEnter: true,
        unmountOnExit: destroyOnClose,
      }}
      popper={renderContent()}
      arrow={renderPopper()}
    >
      {wrapperChildren}
    </Trigger>
  );
});

Popup.displayName = 'Popup';

export default Popup;
