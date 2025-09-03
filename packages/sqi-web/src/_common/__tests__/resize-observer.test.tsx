import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import * as React from 'react';
import ResizeObserverRect from '../ResizeObserverRect';

describe('ResizeObserverRect', () => {
  it('should render single child element correctly', () => {
    const { container } = render(
      <ResizeObserverRect>
        <div data-testid="child-element">Content</div>
      </ResizeObserverRect>,
    );

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should console error with text node children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);

    const { container } = render(
      // @ts-expect-error
      <ResizeObserverRect>Test</ResizeObserverRect>,
    );

    expect(container.firstChild).instanceOf(Text);
    expect(errorSpy).toBeCalledWith(expect.stringContaining('The `children` of ResizeObserverRect is invalid'));
  });

  it('should console error with multiple children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);

    render(
      // @ts-expect-error
      <ResizeObserverRect>
        <div>1</div>
        <div>2</div>
      </ResizeObserverRect>,
    );

    expect(errorSpy).toBeCalledWith(
      expect.stringContaining('Find more than one child node with `children` in ResizeObserverRect'),
    );
  });

  it('should console error with empty children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);
    render(<ResizeObserverRect></ResizeObserverRect>);

    expect(errorSpy).toBeCalledWith(expect.stringContaining('`children` of ResizeObserverRect is empty'));
  });
});
