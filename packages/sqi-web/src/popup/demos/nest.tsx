import React from 'react';
import { Button, Input, Popup } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Popup
      content={
        <Popup
          trigger="click"
          placement="right"
          content={
            <Popup trigger="focus" outFocusToClose={false} placement="right" content={<h4>Three Popup</h4>}>
              <Input placeholder="Focus Me" />
            </Popup>
          }
        >
          <Button type="primary">Click Me</Button>
        </Popup>
      }
    >
      <Button type="primary">Hover Me</Button>
    </Popup>
  );
}
