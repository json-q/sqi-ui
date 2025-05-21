import React from 'react';
import { Button } from '@sq-ui/web';

export default function Demo() {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button status="primary">Primary</Button>
        <Button status="danger">Danger</Button>
        <Button status="success">Success</Button>
        <Button status="warning">Warning</Button>
      </div>
      <hr />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button href="#">Default</Button>
        <Button href="#" type="primary">
          Primary
        </Button>
        <Button href="#" status="primary">
          Primary
        </Button>
        <Button href="#" status="danger">
          Danger
        </Button>
        <Button href="#" status="success">
          Success
        </Button>
        <Button href="#" status="warning">
          Warning
        </Button>
      </div>
    </>
  );
}
