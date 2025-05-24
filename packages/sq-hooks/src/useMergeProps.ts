import { useMemo } from 'react';

export function useMergeProps<P>(
  componentProps: P,
  componentDefaultProps: Partial<P> = {},
  globalComponentConfig: Partial<P> = {},
): P {
  return useMemo(() => {
    const _defaultProps = { ...componentDefaultProps, ...globalComponentConfig };
    const mProps = { ...componentProps };

    // https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js#L733-L740
    for (const propName in _defaultProps) {
      if (mProps[propName] === undefined) {
        mProps[propName] = _defaultProps[propName]!;
      }
    }

    return mProps;
  }, [componentProps, componentDefaultProps, globalComponentConfig]);
}
