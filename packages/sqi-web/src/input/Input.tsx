import React, { forwardRef, useContext, useState } from 'react';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { InputProps } from './type';
import clsx from 'clsx';

const defaultProps: InputProps = {
  type: 'text',
  size: 'md',
  align: 'left',
};

const Input = forwardRef<HTMLInputElement, InputProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { size, status, align, disabled, placeholder, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Input,
  );
  const [isFocused, toggleIsFocused] = useState(false);

  const wrapperClasses = clsx(`${prefixCls}-input`, {
    [`${prefixCls}-input-size-${size}`]: size,
    [`${prefixCls}-input-disabled`]: disabled,
    [`${prefixCls}-input-align-${align}`]: align,
    [`${prefixCls}-input-status-${status}`]: status,
    [`${prefixCls}-input-focus`]: isFocused,
  });
  const inputClasses = clsx(`${prefixCls}-input-real`);

  const internalFocus = () => {
    toggleIsFocused(true);
  };

  const internalBlur = () => {
    toggleIsFocused(false);
  };

  return (
    <span className={wrapperClasses}>
      <input
        ref={ref}
        {...restProps}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={internalFocus}
        onBlur={internalBlur}
      />
    </span>
  );
});

Input.displayName = 'Input';
export default Input;
