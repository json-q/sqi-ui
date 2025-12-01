import * as React from 'react';
import { Animation, Button, Divider, Space, type SlidePlacement } from '@sqi-ui/web';
import Box from './box';

export default function Demo() {
  const [inProp, setInProp] = React.useState(false);
  const [placement, setPlacement] = React.useState<SlidePlacement>('right');

  const onChange = (placement: SlidePlacement) => {
    setInProp(!inProp);
    setPlacement(placement);
  };

  return (
    <>
      <Space>
        <Button onClick={() => onChange('left')}>Slide Left</Button>
        <Button onClick={() => onChange('right')}>Slide Right</Button>
        <Button onClick={() => onChange('top')}>Slide Top</Button>
        <Button onClick={() => onChange('bottom')}>Slide Bottom</Button>
      </Space>
      <Divider />

      <Animation.Slide in={inProp} placement={placement} mountOnEnter unmountOnExit>
        <Box className="sqi-anim-slide" />
      </Animation.Slide>
    </>
  );
}
