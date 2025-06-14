import React, { forwardRef, useContext, useMemo, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { InputProps } from './type';

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
    prefix,
    suffix,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Input);
  const [isFocused, toggleIsFocused] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);

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

  // fix: rerender 会重新渲染 `InputGroupWrapper`，导致无法正常聚焦失焦
  const InputGroupWrapper = useMemo(() => {
    return function GroupWrapper({ children }: { children: ReactNode }) {
      const hasWrapper = addonBefore || addonAfter;
      if (hasWrapper) {
        return <span className={`${prefixCls}-input-group`}>{children}</span>;
      }
      return <>{children}</>;
    };
  }, [addonBefore, addonAfter]);

  const inputElement = (
    <div className={wrapperClasses}>
      {prefix && <span className={`${prefixCls}-input-prefix`}>{prefix}</span>}
      <input
        ref={ref}
        {...restProps}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={internalFocus}
        onBlur={internalBlur}
      />
      {suffix && <span className={`${prefixCls}-input-suffix`}>{suffix}</span>}
    </div>
  );

  return (
    <InputGroupWrapper>
      {addonBefore && <span className={clsx(`${prefixCls}-input-group-addon`)}>{addonBefore}</span>}
      {inputElement}
      {addonAfter && <span className={clsx(`${prefixCls}-input-group-addon`)}>{addonAfter}</span>}
    </InputGroupWrapper>
  );
});

Input.displayName = 'Input';
export default Input;
