import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Space from '..';

describe('Space', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <Space>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Space className="custom-class">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toHaveClass('custom-class');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('applies correct direction classes', () => {
    const { container: horizontalContainer } = render(
      <Space direction="horizontal">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    const { container: verticalContainer } = render(
      <Space direction="vertical">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(horizontalContainer.firstChild).toHaveClass('sqi-space-direction-horizontal');
    expect(verticalContainer.firstChild).toHaveClass('sqi-space-direction-vertical');
    expect(horizontalContainer.firstChild).toMatchSnapshot();
    expect(verticalContainer.firstChild).toMatchSnapshot();
  });

  it('applies correct align classes', () => {
    const { container } = render(
      <Space align="start">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toHaveClass('sqi-space-align-start');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('applies wrap class when wrap is true', () => {
    const { container } = render(
      <Space wrap>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toHaveClass('sqi-space-wrap');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with split element', () => {
    const { container } = render(
      <Space split="|">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Space>,
    );

    expect(container.querySelectorAll('.sqi-space-item-split')).toHaveLength(2);
    expect(container.querySelectorAll('.sqi-space-item-split')[0]).toHaveTextContent('|');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('applies correct spacing for different size values', () => {
    const { container: smContainer } = render(
      <Space size="sm">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    const { container: mdContainer } = render(
      <Space size="md">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    const { container: lgContainer } = render(
      <Space size="lg">
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    // Check that container has correct gap styles
    expect(smContainer.firstChild).toHaveStyle('column-gap: 8px');
    expect(mdContainer.firstChild).toHaveStyle('column-gap: 16px');
    expect(lgContainer.firstChild).toHaveStyle('column-gap: 24px');

    expect(smContainer.firstChild).toMatchSnapshot();
    expect(mdContainer.firstChild).toMatchSnapshot();
    expect(lgContainer.firstChild).toMatchSnapshot();
  });

  it('handles numeric size values', () => {
    const { container } = render(
      <Space size={30}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toHaveStyle('column-gap: 30px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('handles array size values for horizontal and vertical spacing', () => {
    const { container } = render(
      <Space size={[10, 20]} wrap>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    expect(container.firstChild).toHaveStyle('column-gap: 10px');
    expect(container.firstChild).toHaveStyle('row-gap: 20px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('does not apply margin to last item', () => {
    const { container } = render(
      <Space>
        <div>Item 1</div>
        <div>Item 2</div>
      </Space>,
    );

    // With gap, items don't have individual margins
    const items = container.querySelectorAll('.space-item');
    expect(items[0]).not.toHaveStyle('margin-right: 16px');
    expect(container.firstChild).toMatchSnapshot();
  });
});
