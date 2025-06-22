import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { FocusEvent, ReactNode } from 'react';
import clsx from 'clsx';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import { isFunction, isNumber, isObject, isString, isUndefined } from '@sqi-ui/utils';
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

function formatValueToString(value: unknown, maxLength?: number, errorOnly?: boolean) {
  let str: string;
  if (value !== null && !isUndefined(value) && !isString(value)) {
    str = String(value);
  } else {
    str = value || '';
  }
  if (isNumber(maxLength) && !errorOnly) {
    return str.slice(0, maxLength);
  }
  return str;
}

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
    maxLength,
    tips,
    onFocus,
    onBlur,
    onChange,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Input);

  const inputRef = useRef<HTMLInputElement>(null);

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

  // =========== Input State ============
  const mergedMaxLength = isNumber(maxLength) ? maxLength : maxLength?.length;
  const mergedErrorOnly = isNumber(maxLength) ? false : maxLength?.errorOnly;
  const mergedShowLimit = isNumber(maxLength) ? true : maxLength?.showLimit !== false;
  const [innerValue, setInnerValue] = useMergeState<string | undefined>(defaultValue, {
    value: value,
  });
  const formatValue = formatValueToString(innerValue, mergedMaxLength, mergedErrorOnly);
  const isErrorLength = isNumber(mergedMaxLength) ? formatValue.length > mergedMaxLength : false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInnerValue(value);
    onChange?.(value, e);
  };

  const handleClickInputWrapper = () => {
    if (disabled) return;
    inputRef.current?.focus();
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
      [`${prefixCls}-input-limit-length-error`]: isErrorLength,
    },
    className,
  );
  const inputClasses = clsx(`${prefixCls}-input-real`);

  // =========== Input Clear ============
  const isShowClear = allowClear && formatValue && !disabled;
  const clearIcon = <CloseCircleFilledIcon />;

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setInnerValue('');
    onChange?.('', e);
  };

  const clearElement = isShowClear && (
    <button
      type="button"
      tabIndex={-1}
      className={clsx(`${prefixCls}-input-suffix`, `${prefixCls}-input-clear`)}
      onClick={handleClear}
    >
      {clearIcon}
    </button>
  );

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
  const isPassword = type === 'password';

  const suffixBaseElement: ReactNode = useMemo(() => {
    if (!isPassword) return suffix;
    if (isObject(visibilityToggle) && isFunction(visibilityToggle.renderIcon)) {
      return visibilityToggle.renderIcon(renderType === 'text');
    }
    if (renderType === 'password') return <BrowseOffIcon />;
    if (renderType === 'text') return <BrowseIcon />;
    return null;
  }, [isPassword, renderType, visibilityToggle, suffix]);

  // =========== Input Render ============

  // fix: rerender 会重新渲染 `InputGroupWrapper`，导致无法正常聚焦失焦
  const InputGroupWrapper = useMemo(() => {
    return function GroupWrapper({ children }: { children: ReactNode }) {
      const hasCoreWrapper = addonBefore || addonAfter;

      let content = children;
      if (hasCoreWrapper) {
        // 这层主要是针对 input 同一行的各种 dom 进行扩展，因此为 flex
        content = <div className={`${prefixCls}-input-group`}>{content}</div>;
      }

      if (tips) {
        // tips 是单独的一行，不能放在 group 中，需格外的一层元素包裹
        content = <div className={`${prefixCls}-input-group-extra`}>{content}</div>;
      }

      return content;
    };
  }, [addonBefore, addonAfter, tips]);

  const prefixElement = prefix && <span className={`${prefixCls}-input-prefix`}>{prefix}</span>;

  const suffixElement = suffixBaseElement && (
    <span
      role="button"
      tabIndex={-1}
      className={clsx(`${prefixCls}-input-suffix`, { [`${prefixCls}-input-suffix-password`]: isPassword })}
      onClick={togglePasswordVisible}
      // 避免点击后 Input 失去焦点
      onMouseDown={(e) => e.preventDefault()}
      onMouseUp={(e) => e.preventDefault()}
    >
      {suffixBaseElement}
    </span>
  );

  const limitLengthElement = isNumber(mergedMaxLength) && mergedShowLimit && (
    <span className={`${prefixCls}-input-limit-length-text`}>
      {formatValue.length}/{mergedMaxLength}
    </span>
  );

  const tipsElement = tips && (
    <div className={clsx(`${prefixCls}-input-tips`, { [`${prefixCls}-input-tips-status-${status}`]: status })}>
      {tips}
    </div>
  );

  // input core element
  const inputElement = (
    <>
      <span className={wrapperClasses} style={style} onClick={handleClickInputWrapper}>
        {prefixElement}
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
        {clearElement}
        {suffixElement}
        {limitLengthElement}
      </span>
    </>
  );

  const addBeforeElement = addonBefore && <span className={clsx(`${prefixCls}-input-group-addon`)}>{addonBefore}</span>;
  const addAfterElement = addonAfter && <span className={clsx(`${prefixCls}-input-group-addon`)}>{addonAfter}</span>;

  return (
    <InputGroupWrapper>
      {addBeforeElement}
      {inputElement}
      {addAfterElement}
      {tipsElement}
    </InputGroupWrapper>
  );
});

Input.displayName = 'Input';
export default Input;
