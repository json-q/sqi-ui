import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '..';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Follow</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
