import * as React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './type';
import './style';
import { LoadingIcon } from '@sq-ui/icons';

export default function Button(props: ButtonProps) {
  const {
    children,
    type = 'default',
    status,
    loading,
    disabled,
    variant = 'default',
    icon,
    size,
    href,
    target,
    onClick,
    anchorProps = {},
    ...restProps
  } = props;

  const iconNode = loading ? <LoadingIcon /> : icon;
  const _type = href ? 'link' : type;

  const classes = clsx('sq-btn', `sq-btn-${_type}`, {
    [`sq-btn-status-${status}`]: !!status,
    [`sq-btn-variant-${variant}`]: variant,
    [`sq-btn-size-${size}`]: !!size,
    'sq-btn-loading': loading,
    'sq-btn-disabled': disabled,
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
      <a href={href} target={target} className={classes} onClick={handleClick} {...anchorProps}>
        {iconNode}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={handleClick} {...restProps}>
      {iconNode}
      <span>{children}</span>
    </button>
  );
}
