import React from 'react';
import { Radio } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Radio>Radio</Radio>
      <Radio defaultChecked>DefaultChecked Radio</Radio>
      <Radio disabled>Disabled Radio</Radio>
      <Radio checked disabled>
        Radio
      </Radio>
    </>
  );
}
