import * as React from 'react';
import { Animation, Button, Divider } from '@sqi-ui/web';
import Box from './box';

export default function Demo() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <>
      <Button onClick={() => setInProp(!inProp)}>Toggle Bounce</Button>
      <Divider />

      <Animation.Bounce in={inProp} mountOnEnter unmountOnExit>
        <Box />
      </Animation.Bounce>
    </>
  );
}
