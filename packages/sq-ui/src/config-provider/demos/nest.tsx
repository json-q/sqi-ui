import React from 'react';
import { ConfigProvider, Button, Space } from '@sq-ui/web';

export default function Demo() {
  return (
    <ConfigProvider size="lg">
      <Space>
        <Button type="primary">Button</Button>

        <ConfigProvider
          size="sm"
          componentConfig={{
            Button: {
              status: 'success',
            },
          }}
        >
          <Button variant="text">Button</Button>
        </ConfigProvider>
      </Space>
    </ConfigProvider>
  );
}
