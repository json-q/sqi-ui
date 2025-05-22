import React from 'react';
import { Space } from '@sq-ui/web';

export default function Demo() {
  const Split = <div style={{ padding: '0 8px' }}>|</div>;

  return (
    <Space split={Split}>
      <span>text</span>
      <span>text</span>
      <span>text</span>
    </Space>
  );
}
