import React from 'react';
import { Button, Trigger } from '@sqi-ui/web';
import { Component } from './_wrapper';
import './demo.module.css';

export default function Demo() {
  return (
    <Trigger
      motion={{ timeout: 500, name: 'demo', mountOnEnter: true, preEnter: true }}
      arrow={<div style={{ width: 12, height: 12, backgroundColor: 'red' }}></div>}
      popper={
        <Component size={110} backgroundColor="blue">
          Popper Element
        </Component>
      }
    >
      <Button type="primary">Hover me</Button>
    </Trigger>
  );
}
