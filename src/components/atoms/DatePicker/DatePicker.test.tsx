import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  const fixedDate = new Date(2026, 10, 15); // 15 Nov 2026

  describe('Rendering & Formatting', () => {
    it('renders placeholder when no date is selected', () => {
      render(<DatePicker placeholder="Select booking date" />);
      expect(screen.getByRole('button', { name: /Select booking date/i })).toBeInTheDocument();
    });

    it('formats selected date using en-GB format by default', () => {
      render(<DatePicker value={fixedDate} />);
      expect(screen.getByText('15 Nov 2026')).toBeInTheDocument();
    });

    it('supports custom formatDate function', () => {
      const customFormat = (d: Date) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
          d.getDate()
        ).padStart(2, '0')}`;

      render(<DatePicker value={fixedDate} formatDate={customFormat} />);
      expect(screen.getByText('2026-11-15')).toBeInTheDocument();
    });

    it('sets aria-invalid when error prop is true', () => {
      render(<DatePicker error placeholder="Pick a date" />);
      expect(screen.getByRole('button', { name: /Pick a date/i })).toHaveAttribute(
        'aria-invalid',
        'true'
      );
    });
  });

  describe('Popover Interactions & Date Selection', () => {
    it('opens calendar popover on trigger click and closes after selecting a date', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(<DatePicker defaultValue={fixedDate} onChange={handleChange} />);

      const trigger = screen.getByRole('button', { name: /15 Nov 2026/i });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('dialog', { name: 'Choose date' })).toBeVisible();

      const targetDate = new Date(2026, 10, 22);
      await user.click(screen.getByRole('button', { name: targetDate.toDateString() }));

      expect(handleChange).toHaveBeenCalledTimes(1);
      //const selectedArg: Date = handleChange.mock.calls;
      const selectedArg: Date = handleChange.mock.calls[0][0];
      expect(selectedArg.getDate()).toBe(22);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(screen.getByText('22 Nov 2026')).toBeInTheDocument();
    });

    it('closes popover when Escape key is pressed', async () => {
      const user = userEvent.setup();
      render(<DatePicker placeholder="Select date" />);

      const trigger = screen.getByRole('button', { name: /Select date/i });
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{Escape}');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes popover when clicking outside the component', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <DatePicker placeholder="Select date" />
          <button type="button">Outside</button>
        </div>
      );

      const trigger = screen.getByRole('button', { name: /Select date/i });
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      await user.click(screen.getByRole('button', { name: 'Outside' }));
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Clearing & Disabled States', () => {
    it('clears the selected date without opening the popover when Clear button is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(
        <DatePicker
          defaultValue={fixedDate}
          placeholder="Select date"
          clearable
          onChange={handleChange}
        />
      );

      const clearBtn = screen.getByRole('button', { name: 'Clear date' });
      await user.click(clearBtn);

      expect(handleChange).toHaveBeenCalledWith(null);
      expect(screen.getByText('Select date')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Select date/i })).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    });

    it('does not open popover or show clear button when disabled', async () => {
      const user = userEvent.setup();
      render(<DatePicker value={fixedDate} disabled clearable />);

      const trigger = screen.getByRole('button', { name: /15 Nov 2026/i });
      expect(trigger).toBeDisabled();
      expect(screen.queryByRole('button', { name: 'Clear date' })).not.toBeInTheDocument();

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
