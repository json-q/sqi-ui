import React, { forwardRef, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isArray, isFunction, isNumber, isString } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';
import { CheckboxGroupContext } from './context';
import Checkbox from './Checkbox';
import type { CheckboxGroupProps, CheckboxValue } from './type';

const defaultProps: CheckboxGroupProps = {};

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const defaultName = useId();

  const {
    defaultValue,
    children,
    options,
    className,
    style,
    disabled,
    name = defaultName,
    onChange,
    renderOption,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.CheckboxGroup);

  const [innerValue, setInnerValue] = useState<CheckboxValue[]>(restProps.value || defaultValue || []);
  const [registeredValues, setRegisteredValues] = useState<CheckboxValue[]>([]);
  const registeredValuesRef = useRef<CheckboxValue[]>([]);

  useEffect(() => {
    registeredValuesRef.current = registeredValues;
  }, [registeredValues]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> ignore `restProps`
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

  const formatOptions = useMemo(
    () =>
      options?.map((item) => {
        if (isString(item) || isNumber(item)) {
          return { label: item, value: item };
        }
        return item;
      }),
    [options],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> ignore `restProps`
  const toggleOption = useCallback(
    (changeValue: CheckboxValue) => {
      const copyValue = [...innerValue];
      const valueIndex = innerValue.indexOf(changeValue);
      if (valueIndex === -1) {
        copyValue.push(changeValue);
      } else {
        copyValue.splice(valueIndex, 1);
      }
      // 非受控情况下内部受控
      if (!('value' in restProps)) {
        setInnerValue(copyValue);
      }

      const checkedValues = copyValue.filter((val) => registeredValuesRef.current.includes(val));

      onChange?.(checkedValues);
    },
    [innerValue, onChange],
  );

  let renderChildren = children;
  if (isArray(formatOptions) && formatOptions.length > 0) {
    const isCustomRender = isFunction(renderOption);

    renderChildren = formatOptions.map((item) => {
      const isChecked = innerValue.includes(item.value);
      const renderNode = isCustomRender ? () => renderOption({ ...item, checked: isChecked }) : item.label;

      return (
        <Checkbox
          key={`checkbox-group-options-${item.value}`}
          className={item.className}
          style={item.style}
          disabled={'disabled' in item ? item.disabled : disabled}
          value={item.value}
          checked={isChecked}
          id={item.id}
          title={item.title}
          onChange={item.onChange}
        >
          {renderNode}
        </Checkbox>
      );
    });
  }

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
    <div className={clsx(`${prefixCls}-checkbox-group`, className)} style={style} ref={ref}>
      <CheckboxGroupContext.Provider value={memoizedContext}>{renderChildren}</CheckboxGroupContext.Provider>
    </div>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
