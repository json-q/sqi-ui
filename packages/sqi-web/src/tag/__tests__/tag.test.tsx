import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from '../Tag';
import { ConfigProvider } from '../../config-provider';
import { describe, expect, it, vi } from 'vitest';

describe('Tag', () => {
  it('should render correctly', () => {
    const { container } = render(<Tag>Tag Text</Tag>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    render(<Tag>Tag Content</Tag>);

    expect(screen.getByText('Tag Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Tag className="custom-class">Tag</Tag>);

    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply custom style', () => {
    const { container } = render(<Tag style={{ color: 'red' }}>Tag</Tag>);

    expect((container.firstChild as HTMLSpanElement).getAttribute('style')).toContain('color: red');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with different sizes', () => {
    const { container: mdContainer } = render(<Tag size="md">Tag</Tag>);
    const { container: lgContainer } = render(<Tag size="lg">Tag</Tag>);

    expect(mdContainer.firstChild).toHaveClass('sqi-tag-size-md');
    expect(lgContainer.firstChild).toHaveClass('sqi-tag-size-lg');
    expect(mdContainer.firstChild).toMatchSnapshot();
    expect(lgContainer.firstChild).toMatchSnapshot();
  });

  it('should render with title', () => {
    const { container } = render(<Tag title="Tag Title">Tag</Tag>);
    expect(container.firstChild).toHaveAttribute('title', 'Tag Title');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with border', () => {
    const { container } = render(<Tag bordered>Tag</Tag>);
    expect(container.firstChild).toHaveClass('sqi-tag-bordered');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with icon', () => {
    const { container } = render(<Tag icon={<span data-testid="tag-icon">icon</span>}>Tag</Tag>);

    expect(screen.getByTestId('tag-icon')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with color', () => {
    const { container } = render(<Tag color="red">Tag</Tag>);

    expect(container.firstChild).toHaveClass('sqi-tag-has-color');
    expect((container.firstChild as HTMLSpanElement).getAttribute('style')).toContain('color: red');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    const { container } = render(<Tag onClick={handleClick}>Tag</Tag>);

    fireEvent.click(container.firstChild as ChildNode);

    expect(handleClick).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not be closable by default', () => {
    const { container } = render(<Tag>Tag</Tag>);

    expect(container.querySelector('.sqi-tag-close-icon')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render close icon when closable is true', () => {
    const { container } = render(<Tag closable>Tag</Tag>);

    expect(container.querySelector('.sqi-tag-close-icon')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render custom close icon', () => {
    const { container } = render(<Tag closable={<span data-testid="custom-close">x</span>}>Tag</Tag>);

    expect(container.querySelector('.sqi-tag-close-icon')).toBeInTheDocument();
    expect(screen.getByTestId('custom-close')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle close event', () => {
    const handleClose = vi.fn();
    const { container } = render(
      <Tag closable onClose={handleClose}>
        Tag
      </Tag>,
    );

    const closeIcon = container.querySelector('.sqi-tag-close-icon');
    fireEvent.click(closeIcon!);
    expect(handleClose).toBeCalledTimes(1);
  });

  it('should hide after close', () => {
    const { container } = render(<Tag closable>Tag</Tag>);
    const closeIcon = container.querySelector('.sqi-tag-close-icon');
    fireEvent.click(closeIcon!);

    expect(container.firstChild).toBeNull();
  });

  it('should not hide if close event is prevented', () => {
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
    };
    const { container } = render(
      <Tag closable onClose={handleClose}>
        Tag
      </Tag>,
    );
    const closeIcon = container.querySelector('.sqi-tag-close-icon');

    fireEvent.click(closeIcon!);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should get size from context', () => {
    const { container } = render(
      <ConfigProvider componentConfig={{ Tag: { size: 'lg' } }}>
        <Tag>Tag</Tag>
      </ConfigProvider>,
    );

    expect(container.firstChild).toHaveClass('sqi-tag-size-lg');
    expect(container.firstChild).toMatchSnapshot();
  });
});
