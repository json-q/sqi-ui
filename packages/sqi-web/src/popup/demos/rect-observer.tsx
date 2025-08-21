import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [hasLongTrigger, setHasLongTrigger] = React.useState(false);

  return (
    <Space>
      <Popup content="This is a basic popup">
        <Button onClick={() => setHasLongTrigger(!hasLongTrigger)} type="primary">
          Hover me {hasLongTrigger ? 'Show many trigger content' : ''}
        </Button>
      </Popup>
    </Space>
  );
}
