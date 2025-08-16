'use client';
import React, { createElement, forwardRef, isValidElement, useContext, useRef } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import {
  CheckCircleFilledIcon,
  CloseCircleFilledIcon,
  WarnCircleFilledIcon,
  InfoCircleFilledIcon,
  CloseIcon,
} from '@sqi-ui/icons';
import CSSMotion, { type CSSMotionInstance } from '../_common/CSSMotion';
import { ConfigContext } from '../config-provider/context';
import type { AlertProps } from './type';

const defaultProps: AlertProps = {
  type: 'info',
  showIcon: true,
};

const iconTypeMap: Record<NonNullable<AlertProps['type']>, React.ElementType> = {
  success: CheckCircleFilledIcon,
  info: InfoCircleFilledIcon,
  error: CloseCircleFilledIcon,
  warning: WarnCircleFilledIcon,
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { className, style, title, description, type, closable, showIcon, action, icon, onClose } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Alert,
  );

  const motionRef = useRef<CSSMotionInstance>(null);

  const renderIcon = () => {
    if (isValidElement(icon)) return icon;
    if (type) return createElement(iconTypeMap[type]);
    return null;
  };

  const classes = clsx(`${prefixCls}-alert`, `${prefixCls}-alert-${type}`, className);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    motionRef.current?.toggle();
    onClose?.(e);
  };

  return (
    <CSSMotion ref={motionRef} timeout={200} name="alert" unmountOnExit initialEntered>
      <div role="alert" className={classes} style={style} ref={ref}>
        {showIcon && <div className={`${prefixCls}-alert-icon`}>{renderIcon()}</div>}

        <div className={`${prefixCls}-alert-content`}>
          {!!title && <div className={`${prefixCls}-alert-title`}>{title}</div>}
          <div className={`${prefixCls}-alert-description`}>{description}</div>
        </div>

        {action && <div className={`${prefixCls}-alert-action`}>{action}</div>}

        {closable && (
          <button type="button" className={`${prefixCls}-alert-close`} onClick={handleClose}>
            <CloseIcon />
          </button>
        )}
      </div>
    </CSSMotion>
  );
});

Alert.displayName = 'Alert';

export default Alert;
