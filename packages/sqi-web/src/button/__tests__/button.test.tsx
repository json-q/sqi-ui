import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '..';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Follow</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should trigger click event when provide onClick', () => {
    const fn = vi.fn();
    const { container } = render(<Button onClick={fn}>Follow</Button>);
    fireEvent.click(container.firstChild!);
    expect(fn).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not trigger click event when disabled or loading', () => {
    const fn = vi.fn();

    // disabled
    const { container: disabledContainer } = render(
      <Button disabled onClick={fn}>
        Click me
      </Button>,
    );
    fireEvent.click(disabledContainer.firstChild!);
    expect(fn).not.toHaveBeenCalled();

    // loading
    const { container: loadingContainer } = render(
      <Button loading onClick={fn}>
        Click me
      </Button>,
    );
    fireEvent.click(loadingContainer.firstChild!);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render icon only when icon and loading is false', () => {
    const { container } = render(<Button icon={<div id="test-icon">loading</div>}>Click me</Button>);
    const { container: loadingContainer } = render(
      <Button loading icon={<div id="test-loading-icon">loading</div>}>
        Click me
      </Button>,
    );

    expect(container.querySelector('#test-icon')).toBeTruthy();
    expect(loadingContainer.querySelector('#test-loading-icon')).toBeFalsy();
    expect(container).toMatchSnapshot();
    expect(loadingContainer).toMatchSnapshot();
  });

  it('should render loading icon when loadingIcon is provided and loading is true', () => {
    const { container } = render(
      <Button loading loadingIcon={<div id="loading-icon">loading</div>}>
        Click me
      </Button>,
    );

    expect(container.querySelector('#loading-icon')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('renders a anchor when href is provided', () => {
    const { container } = render(
      <Button href="https://example.com" target="_blank">
        Link
      </Button>,
    );

    expect(container.firstChild).toHaveAttribute('href', 'https://example.com');
    expect(container.firstChild).toHaveAttribute('target', '_blank');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('support anchorProps when href is provided', () => {
    const { container } = render(
      <Button href="https://example.com" anchorProps={{ className: 'custom-class', 'data-testid': 'custom-anchor' }}>
        Link
      </Button>,
    );

    const anchor = container.firstChild;
    expect(anchor).toHaveAttribute('data-testid', 'custom-anchor');
    expect(anchor).toHaveClass('custom-class', 'sqi-btn');

    expect(container).toMatchSnapshot();
  });
});
