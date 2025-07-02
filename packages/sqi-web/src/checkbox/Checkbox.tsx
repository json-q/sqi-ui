import React, { forwardRef, useContext, useRef } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isFunction, isUndefined } from '@sqi-ui/utils';
import { BaseCheckbox } from '../_common/BaseCheckbox';
import { composeRef } from '../_util/composeRef';
import { ConfigContext } from '../config-provider/context';
import type { CheckboxProps } from './type';

const defaultProps: CheckboxProps = {
  defaultChecked: false,
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);

  const { children, checked, style, className, disabled, indeterminate, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Checkbox,
  );

  const classes = clsx(
    `${prefixCls}-checkbox-wrapper`,
    {
      [`${prefixCls}-checkbox-wrapper-checked`]: checked,
      [`${prefixCls}-checkbox-wrapper-disabled`]: disabled,
    },
    className,
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const onLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (isFunction(children)) {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  const renderChildren = (): React.ReactNode => {
    if (isUndefined(children)) return null;

    // TODO
    if (isFunction(children)) return null; /* return children({ checked: innerChecked }); */

    return <span className={`${prefixCls}-checkbox-label`}>{children}</span>;
  };

  return (
    <label className={classes} onClick={onLabelClick}>
      <BaseCheckbox
        {...restProps}
        className={clsx({ [`${prefixCls}-checkbox-indeterminate`]: indeterminate })}
        ref={composeRef(ref, inputRef)}
        type="checkbox"
        prefixCls={`${prefixCls}-checkbox`}
        disabled={disabled}
        style={{
          ...style,
          display: isFunction(children) ? 'none' : undefined,
        }}
      />
      {renderChildren()}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
