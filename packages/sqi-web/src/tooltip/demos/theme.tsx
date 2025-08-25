import React from 'react';
import { Button, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Tooltip content="this is a default tooltip">
        <Button type="default">default</Button>
      </Tooltip>
      <Tooltip content="this is a primary tooltip" theme="primary">
        <Button type="primary" status="primary">
          Primary
        </Button>
      </Tooltip>
      <Tooltip content="this is a success tooltip" theme="success">
        <Button type="primary" status="success">
          Success
        </Button>
      </Tooltip>
      <Tooltip content="this is a danger tooltip" theme="danger">
        <Button type="primary" status="danger">
          Danger
        </Button>
      </Tooltip>
      <Tooltip content="this is a warning tooltip" theme="warning">
        <Button type="primary" status="warning">
          Warning
        </Button>
      </Tooltip>
      <Tooltip content="this is a light tooltip" theme="light">
        <Button variant="outline">Light</Button>
      </Tooltip>
    </Space>
  );
}
