'use client';
import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isUndefined, isEmptyObject } from '@sqi-ui/utils';
import BaseCheckbox from '../_common/BaseCheckbox';
import { ConfigContext } from '../config-provider/context';
import RadioGroupContext from './context';
import type { RadioChangeEvent, RadioProps } from './type';

const defaultProps: RadioProps = {
  disabled: false,
  defaultChecked: false,
  size: 'md',
};

const Radio = forwardRef<HTMLInputElement, RadioProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const groupContext = useContext(RadioGroupContext);

  // 此处不解构 checked, 以保持 BaseCheckbox 的逻辑判断 "checked" in props
  const { _IS_BUTTON_, size, value, children, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Radio,
  );

  const onChange = (e: RadioChangeEvent) => {
    restProps.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const radioProps = { ...restProps };

  if (!isEmptyObject(groupContext)) {
    radioProps.name = groupContext.name; // name 不区分优先级，因为一组 radio 只会有一个 name 进行互斥选择
    radioProps.onChange = onChange;
    radioProps.checked = value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
  }

  const customizePrefixCls = _IS_BUTTON_ ? `${prefixCls}-radio-button` : `${prefixCls}-radio`;

  const classes = clsx(`${customizePrefixCls}-wrapper`, {
    [`${customizePrefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${customizePrefixCls}-wrapper-checked`]: radioProps.checked,
    [`${customizePrefixCls}-wrapper-size-${size}`]: size,
    [`${customizePrefixCls}-wrapper-outline`]: groupContext.buttonVariant === 'outline',
    [`${customizePrefixCls}-wrapper-filled`]: groupContext.buttonVariant === 'filled',
  });

  return (
    <label className={classes}>
      <BaseCheckbox
        {...restProps}
        {...radioProps}
        ref={ref}
        value={value}
        type="radio"
        prefixCls={customizePrefixCls}
        disabled={radioProps.disabled}
      />
      {!isUndefined(children) ? <span className={`${customizePrefixCls}-label`}>{children}</span> : null}
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
