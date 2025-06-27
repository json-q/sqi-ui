import React, { forwardRef } from 'react';
import Radio from './Radio';
import type { RadioProps } from './type';

const RadioButton = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return <Radio _IS_BUTTON_ {...props} ref={ref} />;
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
