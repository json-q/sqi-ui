import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ConfigProvider from '../ConfigProvider';
import { ConfigContext } from '../context';

// 创建一个测试组件来验证 ConfigProvider 的值
const TestComponent = () => {
  const context = React.useContext(ConfigContext);

  return (
    <div>
      <span data-testid="prefixCls">{context.prefixCls}</span>
      <span data-testid="iconPrefix">{context.iconPrefix}</span>
      <span data-testid="size">{context.size}</span>
    </div>
  );
};

describe('ConfigProvider', () => {
  it('should render children correctly', () => {
    const { container } = render(
      <ConfigProvider>
        <div>Test Child</div>
      </ConfigProvider>,
    );

    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('Test Child');
  });

  it('should provide default values', () => {
    const { getByTestId } = render(
      <ConfigProvider>
        <TestComponent />
      </ConfigProvider>,
    );

    expect(getByTestId('prefixCls').textContent).toBe('sqi');
    expect(getByTestId('iconPrefix').textContent).toBe('sqi');
  });

  it('should allow customization of prefixCls', () => {
    const { getByTestId } = render(
      <ConfigProvider prefixCls="my-prefix">
        <TestComponent />
      </ConfigProvider>,
    );

    expect(getByTestId('prefixCls').textContent).toBe('my-prefix');
    expect(getByTestId('iconPrefix').textContent).toBe('sqi'); // iconPrefix 应该保持默认值
  });

  it('should allow customization of iconPrefix', () => {
    const { getByTestId } = render(
      <ConfigProvider iconPrefix="my-icon">
        <TestComponent />
      </ConfigProvider>,
    );

    expect(getByTestId('iconPrefix').textContent).toBe('my-icon');
    expect(getByTestId('prefixCls').textContent).toBe('sqi'); // prefixCls 应该保持默认值
  });

  it('should allow customization of both prefixCls and iconPrefix', () => {
    const { getByTestId } = render(
      <ConfigProvider prefixCls="my-prefix" iconPrefix="my-icon">
        <TestComponent />
      </ConfigProvider>,
    );

    expect(getByTestId('prefixCls').textContent).toBe('my-prefix');
    expect(getByTestId('iconPrefix').textContent).toBe('my-icon');
  });

  it('should allow customization of size', () => {
    const { getByTestId } = render(
      <ConfigProvider size="lg">
        <TestComponent />
      </ConfigProvider>,
    );

    expect(getByTestId('size').textContent).toBe('lg');
  });

  it('should support componentConfig', () => {
    const componentConfig = {
      Alert: { type: 'success' as const },
      Button: { type: 'primary' as const },
    };

    const ComponentWithConfig = () => {
      const context = React.useContext(ConfigContext);
      return (
        <div>
          <span data-testid="alertType">{context.componentConfig?.Alert?.type}</span>
          <span data-testid="buttonType">{context.componentConfig?.Button?.type}</span>
        </div>
      );
    };

    const { getByTestId } = render(
      <ConfigProvider componentConfig={componentConfig}>
        <ComponentWithConfig />
      </ConfigProvider>,
    );

    expect(getByTestId('alertType').textContent).toBe('success');
    expect(getByTestId('buttonType').textContent).toBe('primary');
  });

  it('should work with nested ConfigProviders', () => {
    const { getByTestId } = render(
      <ConfigProvider prefixCls="outer">
        <ConfigProvider prefixCls="inner">
          <TestComponent />
        </ConfigProvider>
      </ConfigProvider>,
    );

    expect(getByTestId('prefixCls').textContent).toBe('inner');
  });
});
