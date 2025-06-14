import React, { forwardRef, useContext, useMemo, useState, type FocusEvent, type ReactNode } from 'react';
import clsx from 'clsx';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { InputProps } from './type';
import { CloseCircleFilledIcon } from '@sqi-ui/icons';

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
    allowClear,
    placeholder,
    variant = 'outline',
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    value,
    defaultValue,
    onFocus,
    onBlur,
    onChange,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Input);

  // =========== Input State ============
  const [innerValue, setInnerValue] = useMergeState<string | undefined>(defaultValue, {
    value: value,
  });
  const formatValue = innerValue === undefined || innerValue === null ? '' : String(innerValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInnerValue(value);
    onChange?.(value, e);
  };

  // =========== Input Clear ============
  const isShowClear = allowClear && formatValue && !disabled;
  const clearIcon = <CloseCircleFilledIcon />;

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setInnerValue('');
    onChange?.('', e);
  };

  // =========== Input Event ============
  const [isFocused, toggleIsFocused] = useState(false);

  const internalFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    toggleIsFocused(true);
    onFocus?.(e);
  };

  const internalBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    toggleIsFocused(false);
    onBlur?.(e);
  };

  // =========== Input style ============

  const wrapperClasses = clsx(`${prefixCls}-input`, {
    [`${prefixCls}-input-variant-${variant}`]: variant,
    [`${prefixCls}-input-size-${size}`]: size,
    [`${prefixCls}-input-disabled`]: disabled,
    [`${prefixCls}-input-align-${align}`]: align,
    [`${prefixCls}-input-status-${status}`]: status,
    [`${prefixCls}-input-focus`]: isFocused,
  });
  const inputClasses = clsx(`${prefixCls}-input-real`);

  // =========== Input Element ============

  // fix: rerender 会重新渲染 `InputGroupWrapper`，导致无法正常聚焦失焦
  const InputGroupWrapper = useMemo(() => {
    return function GroupWrapper({ children }: { children: ReactNode }) {
      const hasWrapper = addonBefore || addonAfter;
      if (hasWrapper) {
        return <span className={`${prefixCls}-input-group`}>{children}</span>;
      }
      return children;
    };
  }, [addonBefore, addonAfter]);

  const inputElement = (
    <span className={wrapperClasses}>
      {prefix && <span className={`${prefixCls}-input-prefix`}>{prefix}</span>}
      <input
        ref={ref}
        {...restProps}
        value={formatValue}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={internalFocus}
        onBlur={internalBlur}
      />
      {isShowClear && (
        <button className={clsx(`${prefixCls}-input-suffix`, `${prefixCls}-input-clear`)} onClick={handleClear}>
          {clearIcon}
        </button>
      )}
      {suffix && <span className={`${prefixCls}-input-suffix`}>{suffix}</span>}
    </span>
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
