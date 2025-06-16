import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input addonBefore="https://" placeholder="Please enter" />
      <br />
      <Input addonAfter=".com" placeholder="Please enter" />
      <br />
      <Input addonBefore="https://" addonAfter=".com" placeholder="Please enter" />
    </>
  );
}
