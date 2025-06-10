import React from 'react';
import { Row, Col } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
        <Col span={12}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-6)' }} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
        <Col span={8}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-6)' }} />
        </Col>
        <Col span={8}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
        <Col span={6}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-6)' }} />
        </Col>
        <Col span={6}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-5)' }} />
        </Col>
        <Col span={6}>
          <Placeholder style={{ backgroundColor: 'var(--sqi-brand-color-6)' }} />
        </Col>
      </Row>
    </>
  );
}

function Placeholder({ style }: { style?: React.CSSProperties }) {
  return <div style={{ height: 40, ...style }} />;
}
