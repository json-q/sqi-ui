import { describe, it, expect } from 'vitest';
import { toArray } from '../toArray';
import * as React from 'react';

describe('toArray', () => {
  it('should convert null or undefined to empty array', () => {
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
  });

  it('should convert string to array with single string element', () => {
    expect(toArray('hello')).toEqual(['hello']);
  });

  it('should convert number to array with single number element', () => {
    expect(toArray(42)).toEqual([42]);
  });

  it('should convert single React element to array with that element', () => {
    const element = React.createElement('div', null, 'Hello');
    const result = toArray(element);
    expect(result).toHaveLength(1);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[0] as any).props.children).toBe('Hello');
  });

  it('should convert single React element to array with that element', () => {
    const element = React.createElement('div', null, 'Hello');
    const result = toArray(element);
    expect(result).toHaveLength(1);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[0] as any).props.children).toBe('Hello');
  });

  it('should flatten arrays', () => {
    const element1 = React.createElement('div', null, 'First');
    const element2 = React.createElement('span', null, 'Second');
    const result = toArray([element1, element2]);
    expect(result).toHaveLength(2);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[1] as React.ReactElement).type).toBe('span');
    expect((result[0] as any).props.children).toBe('First');
    expect((result[1] as any).props.children).toBe('Second');
  });

  it('should filter out null and undefined values from arrays', () => {
    const element = React.createElement('div', null, 'Hello');
    const result = toArray([element, null, undefined, 'text']);
    expect(result).toHaveLength(2);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[0] as any).props.children).toBe('Hello');
    expect(result[1]).toBe('text');
  });

  it('should recursively flatten nested arrays', () => {
    const element1 = React.createElement('div', null, 'First');
    const element2 = React.createElement('span', null, 'Second');
    const element3 = React.createElement('p', null, 'Third');
    const nestedArray = [element1, [element2, [element3]]];
    const result = toArray(nestedArray);
    expect(result).toHaveLength(3);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[1] as React.ReactElement).type).toBe('span');
    expect((result[2] as React.ReactElement).type).toBe('p');
    expect((result[0] as any).props.children).toBe('First');
    expect((result[1] as any).props.children).toBe('Second');
    expect((result[2] as any).props.children).toBe('Third');
  });

  it('should unwrap Fragment children', () => {
    const fragment = React.createElement(
      React.Fragment,
      null,
      React.createElement('div', null, 'Child 1'),
      React.createElement('span', null, 'Child 2'),
    );

    const result = toArray(fragment);
    expect(result).toHaveLength(2);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[1] as React.ReactElement).type).toBe('span');
  });

  it('should unwrap nested Fragment children', () => {
    const nestedFragment = React.createElement(
      React.Fragment,
      null,
      React.createElement(React.Fragment, null, React.createElement('div', null, 'Deep child')),
    );

    const result = toArray(nestedFragment);
    expect(result).toHaveLength(1);
    expect((result[0] as React.ReactElement).type).toBe('div');
  });

  it('should handle Fragment with no children', () => {
    const emptyFragment = React.createElement(React.Fragment, null);
    const result = toArray(emptyFragment);
    expect(result).toEqual([]);
  });

  it('should handle Fragment with null/undefined children', () => {
    const fragmentWithNulls = React.createElement(React.Fragment, null, null, undefined, 'text');

    const result = toArray(fragmentWithNulls);
    expect(result).toEqual(['text']);
  });

  it('should handle mixed content with Fragments', () => {
    const element = React.createElement('div', null, 'Regular element');
    const fragment = React.createElement(React.Fragment, null, React.createElement('span', null, 'Fragment child'));

    const result = toArray([element, fragment, 'text']);
    expect(result).toHaveLength(3);
    expect((result[0] as React.ReactElement).type).toBe('div');
    expect((result[1] as React.ReactElement).type).toBe('span');
    expect(result[2]).toBe('text');
  });

  it('should handle complex nested structure', () => {
    const complexStructure = [
      'text',
      null,
      React.createElement('div', null, 'Element'),
      [
        React.createElement(React.Fragment, null, React.createElement('span', null, 'Fragment child'), null),
        'nested text',
      ],
    ];

    const result = toArray(complexStructure);
    expect(result).toHaveLength(4);
    expect(result[0]).toBe('text');
    expect((result[1] as React.ReactElement).type).toBe('div');
    expect((result[2] as React.ReactElement).type).toBe('span');
    expect(result[3]).toBe('nested text');
  });
});
