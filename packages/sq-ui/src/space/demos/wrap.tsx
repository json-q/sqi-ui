import React from 'react';
import { Button, Space } from '@sq-ui/web';

export default function Demo() {
  return (
    <>
      <h5>Wrap item</h5>
      <Space wrap>
        {Array.from({ length: 20 }).map((_, index) => (
          <Button key={index} type="primary">
            Item{index + 1}
          </Button>
        ))}
      </Space>
    </>
  );
}
