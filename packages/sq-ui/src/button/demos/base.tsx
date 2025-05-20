import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button status="primary">Primary</Button>
      <Button status="danger">Danger</Button>
      <Button status="success">Success</Button>
      <Button status="warning">Warning</Button>
    </div>
  );
}
