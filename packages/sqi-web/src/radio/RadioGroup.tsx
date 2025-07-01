'use client';
import React, { forwardRef, useCallback, useContext, useId, useMemo } from 'react';
import clsx from 'clsx';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import { isArray, isFunction, isNumber, isString } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';
import RadioGroupContext from './context';
import Radio from './Radio';
import RadioButton from './RadioButton';
import type { RadioChangeEvent, RadioGroupProps, RadioValue } from './type';

const defaultProps: RadioGroupProps = {
  disabled: false,
  size: 'md',
  appearance: 'radio',
  buttonVariant: 'outline',
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.RadioGroup);
  const defaultName = useId();

  const {
    className,
    style,
    name = defaultName,
    value,
    defaultValue,
    children,
    disabled,
    size,
    buttonVariant,
    renderOption,
    onChange,
    appearance,
    options,
  } = props;

  const [controlValue, setControlValue] = useMergeState(defaultValue, {
    value,
  });

  const onRadioChange = useCallback(
    (e: RadioChangeEvent) => {
      const val = e.target.value;
      if (!('value' in props)) {
        setControlValue(val as RadioValue);
      }
      if (val !== controlValue) {
        onChange?.(e);
      }
    },
    [controlValue, onChange],
  );

  let renderChildren = children;
  const Comp = appearance === 'button' ? RadioButton : Radio;

  if (isArray(options) && options.length > 0) {
    const isCustomRender = isFunction(renderOption);

    renderChildren = options.map((item) => {
      if (isString(item) || isNumber(item)) {
        const isChecked = controlValue === item;
        const renderNode = isCustomRender ? () => renderOption({ label: item, value: item, checked: isChecked }) : item;

        return (
          <Comp key={item.toString()} disabled={disabled} value={item} checked={isChecked}>
            {renderNode}
          </Comp>
        );
      }

      const isChecked = controlValue === item.value;
      // 必须包装成 function，否则 Radio 组件无法视为自定义渲染
      const renderNode = isCustomRender ? () => renderOption({ ...item, checked: isChecked }) : item.label;

      return (
        <Comp
          key={`radio-group-options-${item.value}`}
          className={item.className}
          style={item.style}
          disabled={item.disabled || disabled}
          value={item.value}
          checked={isChecked}
          id={item.id}
          title={item.title}
        >
          {renderNode}
        </Comp>
      );
    });
  }

  const memoizedState = useMemo(() => {
    return { name, value: controlValue, disabled, size, buttonVariant, onChange: onRadioChange };
  }, [name, value, disabled, size, buttonVariant, onRadioChange]);

  return (
    <div ref={ref} className={clsx(`${prefixCls}-radio-group`, className)} style={style}>
      <RadioGroupContext.Provider value={memoizedState}>{renderChildren}</RadioGroupContext.Provider>
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
