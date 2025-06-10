import React from 'react';
import { Row, Col, Divider } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider align="left">Percentage columns</Divider>
      <Row>
        <Col flex={2}>
          <Placeholder color={5}>2 / 5</Placeholder>
        </Col>
        <Col flex={3}>
          <Placeholder color={6}>3 / 5</Placeholder>
        </Col>
      </Row>
      <Divider align="left">Fill rest</Divider>
      <Row>
        <Col flex="100px">
          <Placeholder color={5}>100px</Placeholder>
        </Col>
        <Col flex="auto">
          <Placeholder color={6}>Fill Rest</Placeholder>
        </Col>
      </Row>
      <Divider align="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px">
          <Placeholder color={5}>1 1 200px</Placeholder>
        </Col>
        <Col flex="0 1 300px">
          <Placeholder color={6}>0 1 300px</Placeholder>
        </Col>
      </Row>
      <br />
      <Row wrap={false}>
        <Col flex="none">
          <div
            style={{ padding: 12, backgroundColor: 'var(--sqi-brand-color-5)', color: 'var(--sqi-text-color-anti)' }}
          >
            none
          </div>
        </Col>
        <Col flex="auto">
          <Placeholder color={6}>auto with no-wrap</Placeholder>
        </Col>
      </Row>
    </>
  );
}

function Placeholder({ children, color }: { children?: React.ReactNode; color?: number }) {
  const bg = `var(--sqi-brand-color-${color})`;

  return (
    <div style={{ padding: '12px 0', textAlign: 'center', color: 'var(--sqi-text-color-anti)', backgroundColor: bg }}>
      {children}
    </div>
  );
}
