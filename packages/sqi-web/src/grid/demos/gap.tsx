import React from 'react';
import { Row, Col, Divider } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider text="Horizontal" align="left" />
      <Row gutter={16}>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
      </Row>

      <Divider text="Horizontal and Vertical" align="left" />
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
      </Row>

      <Divider text="Responsive (try resize or zoom window)" align="left" />
      <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 32, xl: 64, xxl: 128 }}>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
        <Col span={8}>
          <Placeholder>col-8</Placeholder>
        </Col>
      </Row>
    </>
  );
}

function Placeholder({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        height: 40,
        backgroundColor: 'var(--sqi-brand-color)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--sqi-text-color-anti)',
      }}
    >
      {children}
    </div>
  );
}
