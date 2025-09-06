import React from 'react';
import { Space, Tag } from '@sqi-ui/web';
import { CheckCircleFilledIcon, CloseCircleFilledIcon } from '@sqi-ui/icons';

export default function Demo() {
  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };

  return (
    <Space size="lg">
      <Tag>default</Tag>
      <Tag bordered>bordered</Tag>
      <Tag icon={<CheckCircleFilledIcon />}>with icon</Tag>
      <Tag closable>closeable</Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag closable={<CloseCircleFilledIcon />}>custom close icon</Tag>
    </Space>
  );
}
