import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Popup from '../Popup';

describe('Popup', () => {
  test('should render correctly with hover', async () => {
    const { container, queryByTestId } = render(
      <Popup content={<div data-testid="popup-test-id">Popup content</div>}>
        <button type="button">Hover me</button>
      </Popup>,
    );

    // mouse enter before, popup is unmount
    await waitFor(() => {
      const popupEl = document.querySelector('.sqi-popup');
      expect(popupEl).toBeNull();
      const popupContentEl = queryByTestId('popup-test-id');
      expect(popupContentEl).not.toBeInTheDocument();
    });

    act(() => {
      fireEvent.mouseEnter(container.firstChild!);
    });

    await waitFor(() => {
      const popupContentEl = queryByTestId('popup-test-id');
      expect(popupContentEl).not.toBeNull();
      expect(popupContentEl).toBeInTheDocument();
    });

    act(() => {
      fireEvent.mouseLeave(container.firstChild!);
    });

    await waitFor(() => {
      const popupEl2 = queryByTestId('popup-test-id');
      expect(popupEl2).toBeNull();
    });
  });

  test('should not render with empty children', async () => {
    const { container } = render(<Popup content={<div data-testid="popup-test-id">Popup content</div>}></Popup>);

    expect(container.firstChild).toBeNull();
  });

  test('should support string children', async () => {
    const { container, queryByText } = render(
      <Popup content="Popup string content">
        <button type="button">Hover me</button>
      </Popup>,
    );

    act(() => {
      fireEvent.mouseEnter(container.firstChild!);
    });

    await waitFor(() => {
      const popupEl2 = queryByText('Popup string content');
      expect(popupEl2).not.toBeNull();
      expect(popupEl2).toBeInTheDocument();
    });
  });

  test('should not render arrow with showArrow is false', async () => {
    const TestComponent = () => {
      const [showArrow, setShowArrow] = React.useState(true);

      return (
        <>
          <button data-testid="control-arrow" type="button" onClick={() => setShowArrow(false)}>
            Hide Arrow
          </button>
          <Popup content="Popup content" showArrow={showArrow}>
            <button data-testid="hover-trigger" type="button">
              Hover me
            </button>
          </Popup>
        </>
      );
    };

    const { queryByTestId } = render(<TestComponent />);

    act(() => {
      fireEvent.mouseEnter(queryByTestId('hover-trigger')!);
    });

    await waitFor(() => {
      const arrowEl = document.querySelector('.sqi-popup-arrow');
      expect(arrowEl).not.toBeNull();
      expect(arrowEl).toBeInTheDocument();
    });

    act(() => {
      fireEvent.mouseLeave(queryByTestId('hover-trigger')!);
    });

    act(() => {
      fireEvent.click(queryByTestId('control-arrow')!);
    });

    await waitFor(() => {
      const arrowEl = document.querySelector('.sqi-popup-arrow');
      expect(arrowEl).toBeNull();
      expect(arrowEl).not.toBeInTheDocument();
    });
  });
});
