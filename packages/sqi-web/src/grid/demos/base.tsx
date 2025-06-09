import React from 'react';
import { Row, Col } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Placeholder />
      </Col>
      <Col span={8}>
        <Placeholder />
      </Col>
    </Row>
  );
}

function Placeholder() {
  return <div style={{ width: '100%', height: 40, backgroundColor: 'blue' }} />;
}
