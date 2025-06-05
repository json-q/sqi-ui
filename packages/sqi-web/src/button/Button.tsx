'use client';
import React, { forwardRef, useContext, type Ref } from 'react';
import clsx from 'clsx';
import { LoadingIcon } from '@sqi-ui/icons';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { ButtonProps } from './type';

const defaultProps: ButtonProps = {
  type: 'default',
  variant: 'default',
  htmlType: 'button',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((baseProps: ButtonProps, ref) => {
  const { prefixCls, size: ctxSize = 'md', componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Button);

  const {
    children,
    type,
    size = ctxSize,
    htmlType,
    status,
    loading,
    disabled,
    variant,
    icon,
    href,
    target,
    onClick,
    anchorProps = {},
    ...restProps
  } = props;

  const iconNode = loading ? <LoadingIcon spin={loading} /> : icon;
  const _type = href ? 'link' : type;

  const classes = clsx(`${prefixCls}-btn`, `${prefixCls}-btn-${_type}`, {
    [`${prefixCls}-btn-size-${size}`]: size,
    [`${prefixCls}-btn-status-${status}`]: !!status,
    [`${prefixCls}-btn-variant-${variant}`]: variant,
    [`${prefixCls}-btn-loading`]: loading,
    [`${prefixCls}-btn-disabled`]: disabled,
  });

  const handleClick: ButtonProps['onClick'] = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  if (href) {
    return (
      <a
        {...anchorProps}
        href={href}
        target={target}
        className={classes}
        onClick={handleClick}
        ref={ref as Ref<HTMLAnchorElement>}
      >
        {iconNode}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      {...restProps}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={ref as Ref<HTMLButtonElement>}
    >
      {iconNode}
      <span>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
