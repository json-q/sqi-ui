import * as React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './type';
import './style';
import { LoadingIcon } from '@sq-ui/icons';

export default function Button(props: ButtonProps) {
  const { children, type = 'default', status, loading, disabled, variant, icon, ...restProps } = props;
  const iconNode = loading ? <LoadingIcon /> : icon;

  const classes = clsx('sq-btn', `sq-btn-${type}`, {
    [`sq-btn-status-${status}`]: Boolean(status),
    'sq-btn-loading': loading,
    [`sq-btn-variant`]: variant,
  });

  return (
    <button disabled={disabled} type="button" className={classes} {...restProps}>
      {iconNode}
      <span>{children}</span>
    </button>
  );
}
