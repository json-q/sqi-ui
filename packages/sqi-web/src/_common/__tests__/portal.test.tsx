import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portal from '../Portal';

describe('Portal', () => {
  it('should not render content when open is false', () => {
    const { container } = render(
      <Portal open={false}>
        <div>no render</div>
      </Portal>,
    );
    expect(container.firstChild).not.toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });

  it('default render content to body', () => {
    render(
      <Portal open>
        <div>Portal in body</div>
      </Portal>,
    );

    const portalNode = document.querySelector('[data-portal=true]');

    expect(portalNode!.parentNode).toBe(document.body);
    expect(portalNode).toMatchSnapshot();
  });

  it('render content with custom container', () => {
    const customContainer = document.createElement('button');
    document.body.appendChild(customContainer);

    render(
      <Portal open getContainer={() => customContainer}>
        <p>Custom Render Content</p>
      </Portal>,
    );

    const portalNode = document.querySelector('[data-portal=true]');

    expect(portalNode!.parentNode).toBe(customContainer);
    expect(customContainer).toMatchSnapshot();
  });

  it('should apply rootStyle and prefixCls to portal', () => {
    render(
      <Portal open prefixCls="test" rootStyle={{ color: 'red' }}>
        <div>test rootStyle</div>
      </Portal>,
    );

    const portalNode = document.querySelector('[data-portal=true]');

    expect(portalNode).toHaveClass('test-portal-wrapper');
    expect(portalNode!.getAttribute('style')).toContain('color: red');
    // color red 会被标准化为 rgb(255, 0, 0) 无法使用 toHaveStyle 断言
    // expect(portalNode).toHaveStyle('color: red;');
    expect(portalNode).toMatchSnapshot();
  });

  it('should clean portal when unmount', () => {
    const { unmount } = render(
      <Portal open>
        <div>test unmount</div>
      </Portal>,
    );

    expect(document.querySelector('[data-portal=true]')).toBeInTheDocument();
    unmount();
    expect(document.querySelector('[data-portal=true]')).toBeNull();
  });

  it('should switch portal when open change', async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = React.useState(true);

      return (
        <div>
          <button type="button" id="btn" onClick={() => setIsOpen(!isOpen)}>
            Toggle Portal
          </button>
          <Portal open={isOpen}>
            <div>Portal Content</div>
          </Portal>
        </div>
      );
    };

    render(<TestComponent />);
    const btn = document.querySelector('#btn');

    expect(document.querySelector('[data-portal=true]')).toBeInTheDocument();

    // destroy
    fireEvent.click(btn!);
    await waitFor(() => {
      expect(document.querySelector('[data-portal=true]')).not.toBeInTheDocument();
    });
    // mount
    fireEvent.click(btn!);
    await waitFor(() => {
      expect(document.querySelector('[data-portal=true]')).toBeInTheDocument();
    });
  });
});
