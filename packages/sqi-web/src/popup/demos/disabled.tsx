import React from 'react';
import { Button, Checkbox, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Space>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        {disabled ? 'Enable' : 'Disable'}
      </Checkbox>

      <Popup disabled={disabled} content="This is a popup">
        <Button type="primary">Hover me</Button>
      </Popup>
    </Space>
  );
}
