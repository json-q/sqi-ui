import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { FocusEvent, ReactNode } from 'react';
import clsx from 'clsx';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import { isFunction, isObject, isUndefined } from '@sqi-ui/utils';
import { CloseCircleFilledIcon, BrowseOffIcon, BrowseIcon } from '@sqi-ui/icons';
import { ConfigContext } from '../config-provider/context';
import { composeRef } from '../_util/composeRef';
import type { InputProps, VisibilityToggle } from './type';

const defaultProps: InputProps = {
  type: 'text',
  size: 'md',
  align: 'left',
  visibilityToggle: true,
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
    type,
    className,
    style,
    visibilityToggle,
    onFocus,
    onBlur,
    onChange,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Input);
  const inputRef = useRef<HTMLInputElement>(null);
  const isPassword = type === 'password';

  // =========== Input Focus ============
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

  const wrapperClasses = clsx(
    `${prefixCls}-input`,
    {
      [`${prefixCls}-input-variant-${variant}`]: variant,
      [`${prefixCls}-input-size-${size}`]: size,
      [`${prefixCls}-input-disabled`]: disabled,
      [`${prefixCls}-input-align-${align}`]: align,
      [`${prefixCls}-input-status-${status}`]: status,
      [`${prefixCls}-input-focus`]: isFocused,
    },
    className,
  );
  const inputClasses = clsx(`${prefixCls}-input-real`);

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

  const handleClickInputWrapper = () => {
    if (!disabled) return;
    inputRef.current?.focus();
  };

  // =========== Input Clear ============
  const isShowClear = allowClear && formatValue && !disabled;
  const clearIcon = <CloseCircleFilledIcon />;

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setInnerValue('');
    onChange?.('', e);
  };

  // =========== Input Password Visible ============

  const visibilityIsControlled = isObject(visibilityToggle) && !isUndefined(visibilityToggle.visible);
  const [renderType, setRenderType] = useState(type);

  useEffect(() => {
    if (visibilityIsControlled) {
      setRenderType(visibilityToggle.visible ? 'text' : 'password');
    } else {
      setRenderType(type);
    }
  }, [type, visibilityIsControlled, (visibilityToggle as VisibilityToggle)?.visible]);

  const togglePasswordVisible = () => {
    if (disabled) return;

    const toggleType = renderType === 'password' ? 'text' : 'password';
    setRenderType(toggleType);
    if (visibilityIsControlled) {
      visibilityToggle.onVisibleChange?.(toggleType === 'text');
    }
  };

  // =========== Input Suffix ============

  let suffixElement: ReactNode = suffix;

  if (isPassword) {
    if (isObject(visibilityToggle) && isFunction(visibilityToggle.renderIcon)) {
      suffixElement = visibilityToggle.renderIcon(renderType === 'text');
    } else if (renderType === 'password') {
      suffixElement = <BrowseOffIcon />;
    } else if (renderType === 'text') {
      suffixElement = <BrowseIcon />;
    }
  }

  // =========== Input Render ============

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
    <span className={wrapperClasses} style={style} onClick={handleClickInputWrapper}>
      {prefix && <span className={`${prefixCls}-input-prefix`}>{prefix}</span>}
      <input
        ref={composeRef(ref, inputRef)}
        {...restProps}
        type={renderType}
        value={formatValue}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={internalFocus}
        onBlur={internalBlur}
      />
      {isShowClear && (
        <button
          type="button"
          tabIndex={-1}
          className={clsx(`${prefixCls}-input-suffix`, `${prefixCls}-input-clear`)}
          onClick={handleClear}
        >
          {clearIcon}
        </button>
      )}
      {suffixElement && (
        <span
          role="button"
          tabIndex={-1}
          className={clsx(`${prefixCls}-input-suffix`, { [`${prefixCls}-input-suffix-password`]: isPassword })}
          onClick={togglePasswordVisible}
          // 避免点击后 Input 失去焦点
          onMouseDown={(e) => e.preventDefault()}
          onMouseUp={(e) => e.preventDefault()}
        >
          {suffixElement}
        </span>
      )}
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
