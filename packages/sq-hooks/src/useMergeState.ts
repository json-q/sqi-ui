import { type SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { isFunction, isUndefined } from '@sq-ui/utils';
import { usePrevious } from './usePrevious';

interface UseMergeStateOptions<T> {
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
}

export function useMergeState<T>(
  defaultStateValue: T,
  props?: UseMergeStateOptions<T>,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props || {};

  const [innerValue, setInnerValue] = useState<T>(() => {
    if (!isUndefined(propsValue)) return propsValue;
    else if (!isUndefined(defaultValue)) return isFunction(defaultValue) ? defaultValue : defaultValue;
    else return isFunction(defaultStateValue) ? defaultStateValue() : defaultStateValue;
  });

  const prevPropsValue = usePrevious(propsValue);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // 初始化时，props.value 已经在 useState 里赋值
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // 防止使用者清空值导致值不更新
    // 值为 undefined 且不是第一次渲染，则说明是使用者手动清空为 undefined，需要更新数据
    /**
     *  严格模式下 useEffect 执行两次，所以存在 propsValue 将 defaultValue 覆盖的严重 bug。
     *  解决方法来源: https://github.com/arco-design/arco-design/blob/main/components/_util/hooks/useMergeValue.ts
     */
    if (isUndefined(propsValue) && prevPropsValue !== propsValue) {
      setInnerValue(propsValue!);
    }
  }, [propsValue]);

  const mergedValue = isUndefined(propsValue) ? innerValue : propsValue;

  const triggerChange = useCallback(
    (value: SetStateAction<T>) => {
      const nextValue = isFunction(value) ? value(mergedValue) : value;

      if (isUndefined(propsValue)) {
        setInnerValue(nextValue);
      }

      // 当值发生变化时，才触发onChange
      if (Object.is(nextValue, mergedValue)) return;

      onChange?.(nextValue);
    },
    [innerValue, mergedValue],
  );

  return [mergedValue, triggerChange];
}
