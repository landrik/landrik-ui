import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Calendar } from './Calendar';

describe('Calendar', () => {
  // Fixed reference date: November 15, 2026 (Sunday)
  const fixedDate = new Date(2026, 10, 15);

  describe('Rendering & Header Navigation', () => {
    it('renders the month and year matching the initial value', () => {
      render(<Calendar value={fixedDate} />);
      expect(screen.getByText('November 2026')).toBeInTheDocument();
    });

    it('renders Sunday first by default (firstDayOfWeek = 0)', () => {
      render(<Calendar value={fixedDate} />);
      const headers = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      headers.forEach((day) => {
        expect(screen.getByText(day)).toBeInTheDocument();
      });
    });

    it('starts week on Monday when firstDayOfWeek = 1', () => {
      const { container } = render(<Calendar value={fixedDate} firstDayOfWeek={1} />);
      const weekdayLabels = Array.from(container.querySelectorAll('div'))
        .map((el) => el.textContent)
        .filter((text) => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(text || ''));

      expect(weekdayLabels.slice(0, 7)).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    });

    it('navigates to previous and next months when header buttons are clicked', async () => {
      const user = userEvent.setup();
      render(<Calendar value={fixedDate} />);

      expect(screen.getByText('November 2026')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Previous month' }));
      expect(screen.getByText('October 2026')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Next month' }));
      expect(screen.getByText('November 2026')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Next month' }));
      expect(screen.getByText('December 2026')).toBeInTheDocument();
    });
  });

  describe('Date Selection', () => {
    it('marks the selected date with aria-selected="true"', () => {
      render(<Calendar value={fixedDate} />);
      const selectedButton = screen.getByRole('button', {
        name: fixedDate.toDateString(),
      });
      expect(selectedButton).toHaveAttribute('aria-selected', 'true');
    });

    it('calls onChange with the clicked date', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<Calendar value={fixedDate} onChange={handleChange} />);

      const targetDate = new Date(2026, 10, 20);
      await user.click(screen.getByRole('button', { name: targetDate.toDateString() }));

      expect(handleChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = handleChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2026);
      expect(calledDate.getMonth()).toBe(10);
      expect(calledDate.getDate()).toBe(20);
    });
  });

  describe('Disabled Dates (minDate, maxDate, disabledDates)', () => {
    it('disables dates before minDate and prevents onChange', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const minDate = new Date(2026, 10, 10);

      render(<Calendar value={fixedDate} minDate={minDate} onChange={handleChange} />);

      const disabledDay = screen.getByRole('button', {
        name: new Date(2026, 10, 9).toDateString(),
      });
      const enabledDay = screen.getByRole('button', {
        name: new Date(2026, 10, 10).toDateString(),
      });

      expect(disabledDay).toBeDisabled();
      expect(enabledDay).not.toBeDisabled();

      await user.click(disabledDay);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('disables dates after maxDate and prevents onChange', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const maxDate = new Date(2026, 10, 25);

      render(<Calendar value={fixedDate} maxDate={maxDate} onChange={handleChange} />);

      const disabledDay = screen.getByRole('button', {
        name: new Date(2026, 10, 26).toDateString(),
      });

      expect(disabledDay).toBeDisabled();
      await user.click(disabledDay);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('disables specific dates listed in disabledDates', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const blockedDate = new Date(2026, 10, 18);

      render(
        <Calendar
          value={fixedDate}
          disabledDates={[blockedDate]}
          onChange={handleChange}
        />
      );

      const blockedButton = screen.getByRole('button', {
        name: blockedDate.toDateString(),
      });

      expect(blockedButton).toBeDisabled();
      await user.click(blockedButton);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
