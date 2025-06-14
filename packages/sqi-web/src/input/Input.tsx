import React, { forwardRef, useCallback, useContext, useState, type ReactNode } from 'react';
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
  const {
    size,
    status,
    align,
    disabled,
    placeholder,
    variant = 'outline',
    addonBefore,
    addonAfter,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Input);
  const [isFocused, toggleIsFocused] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  // group
  const groupWrapperClasses = clsx(`${prefixCls}-input-group`);
  const groupAddonWrapperClasses = clsx(`${prefixCls}-input-group-addon`);
  // default
  const wrapperClasses = clsx(`${prefixCls}-input`, {
    [`${prefixCls}-input-variant-${variant}`]: variant,
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

  // fix: rerender 时会重新渲染 `InputGroupWrapper`，导致无法正常聚焦失焦
  const InputGroupWrapper = useCallback(
    ({ children }: { children: ReactNode }) => {
      const hasWrapper = addonBefore || addonAfter;

      if (!hasWrapper) return children;
      return <span className={groupWrapperClasses}>{children}</span>;
    },
    [addonBefore, addonAfter],
  );

  const AddOnWrapper = ({ children }: { children: ReactNode }) => {
    return <span className={groupAddonWrapperClasses}>{children}</span>;
  };

  const inputElement = (
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

  return (
    <InputGroupWrapper>
      {addonBefore && <AddOnWrapper>{addonBefore}</AddOnWrapper>}
      {inputElement}
      {addonAfter && <AddOnWrapper>{addonAfter}</AddOnWrapper>}
    </InputGroupWrapper>
  );
});

Input.displayName = 'Input';
export default Input;
