import React from 'react';
import { AddIcon, SearchIcon } from '@sq-ui/icons';
import { Space } from '@sq-ui/web';

export default function Demo() {
  return (
    <Space>
      <AddIcon />
      <SearchIcon />

      <SearchIcon rotate={90} />
      <SearchIcon spin />
    </Space>
  );
}
