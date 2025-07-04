import React, { forwardRef, useCallback, useContext, useEffect, useId, useMemo, useState } from 'react';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import { CheckboxGroupContext } from './context';
import type { CheckboxGroupProps, CheckboxOptions, CheckboxValue } from './type';

const defaultProps: CheckboxGroupProps = {};

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((baseProps, ref) => {
  const { componentConfig } = useContext(ConfigContext);
  const defaultName = useId();

  const {
    defaultValue,
    children,
    className,
    style,
    onChange,
    disabled,
    name = defaultName,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.CheckboxGroup);

  // const [registeredValues, setRegisteredValues] = useMergeState<CheckboxValue[]>(defaultValue!, {
  //   value: restProps.value,
  // });

  const [innerValue, setInnerValue] = useState<CheckboxValue[]>(restProps.value || defaultValue || []);
  const [registeredValues, setRegisteredValues] = useState<CheckboxValue[]>([]);

  useEffect(() => {
    if ('value' in restProps) {
      setInnerValue(restProps.value || []);
    }
  }, [restProps.value]);

  const registerValue = useCallback((val: CheckboxValue) => {
    setRegisteredValues((prevValues) => [...prevValues, val]);
  }, []);

  const unregisterValue = useCallback((val: CheckboxValue) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
  }, []);

  // const formatOptions = useMemo(
  //   () =>
  //     options?.map((item) => {
  //       if (isString(item) || isNumber(item)) {
  //         return { label: item, value: item };
  //       }
  //       return item;
  //     }),
  //   [options],
  // );

  const toggleOption = useCallback(
    (options: CheckboxOptions) => {
      const optionIndex = innerValue.indexOf(options.value);
      const copyValue = [...innerValue];
      if (optionIndex === -1) {
        copyValue.push(options.value);
      } else {
        copyValue.splice(optionIndex, 1);
      }
      // 非受控情况下内部受控
      if (!('value' in restProps)) {
        setInnerValue(copyValue);
      }

      const checkedValues = copyValue.filter((val) => registeredValues.includes(val));

      onChange?.(checkedValues);
    },
    [innerValue, registeredValues, onChange],
  );

  const memoizedContext = useMemo(
    () => ({
      name,
      value: innerValue,
      disabled,
      toggleOption,
      registerValue,
      unregisterValue,
    }),
    [name, innerValue, disabled, toggleOption, registerValue, unregisterValue],
  );

  return (
    <div className={className} style={style} ref={ref}>
      <CheckboxGroupContext.Provider value={memoizedContext}>{children}</CheckboxGroupContext.Provider>
    </div>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
