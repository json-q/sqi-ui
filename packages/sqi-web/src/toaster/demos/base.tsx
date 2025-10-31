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
              return (
                <div style={{ height: 100, backgroundColor: 'lightblue', border: '1px solid #e6e6e6' }}>
                  toaster{id}
                </div>
              );
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
