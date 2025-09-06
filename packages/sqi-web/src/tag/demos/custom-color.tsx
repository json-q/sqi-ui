import React from 'react';
import { Space, Tag } from '@sqi-ui/web';

const COLORS_CUSTOM = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
];

export default function Demo() {
  return (
    <Space size="lg" wrap>
      {COLORS_CUSTOM.map((color, i) => (
        <Tag key={i.toString()} closable color={color}>
          {color}
        </Tag>
      ))}
    </Space>
  );
}
