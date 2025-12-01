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
              return <div style={{ width: 150, padding: 15, backgroundColor: 'lightblue' }}>toasterId: {id}</div>;
            })
          }
        >
          Add
        </Button>

        <Button
          type="primary"
          onClick={() => {
            toast.add(
              (id) => {
                return (
                  <div style={{ width: 150, padding: 15, backgroundColor: 'pink' }}>
                    Update: {id} Random:{Math.random().toString().slice(0, 6)}
                  </div>
                );
              },
              { id: 1, placement: 'top-left' },
            );
          }}
        >
          Update Id 1
        </Button>

        <Button type="primary" onClick={() => toast.remove()}>
          Clear All
        </Button>
      </Space>
      <Toaster duration={100000} />
    </>
  );
}
