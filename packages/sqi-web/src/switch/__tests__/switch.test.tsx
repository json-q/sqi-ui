import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Switch from '../Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    const { container } = render(<Switch />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with defaultChecked', () => {
    const { container } = render(<Switch defaultChecked />);

    expect(container.firstChild).toHaveClass('sqi-switch-checked');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with custom labels', () => {
    const { container } = render(<Switch label={['ON', 'OFF']} defaultChecked />);

    expect(container.firstChild).toHaveTextContent('ON');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should trigger change event when clicked', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch onChange={handleChange} />);

    fireEvent.click(container.firstChild!);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    expect(container.firstChild).toHaveClass('sqi-switch-checked');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not trigger change event when disabled', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch disabled onChange={handleChange} />);

    fireEvent.click(container.firstChild!);
    expect(handleChange).not.toHaveBeenCalled();
    expect(container.firstChild).toHaveClass('sqi-switch-disabled');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not trigger change event when loading', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch loading onChange={handleChange} />);

    fireEvent.click(container.firstChild!);
    expect(handleChange).not.toHaveBeenCalled();
    expect(container.firstChild).toHaveClass('sqi-switch-loading');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should toggle between checked and unchecked states', () => {
    const handleChange = vi.fn();
    const { container } = render(<Switch onChange={handleChange} />);

    // First click - should be checked
    fireEvent.click(container.firstChild!);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    expect(container.firstChild).toMatchSnapshot();

    // Second click - should be unchecked
    fireEvent.click(container.firstChild!);
    expect(handleChange).toHaveBeenCalledWith(false, expect.any(Object));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render custom loading icon when provided', () => {
    const { container } = render(<Switch loading loadingIcon={<div data-testid="custom-loading">loading</div>} />);

    expect(container.querySelector('[data-testid="custom-loading"]')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply different sizes', () => {
    const { container: smContainer } = render(<Switch size="sm" />);
    const { container: mdContainer } = render(<Switch size="md" />);
    const { container: lgContainer } = render(<Switch size="lg" />);

    expect(smContainer.firstChild).toHaveClass('sqi-switch-sm');
    expect(smContainer.firstChild).toMatchSnapshot();

    expect(mdContainer.firstChild).toHaveClass('sqi-switch-md');
    expect(mdContainer.firstChild).toMatchSnapshot();

    expect(lgContainer.firstChild).toHaveClass('sqi-switch-lg');
    expect(lgContainer.firstChild).toMatchSnapshot();
  });

  it('should handle controlled component', () => {
    const handleChange = vi.fn();
    const { container, rerender } = render(<Switch checked={false} onChange={handleChange} />);

    expect(container.firstChild).not.toHaveClass('sqi-switch-checked');
    expect(container.firstChild).toMatchSnapshot();

    // Click should call onChange but not change state by itself
    fireEvent.click(container.firstChild!);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    expect(container.firstChild).toMatchSnapshot();

    // Only when the checked prop changes, the component updates
    rerender(<Switch checked={true} onChange={handleChange} />);
    expect(container.firstChild).toHaveClass('sqi-switch-checked');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with custom className', () => {
    const { container } = render(<Switch className="custom-class" />);

    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render unchecked label when switch is not checked', () => {
    const { container } = render(<Switch label={['ON', 'OFF']} defaultChecked={false} />);

    expect(container.firstChild).toHaveTextContent('OFF');
    expect(container.firstChild).toMatchSnapshot();
  });
});
