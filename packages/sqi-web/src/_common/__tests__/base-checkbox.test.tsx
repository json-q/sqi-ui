import * as React from 'react';

import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import BaseCheckbox from '../BaseCheckbox';

describe('BaseCheckbox', () => {
  it('should render correct className', () => {
    const { container: prefixContainer } = render(<BaseCheckbox type="checkbox" prefixCls="test" checked />);

    const { container: defaultCheckContainer } = render(
      <BaseCheckbox type="checkbox" prefixCls="test" defaultChecked />,
    );

    expect(prefixContainer.firstChild).toHaveClass('test-checked');
    expect(defaultCheckContainer.firstChild).toHaveClass('test-checked');

    expect(prefixContainer.firstChild).toMatchSnapshot();
    expect(defaultCheckContainer.firstChild).toMatchSnapshot();
  });

  it('should be callback when pass _getCheckedValue and click it', async () => {
    const getCheckedValue = vi.fn();

    const { container } = render(<BaseCheckbox type="checkbox" _getCheckedValue={getCheckedValue} />);

    // must click input element to change check
    const input = container.querySelector('input');
    fireEvent.click(input!);

    expect(getCheckedValue).toHaveBeenCalledWith(true);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not be trigger callback when pass disabled and click it', () => {
    const fn = vi.fn();

    const { container } = render(<BaseCheckbox type="checkbox" disabled onChange={fn} />);

    const input = container.querySelector('input');
    fireEvent.click(input!);

    expect(fn).not.toHaveBeenCalled();
  });

  it('should control checked when pass checked and click it', () => {
    const { container } = render(<BaseCheckbox type="checkbox" prefixCls="test" checked />);

    const input = container.querySelector('input');
    fireEvent.click(input!);
    expect(input).toHaveAttribute('checked');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onChange with correct parameters when clicked', async () => {
    const fn = vi.fn();

    const { container } = render(<BaseCheckbox type="checkbox" onChange={fn} data-testid="test-checkbox" />);

    const checkbox = container.querySelector('input') as HTMLInputElement;

    // 模拟点击复选框
    fireEvent.click(checkbox);

    expect(fn).toHaveBeenCalled();

    expect(fn).toHaveBeenCalledWith({
      target: expect.objectContaining({
        checked: true,
        type: 'checkbox',
      }),
      event: expect.any(Object), // check event
    });

    const { target, event } = fn.mock.calls[0][0];

    expect(target).toHaveProperty('checked', true);
    expect(target).toHaveProperty('type', 'checkbox');
    // expect(event).toBeInstanceOf(Event); // React 合成事件不能 instanceof Event
    expect(event).toBeDefined();
    expect(event).toHaveProperty('target');
    expect(typeof event).toBe('object');
  });
});
