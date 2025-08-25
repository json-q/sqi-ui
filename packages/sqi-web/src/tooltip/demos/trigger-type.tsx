import React from 'react';
import { Button, Input, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Tooltip content="This is a basic popup">
        <Button type="primary">Hover me</Button>
      </Tooltip>

      <Tooltip trigger="click" content="This is a hover popup">
        <Button type="primary">Click me</Button>
      </Tooltip>

      <Tooltip trigger="focus" content="This is a focus popup">
        <Input placeholder="Focus me" />
      </Tooltip>

      <Tooltip trigger="context-menu" content="This is a context menu popup">
        <Button type="primary">Right click me</Button>
      </Tooltip>
    </Space>
  );
}
