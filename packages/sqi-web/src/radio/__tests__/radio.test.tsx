import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Radio from '../Radio';
import RadioGroup from '../RadioGroup';

describe('Radio', () => {
  test('should render correctly', () => {
    const { container, getByText } = render(<Radio>Radio</Radio>);
    expect(container).toBeInTheDocument();
    expect(getByText('Radio')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support defaultChecked', () => {
    const { container } = render(<Radio defaultChecked>Radio</Radio>);
    const input = container.querySelector('input')!;
    expect(input).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support checked', () => {
    const { container } = render(<Radio checked>Radio</Radio>);
    const input = container.querySelector('input')!;
    expect(input).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support disabled', () => {
    const { container } = render(<Radio disabled>Radio</Radio>);
    const input = container.querySelector('input')!;
    expect(input).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should trigger onChange when click', () => {
    const handleChange = vi.fn();
    const { container } = render(<Radio onChange={handleChange}>Radio</Radio>);
    const input = container.querySelector('input')!;

    fireEvent.click(input);
    expect(handleChange).toBeCalled();
    expect(input).toBeChecked();
  });

  test('should not trigger onChange when disabled', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Radio onChange={handleChange} disabled>
        Radio
      </Radio>,
    );
    const input = container.querySelector('input')!;

    fireEvent.click(input);
    expect(handleChange).not.toBeCalled();
    expect(input).not.toBeChecked();
  });

  test('should work in group', () => {
    const handleChange = vi.fn();
    const { container, getAllByRole } = render(
      <RadioGroup onChange={handleChange} value="2">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should trigger onChange in group', () => {
    const handleChange = vi.fn();
    const { container, getAllByRole } = render(
      <RadioGroup onChange={handleChange} defaultValue="1">
        <Radio value="1">Radio1</Radio>
        <Radio value="2">Radio2</Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    fireEvent.click(radios[1]);

    expect(handleChange).toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should support function as children', () => {
    const { container, getByText } = render(
      <Radio checked>{({ checked }) => <span>{checked ? 'Checked' : 'Unchecked'}</span>}</Radio>,
    );

    expect(getByText('Checked')).toBeInTheDocument();
    // <label> <span style='display:none;'> <input/> </span> </label>
    expect(container.firstChild?.firstChild).toHaveStyle({ display: 'none' });
    expect(container).toMatchSnapshot();
  });

  test('should support button style when _IS_BUTTON_ is true', () => {
    const { container } = render(<Radio _IS_BUTTON_>Button Radio</Radio>);
    expect(container.querySelector('.sqi-radio-button-wrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
