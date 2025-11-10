import * as React from 'react';
import { Button, Space, toast, Toaster } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            toast.add((id) => {
              return <div style={{ width: 100, padding: 15, backgroundColor: 'lightblue' }}>toasterId: {id}</div>;
            })
          }
        >
          Add
        </Button>

        <Button type="primary" onClick={() => toast.remove()}>
          Clear All
        </Button>
      </Space>
      <Toaster />
    </>
  );
}
