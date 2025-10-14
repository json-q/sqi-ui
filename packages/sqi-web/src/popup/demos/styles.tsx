import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';

export default function App() {
  return (
    <Space>
      <Popup content="This is an equal-width content" styles={{ content: { width: 'var(--reference-width)' } }}>
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup
        trigger="click"
        content="This is an equal-width content"
        styles={{ content: { width: 'var(--reference-width)' } }}
      >
        <Button type="primary">Click Long Content</Button>
      </Popup>
    </Space>
  );
}
