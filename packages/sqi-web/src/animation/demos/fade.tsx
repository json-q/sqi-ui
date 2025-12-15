import * as React from 'react';
import { Animation, Button, Divider } from '@sqi-ui/web';
import Box from './box';

export default function Demo() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <>
      <Button onClick={() => setInProp(!inProp)}>Toggle Fade</Button>
      <Divider />

      <Animation.Fade in={inProp} mountOnEnter unmountOnExit>
        <Box />
      </Animation.Fade>
    </>
  );
}
