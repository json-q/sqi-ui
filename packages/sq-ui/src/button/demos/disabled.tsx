import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button disabled>Default</Button>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled status="primary">
        Primary
      </Button>
      <Button disabled status="danger">
        Danger
      </Button>
      <Button disabled status="success">
        Success
      </Button>
      <Button disabled status="warning">
        Warning
      </Button>
    </div>
  );
}
