import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Trigger from '../Trigger';
import type { TriggerPlacement } from '../type';

describe('Trigger', () => {
  it('should render correctly with hover trigger', async () => {
    const { queryByTestId, getByRole } = render(
      <Trigger
        popper={<div data-testid="popper-content">Popper content</div>}
        motion={{ mountOnEnter: true, unmountOnExit: true }}
      >
        <button type="button">Hover me</button>
      </Trigger>,
    );

    const trigger = getByRole('button', { name: /hover me/i });
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(queryByTestId('popper-content')).toBeInTheDocument();
    });
  });

  it('should render correctly with click trigger', async () => {
    const { getByRole, queryByTestId } = render(
      <Trigger
        trigger="click"
        popper={<div data-testid="popper-content">Popper content</div>}
        motion={{ mountOnEnter: true, unmountOnExit: true }}
      >
        <button type="button">Click me</button>
      </Trigger>,
    );

    expect(queryByTestId('popper-content')).toBeNull();

    const trigger = getByRole('button', { name: /click me/i });
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(queryByTestId('popper-content')).toBeInTheDocument();
    });
  });

  it('shows popper content when input is focused', async () => {
    const { getByPlaceholderText, queryByTestId } = render(
      <Trigger
        trigger="focus"
        popper={<div data-testid="popper-content">Popper content</div>}
        motion={{ mountOnEnter: true, unmountOnExit: true }}
      >
        <input placeholder="Focus me" />
      </Trigger>,
    );

    expect(queryByTestId('popper-content')).toBeNull();

    const input = getByPlaceholderText('Focus me');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(queryByTestId('popper-content')).toBeInTheDocument();
    });
  });

  it('should support different placements', async () => {
    const placements: TriggerPlacement[] = ['top', 'right', 'bottom', 'left'];

    for (const placement of placements) {
      const { queryByTestId } = render(
        <Trigger
          placement={placement}
          defaultVisible
          popper={<div data-testid={`popper-${placement}`}>Popper content</div>}
          motion={{ initialEntered: true }}
        >
          <button type="button">Trigger</button>
        </Trigger>,
      );

      await waitFor(() => {
        const popperEl = queryByTestId(`popper-${placement}`);
        expect(popperEl).toBeInTheDocument();
      });

      const tooltipEl = document.querySelector('.sqi-trigger');
      expect(tooltipEl).toHaveStyle('position: fixed');
    }
  });

  it('should support arrow element', async () => {
    const { queryByTestId } = render(
      <Trigger
        defaultVisible
        arrow={<div data-testid="arrow-element" style={{ width: 12, height: 12 }} />}
        popper={<div data-testid="popper-content">Popper content</div>}
        motion={{ initialEntered: true }}
      >
        <button type="button">Trigger</button>
      </Trigger>,
    );

    await waitFor(() => {
      expect(queryByTestId('arrow-element')).toBeInTheDocument();
      expect(queryByTestId('popper-content')).toBeInTheDocument();
    });
  });

  it('should not render when children is not a valid element', () => {
    // @ts-expect-error
    const { container } = render(<Trigger popper={<div>Popper content</div>}>This is not a valid element</Trigger>);

    expect(container.firstChild).toBeNull();
  });
});
