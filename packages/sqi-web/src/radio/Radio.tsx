import React, { forwardRef, useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import { useMergeProps } from '@sqi-ui/hooks';
import type { RadioProps } from './type';

const defaultProps: RadioProps = {
  disabled: false,
  checked: false,
  defaultChecked: false,
};

const Radio = forwardRef<HTMLInputElement, RadioProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { value, onChange, ...restProps } = useMergeProps(baseProps, defaultProps, componentConfig?.Radio);

  console.log('Radio', value, onChange);

  return (
    <label className={`${prefixCls}-radio-wrapper`}>
      <input ref={ref} type="radio" {...restProps} />
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
