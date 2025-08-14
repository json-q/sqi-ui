'use client';
import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import { LoadingIcon } from '@sqi-ui/icons';
import type { SwitchProps } from './type';
import { ConfigContext } from '../config-provider/context';

const defaultProps: SwitchProps = {
  label: [],
  loading: false,
  disabled: false,
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((baseProps, ref) => {
  const { prefixCls, size: ctxSize = 'md', componentConfig } = useContext(ConfigContext);
  const {
    checked,
    defaultChecked,
    className,
    disabled,
    size = ctxSize,
    label,
    loading,
    loadingIcon,
    onChange,
    onClick,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Switch);

  const [innerChecked, setInnerChecked] = useMergeState<boolean>(false, {
    value: checked,
    defaultValue: defaultChecked,
  });

  function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled || loading) return;

    const mergedChecked = !innerChecked;
    setInnerChecked(mergedChecked);
    onChange?.(mergedChecked, e);
    onClick?.(mergedChecked, e);
  }

  const classes = clsx(
    `${prefixCls}-switch`,
    {
      [`${prefixCls}-switch-checked`]: innerChecked,
      [`${prefixCls}-switch-disabled`]: disabled,
      [`${prefixCls}-switch-loading`]: loading,
      [`${prefixCls}-switch-${size}`]: size,
    },
    className,
  );

  const loadingNode: React.ReactNode = loadingIcon || <LoadingIcon spin />;

  return (
    <button
      {...restProps}
      type="button"
      role="switch"
      aria-checked={innerChecked}
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      onClick={onInternalClick}
    >
      <div className={`${prefixCls}-switch-handle`}>{loading && loadingNode}</div>

      <div className={`${prefixCls}-switch-content`}>{innerChecked ? label![0] : label![1]}</div>
    </button>
  );
});

Switch.displayName = 'Switch';

export default Switch;
