import React from 'react';
import { Button, Input, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Popup
        content={
          <Popup trigger="focus" content="This is a nest popup">
            <Input placeholder="Focus me" />
          </Popup>
        }
      >
        <Button type="primary">Hover me</Button>
      </Popup>
    </Space>
  );
}
