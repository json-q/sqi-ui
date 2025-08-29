import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
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

  // it('should call useResizeObserver with correct parameters', async () => {
  //   const mockOnResize = vi.fn();

  //   const { container } = render(
  //     <ResizeObserverComponent onResize={mockOnResize}>
  //       <textarea data-testid="test-element" />
  //     </ResizeObserverComponent>,
  //   );

  //   expect(container.firstChild).toBeInTheDocument();

  //   expect(mockOnResize).toBeCalled();

  //   // // 获取调用参数
  //   // const argus = mockOnResize.mock.calls[0];

  //   // // 验证参数
  //   // expect(argus[0]).toBeDefined(); // sizeInfo
  //   // expect(argus[1]).toBeInstanceOf(ResizeObserverEntry); // target
  // });

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

  // it('should not observe when disabled', () => {
  //   render(
  //     <ResizeObserverComponent disabled>
  //       <div>Test</div>
  //     </ResizeObserverComponent>,
  //   );

  //   // 验证 useResizeObserver 被调用且 enabled 参数为 false
  //   const callArgs = mockUseResizeObserver.mock.calls[0];
  //   expect(callArgs[2]).toBe(false);
  // });

  // it('should handle ref forwarding correctly', () => {
  //   const ref = React.createRef();

  //   render(
  //     <ResizeObserverComponent ref={ref}>
  //       <div>Test</div>
  //     </ResizeObserverComponent>,
  //   );

  //   // 验证 ref 被设置
  //   expect(ref.current).toBeDefined();
  // });

  // it('should log error for invalid children in development', () => {
  //   // 模拟 console.error
  //   const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  //   // 设置 NODE_ENV 为 development
  //   const originalEnv = process.env.NODE_ENV;
  //   process.env.NODE_ENV = 'development';

  //   // 渲染无效子元素
  //   render(<ResizeObserverComponent>Invalid Child</ResizeObserverComponent>);

  //   // 验证错误被记录
  //   expect(consoleError).toHaveBeenCalled();

  //   // 恢复环境变量
  //   process.env.NODE_ENV = originalEnv;
  //   consoleError.mockRestore();
  // });

  // it('should log error for multiple children in development', () => {
  //   // 模拟 console.error
  //   const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  //   // 设置 NODE_ENV 为 development
  //   const originalEnv = process.env.NODE_ENV;
  //   process.env.NODE_ENV = 'development';

  //   // 模拟 toArray 返回多个元素
  //   vi.mocked(require('../_util/toArray').toArray).mockReturnValue([<div key="1">1</div>, <div key="2">2</div>]);

  //   // 渲染多个子元素
  //   render(
  //     <ResizeObserverComponent>
  //       <div>First</div>
  //       <div>Second</div>
  //     </ResizeObserverComponent>,
  //   );

  //   // 验证错误被记录
  //   expect(consoleError).toHaveBeenCalled();

  //   // 恢复环境变量
  //   process.env.NODE_ENV = originalEnv;
  //   consoleError.mockRestore();
  // });

  // it('should handle resize events correctly', () => {
  //   const mockResizeCallback = vi.fn();

  //   render(
  //     <ResizeObserverComponent onResize={mockResizeCallback}>
  //       <div>Test</div>
  //     </ResizeObserverComponent>,
  //   );

  //   // 获取传递给 useResizeObserver 的回调
  //   const callArgs = mockUseResizeObserver.mock.calls[0];
  //   const resizeCallback = callArgs[1];

  //   // 模拟调用 resize 回调
  //   const mockSizeInfo = { width: 100, height: 200 };
  //   const mockTarget = document.createElement('div');

  //   act(() => {
  //     resizeCallback(mockSizeInfo, mockTarget);
  //   });

  //   // 验证 onResize 被调用
  //   expect(mockResizeCallback).toHaveBeenCalledWith(mockSizeInfo, mockTarget);
  // });
});
