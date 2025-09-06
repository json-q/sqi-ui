import React from 'react';
import { Space, Tag } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space size="lg">
      <Tag size="sm">Small</Tag>
      <Tag>Default</Tag>
      <Tag size="lg">Large</Tag>
    </Space>
  );
}
