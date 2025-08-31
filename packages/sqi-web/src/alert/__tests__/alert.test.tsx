import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Alert from '../Alert';

describe('Alert', () => {
  it('should render basic Alert correctly', () => {
    const { container, getByText } = render(<Alert description="This is an alert message" />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sqi-alert');
    expect(getByText('This is an alert message')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render different types of Alert correctly', () => {
    const { container: successAlert } = render(<Alert type="success" description="Success message" />);
    expect(successAlert.firstChild).toHaveClass('sqi-alert-success');

    const { container: infoAlert } = render(<Alert type="info" description="Info message" />);
    expect(infoAlert.firstChild).toHaveClass('sqi-alert-info');

    const { container: warningAlert } = render(<Alert type="warning" description="Warning message" />);
    expect(warningAlert.firstChild).toHaveClass('sqi-alert-warning');

    const { container: errorAlert } = render(<Alert type="error" description="Error message" />);
    expect(errorAlert.firstChild).toHaveClass('sqi-alert-error');

    expect(successAlert.firstChild).toMatchSnapshot();
    expect(infoAlert.firstChild).toMatchSnapshot;
    expect(warningAlert.firstChild).toMatchSnapshot;
    expect(errorAlert.firstChild).toMatchSnapshot;
  });

  it('should render title and description correctly', () => {
    const { container, getByText } = render(<Alert title="Alert Title" description="Alert Description" />);
    expect(getByText('Alert Title')).toBeInTheDocument();
    expect(getByText('Alert Description')).toBeInTheDocument();
    expect(getByText('Alert Title')).toHaveClass('sqi-alert-title');
    expect(getByText('Alert Description')).toHaveClass('sqi-alert-description');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display icons correctly', () => {
    const { container: hasIconAlert } = render(<Alert type="success" description="Success message" />);

    // Check default icon display
    expect(hasIconAlert.firstChild).toHaveClass('sqi-alert');
    expect(hasIconAlert.firstChild?.firstChild).toHaveClass('sqi-alert-icon');

    // Check when icon is hidden
    const { container: noIconAlert } = render(<Alert showIcon={false} description="No icon message" />);
    expect(noIconAlert.firstChild?.firstChild).not.toHaveClass('sqi-alert-icon');

    expect(hasIconAlert.firstChild).toMatchSnapshot();
    expect(noIconAlert.firstChild).toMatchSnapshot();
  });

  it('should render custom icons correctly', () => {
    const { container, getByTestId } = render(
      <Alert icon={<span data-testid="custom-icon">Custom Icon</span>} description="Custom icon alert" />,
    );
    expect(getByTestId('custom-icon')).toBeInTheDocument();

    expect(container.firstChild?.firstChild).toHaveClass('sqi-alert-icon');
  });

  it('should render action area correctly', () => {
    const action = (
      <button type="button" data-testid="alert-action">
        Action Button
      </button>
    );
    const { container } = render(<Alert action={action} description="Alert with action" />);
    expect(screen.getByTestId('alert-action')).toBeInTheDocument();
    expect((container.firstChild as any)?.children[2]).toHaveClass('sqi-alert-action');
  });

  it('should render close button correctly', () => {
    const { container } = render(<Alert closable description="Closable alert" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.firstChild?.lastChild).toHaveClass('sqi-alert-close');
  });

  it('should hide after clicking close button', async () => {
    const { container } = render(<Alert closable description="Closable alert" />);

    expect(container.firstChild).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    await waitFor(
      () => {
        expect(container.firstChild).not.toBeInTheDocument();
      },
      { timeout: 500 },
    );
  });

  it('should trigger onClose callback when closing', () => {
    const onClose = vi.fn();
    render(<Alert closable onClose={onClose} description="Alert with close callback" />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
