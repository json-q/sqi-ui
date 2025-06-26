'use client';
import React, { forwardRef, useCallback, useContext, useId, useMemo } from 'react';
import type { RadioChangeEvent, RadioGroupProps, RadioValue } from './type';
import { ConfigContext } from '../config-provider/context';
import { useMergeProps, useMergeState } from '@sqi-ui/hooks';
import RadioGroupContext from './context';
import clsx from 'clsx';

const defaultProps: RadioGroupProps = {
  disabled: false,
  size: 'md',
  appearance: 'radio',
  variant: 'outline',
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.RadioGroup);
  const defaultName = useId();

  const { className, style, name = defaultName, value, defaultValue, children, disabled, size, onChange } = props;

  const [controlValue, setControlValue] = useMergeState(defaultValue, {
    value,
  });

  const onRadioChange = useCallback(
    (e: RadioChangeEvent) => {
      const lastValue = value;
      const val = e.target.value;
      if (!('value' in props)) {
        setControlValue(val as RadioValue);
      }
      if (val !== lastValue) {
        onChange?.(e);
      }
    },
    [controlValue, onChange],
  );

  const memoizedState = useMemo(() => {
    return { name, value: controlValue, disabled, size, onChange: onRadioChange };
  }, [name, value, disabled, size, onRadioChange]);

  return (
    <div ref={ref} className={clsx(`${prefixCls}-radio-group`, className)} style={style}>
      <RadioGroupContext.Provider value={memoizedState}>{children}</RadioGroupContext.Provider>
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
