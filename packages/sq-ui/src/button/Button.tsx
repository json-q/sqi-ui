import * as React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './type';
import './style';

export default function Button(props: ButtonProps) {
  const { children, type = 'default', status, disabled } = props;

  const cls = clsx('sq-btn', `sq-btn-${type}`, {
    [`sq-btn-status-${status}`]: Boolean(status),
  });

  return (
    <button disabled={disabled} type="button" className={cls}>
      {children}
    </button>
  );
}
