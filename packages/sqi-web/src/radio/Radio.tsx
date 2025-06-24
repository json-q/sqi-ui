'use client';
import React, { forwardRef, useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import { useMergeProps } from '@sqi-ui/hooks';
import BaseCheckbox from '../_common/BaseCheckbox';
import type { RadioProps } from './type';
import clsx from 'clsx';
import { isUndefined } from '@sqi-ui/utils';

const defaultProps: RadioProps = {
  disabled: false,
  defaultChecked: false,
};

const Radio = forwardRef<HTMLInputElement, RadioProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  // 此处不解构 checked, 以保持 BaseCheckbox 的逻辑判断 "checked" in props
  const { children, disabled, ...restProps } = useMergeProps(baseProps, defaultProps, componentConfig?.Radio);

  const classes = clsx(`${prefixCls}-radio-wrapper`, {
    [`${prefixCls}-radio-wrapper-disabled`]: disabled,
    [`${prefixCls}-radio-wrapper-checked`]: baseProps.checked,
  });

  return (
    <label className={classes}>
      <BaseCheckbox {...restProps} ref={ref} type="radio" prefixCls={`${prefixCls}-radio`} disabled={disabled} />
      {!isUndefined(children) ? <span className={`${prefixCls}-radio-label`}>{children}</span> : null}
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
