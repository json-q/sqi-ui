import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input placeholder="Please enter" maxLength={10} />
      <br />
      <Input placeholder="Please enter" defaultValue="this is  long value" maxLength={10} />
      <br />
      <Input
        placeholder="Please enter"
        defaultValue="this is  long value"
        maxLength={{
          length: 10,
          errorOnly: true,
        }}
      />
    </>
  );
}
