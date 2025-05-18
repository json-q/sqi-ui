import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo1() {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="text">Text</Button>

        <Button status="primary">Primary</Button>
        <Button status="danger">Danger</Button>
        <Button status="success">Success</Button>
        <Button status="warning">Warning</Button>
      </div>
      <hr />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="text" disabled>
          Text
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
    </>
  );
}
