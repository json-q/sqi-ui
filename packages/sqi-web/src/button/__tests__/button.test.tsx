import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '..';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Follow</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should trigger click event when provided', () => {
    const fn = vi.fn();

    const { container } = render(<Button onClick={fn}>Follow</Button>);

    fireEvent.click(container.firstChild!);
    expect(fn).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not trigger click event when disabled', () => {
    const fn = vi.fn();

    const { container } = render(
      <Button disabled onClick={fn}>
        Click me
      </Button>,
    );

    fireEvent.click(container.firstChild!);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not trigger click event when loading', () => {
    const fn = vi.fn();

    const { container } = render(
      <Button loading onClick={fn}>
        Click me
      </Button>,
    );

    fireEvent.click(container.firstChild!);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render icon only when not loading', () => {
    const { container } = render(<Button icon={<div id="test-icon">loading</div>}>Click me</Button>);
    const { container: loadingContainer } = render(
      <Button loading icon={<div id="test-loading-icon">loading</div>}>
        Click me
      </Button>,
    );

    expect(container.querySelector('#test-icon')).toBeTruthy();
    expect(loadingContainer.querySelector('#test-loading-icon')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
    expect(loadingContainer.firstChild).toMatchSnapshot();
  });

  it('should render custom loading icon when provided', () => {
    const { container } = render(
      <Button loading loadingIcon={<div id="loading-icon">loading</div>}>
        Click me
      </Button>,
    );

    expect(container.querySelector('#loading-icon')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render anchor element when href is provided', () => {
    const { container } = render(
      <Button href="https://example.com" target="_blank">
        Link
      </Button>,
    );

    expect(container.firstChild).toHaveAttribute('href', 'https://example.com');
    expect(container.firstChild).toHaveAttribute('target', '_blank');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply anchorProps to anchor element', () => {
    const { container } = render(
      <Button href="https://example.com" anchorProps={{ className: 'custom-class', 'data-testid': 'custom-anchor' }}>
        Link
      </Button>,
    );

    expect(container.firstChild).toHaveAttribute('data-testid', 'custom-anchor');
    expect(container.firstChild).toHaveClass('custom-class', 'sqi-btn');
    expect(container.firstChild).toMatchSnapshot();
  });
});
