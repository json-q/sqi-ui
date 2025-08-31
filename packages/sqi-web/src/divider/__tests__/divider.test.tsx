import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Divider from '../Divider';

describe('Divider', () => {
  it('should render correctly with default props', () => {
    const { container } = render(<Divider />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sqi-divider');
    expect(container.firstChild).toHaveClass('sqi-divider-horizontal');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render vertical divider', () => {
    const { container } = render(<Divider direction="vertical" />);

    expect(container.firstChild).toHaveClass('sqi-divider-vertical');
    expect(container.firstChild).not.toHaveClass('sqi-divider-horizontal');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render dashed divider', () => {
    const { container } = render(<Divider dashed />);

    expect(container.firstChild).toHaveClass('sqi-divider-dashed');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with text content', () => {
    const { container, getByText } = render(<Divider>Text Content</Divider>);

    expect(container.firstChild).toHaveClass('sqi-divider-with-text');
    expect(container.firstChild).toHaveClass('sqi-divider-with-text-center');
    expect(getByText('Text Content')).toBeInTheDocument();
    expect(getByText('Text Content')).toHaveClass('sqi-divider-inner-text');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with text prop', () => {
    const { container, getByText } = render(<Divider text="Text Prop" />);

    expect(container.firstChild).toHaveClass('sqi-divider-with-text');
    expect(getByText('Text Prop')).toBeInTheDocument();
    expect(getByText('Text Prop')).toHaveClass('sqi-divider-inner-text');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should prioritize children over text prop', () => {
    const { container, getByText } = render(<Divider text="Text Prop">Children Text</Divider>);
    expect(getByText('Children Text')).toBeInTheDocument();
    expect(container.querySelector('.sqi-divider-inner-text')?.textContent).toBe('Children Text');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support text alignment', () => {
    // Left alignment
    const { container: leftContainer, rerender } = render(<Divider align="left">Left Text</Divider>);
    expect(leftContainer.firstChild).toHaveClass('sqi-divider-with-text-left');

    // Right alignment
    rerender(<Divider align="right">Right Text</Divider>);
    expect(leftContainer.firstChild).toHaveClass('sqi-divider-with-text-right');

    // Center alignment (default)
    const { container: rightContainer } = render(<Divider align="center">Center Text</Divider>);
    expect(rightContainer.firstChild).toHaveClass('sqi-divider-with-text-center');

    expect(leftContainer.firstChild).toMatchSnapshot();
    expect(rightContainer.firstChild).toMatchSnapshot();
  });

  it('should not render text for vertical divider', () => {
    const { container, queryByText } = render(<Divider direction="vertical">Vertical Text</Divider>);

    expect(container.firstChild).not.toHaveClass('sqi-divider-with-text');
    expect(queryByText('Vertical Text')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support custom className and style', () => {
    const { container } = render(<Divider className="custom-class" style={{ color: 'red' }} />);

    expect(container.firstChild).toHaveClass('custom-class');
    expect((container.firstChild as HTMLDivElement).getAttribute('style')).toContain('red');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should combine className correctly', () => {
    const { container } = render(<Divider className="custom-class" />);

    expect(container.firstChild).toHaveClass('sqi-divider');
    expect(container.firstChild).toHaveClass('sqi-divider-horizontal');
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toMatchSnapshot();
  });
});
