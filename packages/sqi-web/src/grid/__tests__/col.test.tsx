import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import Row from '../Row';
import Col from '../Col';
import { mockMatchMedia } from './util';

describe('Col', () => {
  beforeEach(() => {
    mockMatchMedia();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    const { container } = render(<Col>Col Content</Col>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sqi-col');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support span prop', () => {
    const { container } = render(<Col span={12}>Col Content</Col>);
    expect(container.firstChild).toHaveClass('sqi-col-12');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support offset prop', () => {
    const { container } = render(<Col offset={6}>Col Content</Col>);
    expect(container.firstChild).toHaveClass('sqi-col-offset-6');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support order prop', () => {
    const { container } = render(<Col order={2}>Col Content</Col>);
    expect(container.firstChild).toHaveClass('sqi-col-order-2');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support flex prop with number', () => {
    const { container } = render(<Col flex={1}>Col Content</Col>);
    expect(container.firstChild).toHaveStyle('flex: 1 1 auto');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support flex prop with basis string', () => {
    const { container } = render(<Col flex="200px">Col Content</Col>);
    expect(container.firstChild).toHaveStyle('flex: 0 0 200px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support flex prop with flex string', () => {
    const { container } = render(<Col flex="1 1 auto">Col Content</Col>);
    expect(container.firstChild).toHaveStyle('flex: 1 1 auto');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support responsive props', () => {
    const { container } = render(
      <Col xs={12} sm={8} md={6} lg={4}>
        Col Content
      </Col>,
    );
    expect(container.firstChild).toHaveClass('sqi-col-xs-12');
    expect(container.firstChild).toHaveClass('sqi-col-sm-8');
    expect(container.firstChild).toHaveClass('sqi-col-md-6');
    expect(container.firstChild).toHaveClass('sqi-col-lg-4');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support responsive object props', () => {
    const { container } = render(
      <Col xs={{ span: 12, offset: 2 }} sm={{ span: 8 }} md={{ span: 6, order: 1 }}>
        Col Content
      </Col>,
    );
    expect(container.firstChild).toHaveClass('sqi-col-xs-12');
    expect(container.firstChild).toHaveClass('sqi-col-xs-offset-2');
    expect(container.firstChild).toHaveClass('sqi-col-sm-8');
    expect(container.firstChild).toHaveClass('sqi-col-md-6');
    expect(container.firstChild).toHaveClass('sqi-col-md-order-1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support gutter from Row context', () => {
    const { container } = render(
      <Row gutter={[16, 24]}>
        <Col span={12}>Col Content</Col>
      </Row>,
    );

    const col = container.querySelector('.sqi-col');
    expect(col).toHaveStyle('padding-left: 8px');
    expect(col).toHaveStyle('padding-right: 8px');
    expect(col).toHaveStyle('padding-top: 12px');
    expect(col).toHaveStyle('padding-bottom: 12px');
    expect(container).toMatchSnapshot();
  });

  it('should support custom className and style', () => {
    const { container } = render(
      <Col className="custom-col" style={{ backgroundColor: 'blue' }}>
        Col Content
      </Col>,
    );
    expect(container.firstChild).toHaveClass('custom-col');
    expect((container.firstChild as HTMLDivElement).getAttribute('style')).toContain('blue');
    expect(container.firstChild).toMatchSnapshot();
  });
});
