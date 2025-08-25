import React from 'react';
import { Button, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Space>
      <Tooltip content="This is a basic tooltip">
        <Button type="primary">Hover me</Button>
      </Tooltip>

      <Tooltip defaultVisible content="This is a uncontrolled tooltip">
        <Button type="primary">Default open</Button>
      </Tooltip>

      <Tooltip visible={visible} content="This is a control tooltip. You must click button to close">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          Click me
        </Button>
      </Tooltip>
    </Space>
  );
}
