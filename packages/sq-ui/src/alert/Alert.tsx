import React, { createElement, isValidElement, useContext } from 'react';
import { useMergeProps } from '@sq-ui/hooks';
import { ConfigContext } from '../config-provider';
import type { AlertProps } from './type';
import clsx from 'clsx';
import {
  CheckCircleFilledIcon,
  CloseCircleFilledIcon,
  WarnCircleFilledIcon,
  InfoCircleFilledIcon,
  CloseIcon,
} from '@sq-ui/icons';

const defaultProps: AlertProps = {
  type: 'info',
};

const iconTypeMap = {
  success: CheckCircleFilledIcon,
  info: InfoCircleFilledIcon,
  error: CloseCircleFilledIcon,
  warning: WarnCircleFilledIcon,
};

export default function Alert(baseProps: AlertProps) {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Alert);

  const { className, style, title, description, type, closable, showIcon = true, action, icon, onClose } = props;

  const renderIcon = () => {
    if (isValidElement(icon)) return icon;
    return createElement(iconTypeMap[type!]);
  };

  const classes = clsx(`${prefixCls}-alert`, `${prefixCls}-alert-${type}`, className);

  return (
    <div className={classes} style={style}>
      {showIcon && <div className={`${prefixCls}-alert-icon`}>{renderIcon()}</div>}

      <div className={`${prefixCls}-alert-content`}>
        {!!title && <div className={`${prefixCls}-alert-title`}>{title}</div>}
        <div className={`${prefixCls}-alert-description`}>{description}</div>
      </div>

      {action && <div className={`${prefixCls}-alert-action`}>{action}</div>}

      {closable && (
        <button className={`${prefixCls}-alert-close`} onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
