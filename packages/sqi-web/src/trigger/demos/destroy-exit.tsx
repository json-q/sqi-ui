import React from 'react';
import { Button, Space, Trigger, type TriggerProps } from '@sqi-ui/web';
import { Component } from './_wrapper';

const motionProps: TriggerProps['motion'] = {
  timeout: 150,
  name: 'demo-trigger',
  mountOnEnter: true,
};

export default function Demo() {
  return (
    <Space>
      <Trigger
        motion={motionProps}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Undestroy Popper
          </Component>
        }
      >
        <Button type="primary">Undestroy</Button>
      </Trigger>

      <Trigger
        motion={{ ...motionProps, unmountOnExit: true }}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Destroy Popper
          </Component>
        }
      >
        <Button type="primary">Destroy</Button>
      </Trigger>
    </Space>
  );
}
