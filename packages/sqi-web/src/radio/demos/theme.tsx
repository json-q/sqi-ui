import React from 'react';
import { Radio } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Radio.Group>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>
    </>
  );
}
