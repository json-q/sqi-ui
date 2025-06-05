'use client';
import React, { createElement, forwardRef, isValidElement, useContext, useState } from 'react';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { AlertProps } from './type';
import clsx from 'clsx';
import {
  CheckCircleFilledIcon,
  CloseCircleFilledIcon,
  WarnCircleFilledIcon,
  InfoCircleFilledIcon,
  CloseIcon,
} from '@sqi-ui/icons';

const defaultProps: AlertProps = {
  type: 'info',
};

const iconTypeMap = {
  success: CheckCircleFilledIcon,
  info: InfoCircleFilledIcon,
  error: CloseCircleFilledIcon,
  warning: WarnCircleFilledIcon,
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const {
    className,
    style,
    title,
    description,
    type,
    closable,
    showIcon = true,
    action,
    icon,
    onClose,
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Alert);

  const [closed, setClosed] = useState(false);

  const renderIcon = () => {
    if (isValidElement(icon)) return icon;
    return createElement(iconTypeMap[type!]);
  };

  const classes = clsx(`${prefixCls}-alert`, `${prefixCls}-alert-${type}`, className);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClosed(true);
    onClose?.(e);
  };

  if (closed) return null;

  return (
    <div role="alert" className={classes} style={style} ref={ref}>
      {showIcon && <div className={`${prefixCls}-alert-icon`}>{renderIcon()}</div>}

      <div className={`${prefixCls}-alert-content`}>
        {!!title && <div className={`${prefixCls}-alert-title`}>{title}</div>}
        <div className={`${prefixCls}-alert-description`}>{description}</div>
      </div>

      {action && <div className={`${prefixCls}-alert-action`}>{action}</div>}

      {closable && (
        <button className={`${prefixCls}-alert-close`} onClick={handleClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
