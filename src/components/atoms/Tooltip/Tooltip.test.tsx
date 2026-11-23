import React from 'react';
import { render, screen, fireEvent, act } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('Rendering & Initial State', () => {
    it('renders trigger children and keeps tooltip hidden initially', () => {
      render(
        <Tooltip content="Helpful tip">
          <button type="button">Hover me</button>
        </Tooltip>
      );

      expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
      const tooltip = screen.getByRole('tooltip', { hidden: true });
      expect(tooltip).toHaveTextContent('Helpful tip');
      expect(tooltip).not.toBeVisible();
    });

    it('renders custom ReactNode content inside the tooltip', () => {
      render(
        <Tooltip content={<span data-testid="rich-tip">Bold Tip</span>} delay={0}>
          <button type="button">Info</button>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByRole('button', { name: 'Info' }));
      act(() => {
        jest.advanceTimersByTime(0);
      });

      expect(screen.getByTestId('rich-tip')).toBeVisible();
    });
  });

  describe('Hover & Delay Behavior', () => {
    it('shows tooltip after default 200ms delay and hides immediately on mouse leave', () => {
      render(
        <Tooltip content="Delayed message">
          <button type="button">Trigger</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button', { name: 'Trigger' });
      const tooltip = screen.getByRole('tooltip', { hidden: true });

      fireEvent.mouseEnter(trigger);

      // Still hidden before 200ms completes
      act(() => {
        jest.advanceTimersByTime(150);
      });
      expect(tooltip).not.toBeVisible();

      // Becomes visible at 200ms
      act(() => {
        jest.advanceTimersByTime(50);
      });
      expect(tooltip).toBeVisible();

      // Hides immediately on mouse leave
      fireEvent.mouseLeave(trigger);
      expect(tooltip).not.toBeVisible();
    });

    it('cancels pending timer if mouse leaves before delay completes', () => {
      render(
        <Tooltip content="Should not appear" delay={300}>
          <button type="button">Quick Hover</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button', { name: 'Quick Hover' });
      const tooltip = screen.getByRole('tooltip', { hidden: true });

      fireEvent.mouseEnter(trigger);
      act(() => {
        jest.advanceTimersByTime(100);
      });

      fireEvent.mouseLeave(trigger);
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(tooltip).not.toBeVisible();
    });
  });

  describe('Keyboard Focus & Placement', () => {
    it('shows tooltip on focus and hides on blur', () => {
      render(
        <Tooltip content="Keyboard tip" delay={100}>
          <button type="button">Focusable Button</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button', { name: 'Focusable Button' });
      const tooltip = screen.getByRole('tooltip', { hidden: true });

      fireEvent.focus(trigger);
      act(() => {
        jest.advanceTimersByTime(100);
      });
      expect(tooltip).toBeVisible();

      fireEvent.blur(trigger);
      expect(tooltip).not.toBeVisible();
    });

    it.each(['top', 'bottom', 'left', 'right'] as const)(
      'renders cleanly with placement="%s"',
      (placement) => {
        render(
          <Tooltip content={`${placement} tip`} placement={placement} delay={0}>
            <button type="button">{placement}</button>
          </Tooltip>
        );

        fireEvent.mouseEnter(screen.getByRole('button', { name: placement }));
        act(() => {
          jest.advanceTimersByTime(0);
        });

        expect(screen.getByRole('tooltip')).toHaveTextContent(`${placement} tip`);
      }
    );
  });
});
