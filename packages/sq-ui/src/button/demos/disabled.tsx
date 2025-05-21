import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <>
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
      <hr />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button disabled href="#">
          Default
        </Button>
        <Button type="primary" disabled href="#">
          Primary
        </Button>
        <Button disabled status="primary" href="#">
          Primary
        </Button>
        <Button disabled status="danger" href="#">
          Danger
        </Button>
        <Button disabled status="success" href="#">
          Success
        </Button>
        <Button disabled status="warning" href="#">
          Warning
        </Button>
      </div>
    </>
  );
}
