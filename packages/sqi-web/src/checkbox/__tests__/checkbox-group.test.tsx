import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup from '../CheckboxGroup';
import Checkbox from '../Checkbox';

describe('CheckboxGroup Component', () => {
  it('should render correctly with children', () => {
    const { container, getByText } = render(
      <CheckboxGroup>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    expect(container.firstChild).toBeInTheDocument();
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support defaultValue', () => {
    const { container } = render(
      <CheckboxGroup defaultValue={['1']}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
  });

  it('should support value (controlled mode)', () => {
    const { container } = render(
      <CheckboxGroup value={['1']}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
  });

  it('should trigger onChange when checkbox is clicked', () => {
    const onChange = vi.fn();
    const { getByText } = render(
      <CheckboxGroup onChange={onChange}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    // Click first checkbox
    fireEvent.click(getByText('Option 1'));
    expect(onChange).toHaveBeenCalledWith(['1']);

    // Click second checkbox
    fireEvent.click(getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
  });

  it('should support options prop', () => {
    const { container, getByText } = render(
      <CheckboxGroup
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />,
    );

    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support string and number array for options prop', () => {
    const { container, getByText } = render(<CheckboxGroup options={['Apple', 'Banana', 123]} />);

    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('Banana')).toBeInTheDocument();
    expect(getByText('123')).toBeInTheDocument();

    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(3);
  });

  it('should support disabled state', () => {
    const { container } = render(
      <CheckboxGroup disabled>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toBeDisabled();
    expect(inputs[1]).toBeDisabled();
  });

  it('should support custom className and style', () => {
    const { container } = render(
      <CheckboxGroup className="custom-group" style={{ backgroundColor: 'red' }}>
        <Checkbox value="1">Option 1</Checkbox>
      </CheckboxGroup>,
    );

    expect(container.firstChild).toHaveClass('custom-group');
    // expect(container.firstChild).toHaveStyle('background-color: red');
    expect((container.firstChild as HTMLInputElement)?.getAttribute('style')).toContain('background-color: red');
  });

  it('should work with renderOption', () => {
    const { getByTestId } = render(
      <CheckboxGroup
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
        renderOption={(option) => <span data-testid={`custom-${option.value}`}>Custom {option.label}</span>}
      />,
    );

    expect(getByTestId('custom-1')).toBeInTheDocument();
    expect(getByTestId('custom-2')).toBeInTheDocument();
  });

  it('should handle checkbox toggle correctly', () => {
    const onChange = vi.fn();
    const { getByText } = render(
      <CheckboxGroup value={['1']} onChange={onChange}>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    // Uncheck first checkbox
    fireEvent.click(getByText('Option 1'));
    expect(onChange).toHaveBeenCalledWith([]);

    // Check second checkbox
    fireEvent.click(getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith(['1', '2']);
  });

  it('should support name attribute', () => {
    const { container } = render(
      <CheckboxGroup name="test-group">
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toHaveAttribute('name', 'test-group');
    expect(inputs[1]).toHaveAttribute('name', 'test-group');
  });
});
