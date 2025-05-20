import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
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
    </div>
  );
}
