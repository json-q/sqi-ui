import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Checkbox>Checkbox</Checkbox>);
    expect(container.firstChild).toBeInTheDocument();
    expect(getByText('Checkbox')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support defaultChecked', () => {
    const { container } = render(<Checkbox defaultChecked>Checkbox</Checkbox>);
    expect(container.querySelector('input')).toBeChecked();
  });

  it('should support checked', () => {
    const { container } = render(<Checkbox checked>Checkbox</Checkbox>);
    expect(container.querySelector('input')).toBeChecked();
  });

  it('should trigger onChange when clicked', () => {
    const onChange = vi.fn();
    const { getByRole } = render(<Checkbox onChange={onChange}>Checkbox</Checkbox>);

    const input = getByRole('checkbox');
    fireEvent.click(input);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true,
        }),
      }),
    );
  });

  it('should support disabled state', () => {
    const onChange = vi.fn();
    const { getByRole } = render(
      <Checkbox disabled onChange={onChange}>
        Checkbox
      </Checkbox>,
    );

    const input = getByRole('checkbox');
    expect(input).toBeDisabled();

    fireEvent.click(input);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should support indeterminate state', () => {
    const { container } = render(<Checkbox indeterminate>Checkbox</Checkbox>);
    expect(container.firstChild?.firstChild).toHaveClass('sqi-checkbox-indeterminate');
  });

  it('should work with CheckboxGroup', () => {
    const onChange = vi.fn();
    const { container, getByText } = render(
      <CheckboxGroup onChange={onChange} defaultValue={['1']}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    expect(container.querySelectorAll('input')[0]).toBeChecked();
    expect(container.querySelectorAll('input')[1]).not.toBeChecked();

    // Click second checkbox
    fireEvent.click(getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
  });

  it('should respect Checkbox disabled over CheckboxGroup disabled', () => {
    const { container } = render(
      <CheckboxGroup disabled>
        <Checkbox disabled={false} value="1">
          Option 1
        </Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).not.toBeDisabled(); // Explicitly enabled
    expect(inputs[1]).toBeDisabled(); // Inherited from group
  });

  it('should support custom className and style', () => {
    const { container } = render(
      <Checkbox className="custom-class" style={{ color: 'red' }}>
        Checkbox
      </Checkbox>,
    );

    expect(container.firstChild).toHaveClass('custom-class');
    // expect(container.firstChild).toHaveStyle('color: red');
    expect((container.firstChild?.firstChild as HTMLInputElement)?.getAttribute('style')).toContain('color: red');
  });
});
