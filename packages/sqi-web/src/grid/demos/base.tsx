import React from 'react';
import { Row, Col } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Placeholder color={5} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Placeholder color={5} />
        </Col>
        <Col span={12}>
          <Placeholder color={6} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>
          <Placeholder color={5} />
        </Col>
        <Col span={8}>
          <Placeholder color={6} />
        </Col>
        <Col span={8}>
          <Placeholder color={5} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>
          <Placeholder color={5} />
        </Col>
        <Col span={6}>
          <Placeholder color={6} />
        </Col>
        <Col span={6}>
          <Placeholder color={5} />
        </Col>
        <Col span={6}>
          <Placeholder color={6} />
        </Col>
      </Row>
    </>
  );
}

function Placeholder({ color }: { color: number }) {
  const bg = `var(--sqi-brand-color-${color})`;

  return <div style={{ padding: '16px 0', backgroundColor: bg }} />;
}
