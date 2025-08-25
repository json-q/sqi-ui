import React from 'react';
import { Button, Checkbox, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Space>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        Disable Tooltip
      </Checkbox>

      <Tooltip disabled={disabled} content="This is a tooltip">
        <Button type="primary">Hover me</Button>
      </Tooltip>
    </Space>
  );
}
