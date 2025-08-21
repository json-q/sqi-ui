import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Space>
      <Popup content="This is a basic popup">
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup defaultVisible content="This is a uncontrolled popup">
        <Button type="primary">Default open</Button>
      </Popup>

      <Popup visible={visible} content="This is a Control popup. You must click button to close">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          Click me
        </Button>
      </Popup>
    </Space>
  );
}
