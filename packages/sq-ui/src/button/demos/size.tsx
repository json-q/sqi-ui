import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button type="primary" size="sm">
        SM
      </Button>
      <Button type="primary">MD</Button>
      <Button type="primary" size="lg">
        LG
      </Button>
    </div>
  );
}
