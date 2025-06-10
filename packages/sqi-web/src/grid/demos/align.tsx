import React from 'react';
import { Col, Divider, Row } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider align="left">element align left</Divider>
      <Row justify="start" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
      </Row>

      <Divider align="left">element align center</Divider>
      <Row justify="center" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
      </Row>

      <Divider align="left">element align right</Divider>
      <Row justify="end" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
      </Row>

      <Divider align="left">element monospaced arrangement</Divider>
      <Row justify="space-between" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
      </Row>

      <Divider align="left">element align full</Divider>
      <Row justify="space-around" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
        <Col span={4}>
          <Placeholder>col-4</Placeholder>
        </Col>
      </Row>
    </>
  );
}

function Placeholder({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '12px 0',
        backgroundColor: 'var(--sqi-brand-color)',
        color: 'var(--sqi-text-color-anti)',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
