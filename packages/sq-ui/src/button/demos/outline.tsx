import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button variant="outline">Default</Button>
      <Button variant="outline" type="primary">
        Primary
      </Button>
      <Button variant="outline" status="danger">
        Danger
      </Button>
      <Button variant="outline" status="success">
        Success
      </Button>
      <Button variant="outline" status="warning">
        Warning
      </Button>
    </div>
  );
}
