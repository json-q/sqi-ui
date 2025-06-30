import React, { forwardRef, useEffect } from 'react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useMergeState } from '@sqi-ui/hooks';

export interface BaseCheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  event: ChangeEvent<HTMLInputElement>;
}

export interface CheckboxChangeEventTarget extends BaseCheckboxProps {
  checked: boolean;
}

export interface BaseCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  type: 'checkbox' | 'radio';
  prefixCls?: string;
  onChange?: (e: BaseCheckboxChangeEvent) => void;
  /**
   * @private always provider latest value when `checked` change
   */
  _getCheckedValue?: (checked: boolean) => void;
}

export const BaseCheckbox = forwardRef<HTMLInputElement, BaseCheckboxProps>((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    checked,
    disabled,
    defaultChecked = false,
    type = 'checkbox',
    title,
    onChange,
    _getCheckedValue,
    ...inputProps
  } = props;

  const [innerValue, setInnerValue] = useMergeState(defaultChecked, {
    value: checked,
  });

  useEffect(() => {
    _getCheckedValue?.(innerValue);
  }, [innerValue]);

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}-checked`]: innerValue,
    [`${prefixCls}-disabled`]: disabled,
  });

  const handleInnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    // 非受控状态下需要内部受控
    if (!('checked' in props)) {
      setInnerValue(e.target.checked);
    }
    onChange?.({
      target: {
        ...props,
        checked: e.target.checked,
      },
      event: e,
    });
  };

  return (
    <span className={classes} title={title} style={style}>
      <input
        {...inputProps}
        className={`${prefixCls}-input`}
        ref={ref}
        onChange={handleInnerChange}
        disabled={disabled}
        checked={innerValue}
        type={type}
      />
      <span className={`${prefixCls}-inner`} />
    </span>
  );
});

BaseCheckbox.displayName = 'BaseCheckbox';

export default BaseCheckbox;
