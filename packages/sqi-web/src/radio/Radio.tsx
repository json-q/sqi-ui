'use client';
import React, { forwardRef, useContext, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isUndefined, isEmptyObject, isFunction } from '@sqi-ui/utils';
import BaseCheckbox from '../_common/BaseCheckbox';
import { composeRef } from '../_util/composeRef';
import { ConfigContext } from '../config-provider/context';
import type { ConfigSize } from '../config-provider';
import RadioGroupContext from './context';
import type { RadioChangeEvent, RadioProps } from './type';

const defaultProps: RadioProps = {
  defaultChecked: false,
};

const Radio = forwardRef<HTMLInputElement, RadioProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const groupContext = useContext(RadioGroupContext);

  // 此处不解构 checked, 以保持 BaseCheckbox 的逻辑判断 "checked" in props
  const { _IS_BUTTON_, value, children, style, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Radio,
  );

  const onChange = (e: RadioChangeEvent) => {
    restProps.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const radioProps = { ...restProps };
  let mergedSize: ConfigSize = 'md';

  if (!isEmptyObject(groupContext)) {
    radioProps.name = groupContext.name; // name 不区分优先级，因为一组 radio 只会有一个 name 进行互斥选择
    radioProps.onChange = onChange;
    radioProps.checked = value === groupContext.value;
    radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
    mergedSize = groupContext.size ? groupContext.size : mergedSize;
  }

  const [innerChecked, setInnerChecked] = useState(false);
  const customizePrefixCls = _IS_BUTTON_ ? `${prefixCls}-radio-button` : `${prefixCls}-radio`;

  const classes = clsx(`${customizePrefixCls}-wrapper`, {
    [`${customizePrefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${customizePrefixCls}-wrapper-checked`]: radioProps.checked,
    [`${customizePrefixCls}-wrapper-size-${mergedSize}`]: mergedSize,
    [`${customizePrefixCls}-wrapper-filled`]: groupContext.buttonVariant === 'filled',
  });

  const renderChildren = (): React.ReactNode => {
    if (isUndefined(children)) return null;

    if (isFunction(children)) return children({ checked: innerChecked });

    return <span className={`${customizePrefixCls}-label`}>{children}</span>;
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const onLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (isFunction(children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  return (
    <label className={classes} onClick={onLabelClick}>
      <BaseCheckbox
        {...restProps}
        {...radioProps}
        ref={composeRef(ref, inputRef)}
        value={value}
        type="radio"
        prefixCls={customizePrefixCls}
        style={{
          ...style,
          display: isFunction(children) ? 'none' : undefined,
        }}
        disabled={radioProps.disabled}
        _getCheckedValue={setInnerChecked}
      />
      {renderChildren()}
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
