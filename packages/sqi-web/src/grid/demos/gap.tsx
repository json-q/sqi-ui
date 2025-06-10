import React from 'react';
import { Row, Col, Divider } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider text="Horizontal" align="left" />
      <Row gutter={16}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>

      <Divider text="Horizontal and Vertical" align="left" />
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>

      <Divider text="Responsive (try resize or zoom window)" align="left" />
      <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 32, xl: 64, xxl: 128 }}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
