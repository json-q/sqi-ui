import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tooltip from '../Tooltip';
import type { TooltipProps } from '../type';

describe('Tooltip', () => {
  it('renders with different themes', async () => {
    const themes: TooltipProps['theme'][] = ['default', 'primary', 'success', 'danger', 'warning', 'light'];

    for (const theme of themes) {
      const { queryByText, unmount } = render(
        <Tooltip defaultVisible theme={theme} content="This is a tooltip">
          <button type="button">Hover me</button>
        </Tooltip>,
      );

      await waitFor(() => {
        const contentEl = queryByText('This is a tooltip');
        expect(contentEl?.parentNode).toHaveClass(`sqi-tooltip-${theme}`);
        expect(contentEl?.parentNode).toMatchSnapshot();
      });
      unmount();
    }
  });

  it('renders with rootClassName', async () => {
    const { queryByText } = render(
      <Tooltip defaultVisible content="This is a tooltip" rootClassName="custom-tooltip">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    await waitFor(() => {
      const contentEl = queryByText('This is a tooltip');
      expect(contentEl?.parentNode).toHaveClass('sqi-tooltip');
      expect(contentEl?.parentNode).toHaveClass('custom-tooltip');
    });
  });

  it('renders with custom arrow and content className', async () => {
    const { queryByText } = render(
      <Tooltip
        defaultVisible
        content="This is a tooltip"
        classNames={{
          arrow: 'custom-arrow',
          content: 'custom-content',
        }}
      >
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    await waitFor(() => {
      const contentEl = queryByText('This is a tooltip');
      const arrowEl = document.querySelector('.sqi-popup-arrow');

      expect(contentEl).toHaveClass('custom-content');
      expect(arrowEl).toHaveClass('custom-arrow');

      expect(contentEl?.parentNode).toMatchSnapshot();
    });
  });
});
