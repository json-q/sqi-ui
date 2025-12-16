import React from 'react';
import { Button, Space, toast, Toaster, type ToasterProps } from '@sqi-ui/web';

const toastStyle: React.CSSProperties = {
  padding: 12,
  border: '1px solid #e4e9ec',
  backgroundColor: 'white',
  boxShadow: '0.5px 0.5px 0.5px 0.5px #eee',
};

export default function Demo() {
  const showToast = (placement: ToasterProps['placement']) => {
    toast.add((id) => <div style={toastStyle}>Toast id is: {id}</div>, { placement, toasterId: 'placement' });
  };

  return (
    <>
      <Toaster id="placement" />
      <Space>
        <Button type="primary" onClick={() => showToast('top-start')}>
          top-start
        </Button>
        <Button type="primary" onClick={() => showToast('top-center')}>
          top
        </Button>
        <Button type="primary" onClick={() => showToast('top-end')}>
          top-end
        </Button>

        <Button type="primary" onClick={() => showToast('bottom-start')}>
          bottom-start
        </Button>
        <Button type="primary" onClick={() => showToast('bottom-center')}>
          bottom
        </Button>
        <Button type="primary" onClick={() => showToast('bottom-end')}>
          bottom-end
        </Button>
      </Space>
    </>
  );
}
