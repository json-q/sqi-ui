import React from 'react';
import { ConfigProvider, Button, Space } from '@sq-ui/web';
export default function Demo() {
  return (
    <Space>
      <ConfigProvider
        size="lg"
        componentConfig={{
          Button: {
            status: 'danger',
          },
        }}
      >
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
      </ConfigProvider>
    </Space>
  );
}
