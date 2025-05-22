import React from 'react';
import { Button, Space } from '@sq-ui/web';

export default function Demo() {
  return (
    <Space>
      <Button loading>Default</Button>
      <Button type="primary" loading>
        Primary
      </Button>
      <Button loading status="primary">
        Primary
      </Button>
      <Button loading status="danger">
        Danger
      </Button>
      <Button loading status="success">
        Success
      </Button>
      <Button loading status="warning">
        Warning
      </Button>
    </Space>
  );
}
