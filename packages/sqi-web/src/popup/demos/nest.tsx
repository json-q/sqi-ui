import React from 'react';
import { Button, Input, Popup } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Popup
      content={
        <Popup
          trigger="click"
          direction="right"
          content={
            <Popup trigger="focus" outFocusToClose={false} direction="right" content={<h4>Three Popup</h4>}>
              <Input placeholder="Focus Me" />
            </Popup>
          }
        >
          <Button>Click Me</Button>
        </Popup>
      }
    >
      <Button>Hover Me</Button>
    </Popup>
  );
}
