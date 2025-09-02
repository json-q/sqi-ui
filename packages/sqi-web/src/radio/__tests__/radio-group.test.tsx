import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import RadioGroup from '../RadioGroup';
import Radio from '../Radio';

describe('RadioGroup', () => {
  test('should render correctly', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support defaultValue', () => {
    const { container, getAllByRole } = render(
      <RadioGroup defaultValue="2">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support value', () => {
    const { container, getAllByRole } = render(
      <RadioGroup value="1">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    expect(radios[0]).toBeChecked();
    expect(radios[1]).not.toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support disabled', () => {
    const { container, getAllByRole } = render(
      <RadioGroup disabled>
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    expect(radios[0]).toBeDisabled();
    expect(radios[1]).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should trigger onChange when radio is clicked', () => {
    const handleChange = vi.fn();
    const { getAllByRole } = render(
      <RadioGroup onChange={handleChange}>
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    fireEvent.click(radios[1]);

    expect(handleChange).toBeCalled();
    expect(handleChange.mock.calls[0][0].target.value).toBe('2');
  });

  test('should support name attribute', () => {
    const { container } = render(
      <RadioGroup name="test-group">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const inputs = container.querySelectorAll('input');
    expect(inputs[0]).toHaveAttribute('name', 'test-group');
    expect(inputs[1]).toHaveAttribute('name', 'test-group');
  });

  test('should support size attribute', () => {
    const { container } = render(
      <RadioGroup size="lg">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    expect(container.querySelector('.sqi-radio-wrapper-size-lg')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support button appearance with options configuration', () => {
    const { container } = render(<RadioGroup appearance="button" options={['Radio1', 'Radio2']} />);

    expect(container.querySelector('.sqi-radio-button-wrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support options prop', () => {
    const options = [
      { label: 'Radio1', value: '1' },
      { label: 'Radio2', value: '2' },
      { label: 'Radio3', value: '3', disabled: true },
    ];

    const { container, getByText, getAllByRole } = render(<RadioGroup options={options} />);

    expect(getByText('Radio1')).toBeInTheDocument();
    expect(getByText('Radio2')).toBeInTheDocument();
    expect(getByText('Radio3')).toBeInTheDocument();

    const radios = getAllByRole('radio');
    expect(radios[2]).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support options with string values', () => {
    const options = ['Apple', 'Banana', 'Orange'];

    const { container, getByText } = render(<RadioGroup options={options} />);

    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('Banana')).toBeInTheDocument();
    expect(getByText('Orange')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support renderOption function', () => {
    const options = [
      { label: 'Radio1', value: '1' },
      { label: 'Radio2', value: '2' },
    ];

    const renderOption = (item: any) => <span data-testid={`custom-${item.value}`}>{item.label} - Custom</span>;

    const { getByTestId } = render(<RadioGroup options={options} renderOption={renderOption} />);

    expect(getByTestId('custom-1')).toBeInTheDocument();
    expect(getByTestId('custom-2')).toBeInTheDocument();
  });

  test('should support buttonVariant filled', () => {
    const { container } = render(
      <RadioGroup appearance="button" buttonVariant="filled">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    expect(container.querySelector('.sqi-radio-wrapper-filled')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
