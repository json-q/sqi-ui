import * as React from 'react';
import { Animation, Button, Divider, Space } from '@sqi-ui/web';
import Box from './box';

export default function Demo() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <>
      <Button onClick={() => setInProp(!inProp)}>Toggle Collapse</Button>
      <Divider />
      <Space split={<Divider direction="vertical" />} align="end">
        <Animation.Collapse dimension="height" in={inProp} unmountOnExit>
          <Box />
        </Animation.Collapse>

        <Animation.Collapse dimension="width" in={inProp} unmountOnExit>
          <Box />
        </Animation.Collapse>
      </Space>
    </>
  );
}
