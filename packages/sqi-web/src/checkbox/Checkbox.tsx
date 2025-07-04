import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useLatest, useMergeProps } from '@sqi-ui/hooks';
import { isEmptyObject, isFunction, isUndefined } from '@sqi-ui/utils';
import { BaseCheckbox } from '../_common/BaseCheckbox';
import { composeRef } from '../_util/composeRef';
import { ConfigContext } from '../config-provider/context';
import type { CheckboxProps } from './type';
import { CheckboxGroupContext } from './context';

const defaultProps: CheckboxProps = {
  defaultChecked: false,
  indeterminate: false,
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const checkboxGroup = useContext(CheckboxGroupContext);

  const { children, style, className, indeterminate, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Checkbox,
  );

  const [innerChecked, setInnerChecked] = useState(false);
  const mergedDisabled = 'disabled' in restProps ? restProps.disabled : checkboxGroup.disabled;
  const prevValue = useLatest(restProps.value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkboxGroup.registerValue?.(restProps.value!);
  }, []);

  useEffect(() => {
    if (restProps.value !== prevValue.current) {
      checkboxGroup.unregisterValue?.(prevValue.current!);
      checkboxGroup.registerValue?.(restProps.value!);
      prevValue.current = restProps.value;
    }

    return () => checkboxGroup.unregisterValue?.(restProps.value!);
  }, [restProps.value]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate!;
    }
  }, [indeterminate]);

  const checkboxProps = { ...restProps };
  if (!isEmptyObject(checkboxGroup)) {
    if (!('value' in restProps)) {
      console.error('[sqi-web]: value is required when using CheckboxGroup');
    }

    checkboxProps.onChange = (...args) => {
      restProps.onChange?.(...args);
      checkboxGroup.toggleOption?.(restProps.value!);
    };

    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.includes(restProps.value!);
  }

  const classes = clsx(
    `${prefixCls}-checkbox-wrapper`,
    {
      [`${prefixCls}-checkbox-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-checkbox-wrapper-disabled`]: mergedDisabled,
    },
    className,
  );

  const onLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (isFunction(children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  const renderChildren = (): React.ReactNode => {
    if (isUndefined(children)) return null;

    if (isFunction(children)) {
      return children({
        checked: 'checked' in checkboxProps ? !!checkboxProps.checked : innerChecked,
      });
    }

    return <span className={`${prefixCls}-checkbox-label`}>{children}</span>;
  };

  return (
    <label className={classes} onClick={onLabelClick}>
      <BaseCheckbox
        {...checkboxProps}
        type="checkbox"
        ref={composeRef(ref, inputRef)}
        disabled={mergedDisabled}
        prefixCls={`${prefixCls}-checkbox`}
        className={clsx({ [`${prefixCls}-checkbox-indeterminate`]: indeterminate })}
        style={{
          ...style,
          display: isFunction(children) ? 'none' : undefined,
        }}
        _getCheckedValue={setInnerChecked}
      />
      {renderChildren()}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
