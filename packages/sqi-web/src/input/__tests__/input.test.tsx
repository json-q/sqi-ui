import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  it('should render correctly with default props', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sqi-input');
    expect(container.firstChild).toHaveClass('sqi-input-size-md');
    expect(container.firstChild).toHaveClass('sqi-input-variant-outline');
    expect(container.firstChild).toHaveClass('sqi-input-align-left');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support different sizes', () => {
    const { container, rerender } = render(<Input size="sm" />);
    expect(container.firstChild).toHaveClass('sqi-input-size-sm');

    rerender(<Input size="lg" />);
    expect(container.firstChild).toHaveClass('sqi-input-size-lg');
  });

  it('should support different variants', () => {
    const { container, rerender } = render(<Input variant="borderless" />);
    expect(container.firstChild).toHaveClass('sqi-input-variant-borderless');

    rerender(<Input variant="underline" />);
    expect(container.firstChild).toHaveClass('sqi-input-variant-underline');
  });

  it('should support different alignments', () => {
    const { container, rerender } = render(<Input align="center" />);
    expect(container.firstChild).toHaveClass('sqi-input-align-center');

    rerender(<Input align="right" />);
    expect(container.firstChild).toHaveClass('sqi-input-align-right');
  });

  it('should support status', () => {
    const { container } = render(<Input status="error" />);
    expect(container.firstChild).toHaveClass('sqi-input-status-error');
  });

  it('should support placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should support defaultValue', () => {
    const { getByDisplayValue } = render(<Input defaultValue="Default value" />);
    expect(getByDisplayValue('Default value')).toBeInTheDocument();
  });

  it('should support value (controlled mode)', () => {
    const { getByDisplayValue } = render(<Input value="Controlled value" />);
    expect(getByDisplayValue('Controlled value')).toBeInTheDocument();
  });

  it('should trigger onChange when input value changes', () => {
    const onChange = vi.fn();
    const { container } = render(<Input onChange={onChange} />);

    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'new value' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('new value', expect.any(Object));
  });

  it('should support disabled state', () => {
    const { container } = render(<Input disabled />);

    const input = container.querySelector('input');
    expect(input).toBeDisabled();
  });

  it('should support readOnly state', () => {
    const { container } = render(<Input readOnly />);

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('readonly');
  });

  it('should support allowClear', () => {
    const onChange = vi.fn();
    const { container } = render(<Input allowClear defaultValue="Clearable value" onChange={onChange} />);

    const clearButton = container.querySelector('button');
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton!);
    expect(onChange).toHaveBeenCalledWith('', expect.any(Object));

    const input = container.querySelector('input');
    expect(input).toHaveValue('');
  });

  it('should not show clear button when disabled', () => {
    const { container } = render(<Input allowClear defaultValue="Clearable value" disabled />);

    const clearButton = container.querySelector('button');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should not show clear button when no value', () => {
    const { container } = render(<Input allowClear />);

    const clearButton = container.querySelector('button');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should support prefix and suffix', () => {
    const { container } = render(<Input prefix="$" suffix=".00" />);

    expect(container.querySelector('.sqi-input-prefix')).toBeInTheDocument();
    expect(container.querySelector('.sqi-input-suffix')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support addonBefore and addonAfter', () => {
    const { container } = render(<Input addonBefore="http://" addonAfter=".com" />);

    expect(container.querySelector('.sqi-input-group-addon')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should support password type with visibility toggle', () => {
    const { container } = render(<Input type="password" />);

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'password');

    // 密码可见性切换是一个具有 role="button" 的 span 元素，而不是 button 元素
    const toggleButton = container.querySelector('[role="button"]');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton!);
    expect(input).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton!);
    expect(input).toHaveAttribute('type', 'password');

    expect(container).toMatchSnapshot();
  });

  it('should support custom visibilityToggle', () => {
    const onVisibleChange = vi.fn();
    const { rerender, container } = render(
      <Input type="password" visibilityToggle={{ visible: false, onVisibleChange }} />,
    );

    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'password');

    const toggleButton = container.querySelector('[role="button"]');
    fireEvent.click(toggleButton!);
    expect(onVisibleChange).toHaveBeenCalledWith(true);

    rerender(<Input type="password" visibilityToggle={{ visible: true, onVisibleChange }} />);

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should support maxLength', () => {
    const { container } = render(<Input maxLength={5} defaultValue="123456" />);

    const input = container.querySelector('input');
    expect(input).toHaveValue('12345');
  });

  it('should support maxLength object config', () => {
    const { container } = render(
      <Input maxLength={{ length: 5, showLimit: true, errorOnly: true }} defaultValue="123456" />,
    );

    expect(container.querySelector('.sqi-input-limit-length-text')).toBeInTheDocument();
    // 检查包含错误类的元素，应该是整个 input wrapper
    expect(container.firstChild).toHaveClass('sqi-input-limit-length-error');
    expect(container).toMatchSnapshot();
  });

  it('should support tips', () => {
    const { container } = render(<Input tips="This is a tip" />);

    expect(container.querySelector('.sqi-input-tips')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should support tips with status', () => {
    const { container } = render(<Input tips="Error message" status="error" />);

    expect(container.querySelector('.sqi-input-tips')).toBeInTheDocument();
    expect(container.querySelector('.sqi-input-tips')).toHaveClass('sqi-input-tips-status-error');
  });

  it('should handle focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const { container } = render(<Input onFocus={onFocus} onBlur={onBlur} />);

    const input = container.querySelector('input');
    fireEvent.focus(input!);
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(container.querySelector('[role="group"]')).toHaveClass('sqi-input-focus');

    fireEvent.blur(input!);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(container.querySelector('[role="group"]')).not.toHaveClass('sqi-input-focus');
  });

  it('should support ref methods', () => {
    const ref = React.createRef<any>();
    render(<Input ref={ref} />);

    expect(ref.current).toBeDefined();
    expect(ref.current.focus).toBeInstanceOf(Function);
    expect(ref.current.blur).toBeInstanceOf(Function);
    expect(ref.current.select).toBeInstanceOf(Function);
    expect(ref.current.currentElement).toBeInstanceOf(HTMLDivElement);
    expect(ref.current.inputElement).toBeInstanceOf(HTMLInputElement);
  });
});
