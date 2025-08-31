import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import Row from '../Row';
import { mockMatchMedia } from './util';

describe('Row', () => {
  beforeEach(() => {
    mockMatchMedia();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    const { container } = render(<Row>Row Content</Row>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sqi-row');
    expect(container.firstChild).not.toHaveClass('sqi-row-nowrap');
    expect(container.firstChild).toHaveClass('sqi-row-align-start');
    expect(container.firstChild).toHaveClass('sqi-row-justify-start');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support align prop', () => {
    const { container, rerender } = render(<Row align="center">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-align-center');

    rerender(<Row align="end">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-align-end');

    rerender(<Row align="stretch">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-align-stretch');
  });

  it('should support justify prop', () => {
    const { container, rerender } = render(<Row justify="center">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-justify-center');

    rerender(<Row justify="end">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-justify-end');

    rerender(<Row justify="space-around">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-justify-space-around');

    rerender(<Row justify="space-between">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-justify-space-between');
  });

  it('should support wrap prop', () => {
    const { container } = render(<Row wrap={false}>Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row-nowrap');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support gutter prop', () => {
    const { container } = render(<Row gutter={16}>Row Content</Row>);
    expect(container.firstChild).toHaveStyle('margin-left: -8px');
    expect(container.firstChild).toHaveStyle('margin-right: -8px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support vertical gutter', () => {
    const { container } = render(<Row gutter={[16, 24]}>Row Content</Row>);
    expect(container.firstChild).toHaveStyle('margin-left: -8px');
    expect(container.firstChild).toHaveStyle('margin-right: -8px');
    expect(container.firstChild).toHaveStyle('margin-top: -12px');
    expect(container.firstChild).toHaveStyle('margin-bottom: -12px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support custom className and style', () => {
    const { container } = render(
      <Row className="custom-row" style={{ backgroundColor: 'red' }}>
        Row Content
      </Row>,
    );
    expect(container.firstChild).toHaveClass('custom-row');
    expect((container.firstChild as HTMLDivElement).getAttribute('style')).toContain('red');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should combine className correctly', () => {
    const { container } = render(<Row className="custom-row">Row Content</Row>);
    expect(container.firstChild).toHaveClass('sqi-row');
    expect(container.firstChild).toHaveClass('custom-row');
  });
});
