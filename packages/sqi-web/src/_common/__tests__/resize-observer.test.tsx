import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import * as React from 'react';
import ResizeObserverComponent from '../ResizeObserver';

describe('ResizeObserverComponent', () => {
  it('should render single child element correctly', () => {
    const { container } = render(
      <ResizeObserverComponent>
        <div data-testid="child-element">Content</div>
      </ResizeObserverComponent>,
    );

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should console error with text node children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);

    const { container } = render(
      // @ts-expect-error
      <ResizeObserverComponent>Test</ResizeObserverComponent>,
    );

    expect(container.firstChild).instanceOf(Text);
    expect(errorSpy).toBeCalledWith(expect.stringContaining('The `children` of ResizeObserverComponent is invalid'));
  });

  it('should console error with multiple children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);

    render(
      // @ts-expect-error
      <ResizeObserverComponent>
        <div>1</div>
        <div>2</div>
      </ResizeObserverComponent>,
    );

    expect(errorSpy).toBeCalledWith(
      expect.stringContaining('Find more than one child node with `children` in ResizeObserverComponent'),
    );
  });

  it('should console error with empty children', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => null);
    render(<ResizeObserverComponent></ResizeObserverComponent>);

    expect(errorSpy).toBeCalledWith(expect.stringContaining('`children` of ResizeObserverComponent is empty'));
  });
});
