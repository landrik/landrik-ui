import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckBox } from './CheckBox';

describe('CheckBox', () => {
  const defaultProps = {
    checked: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without label', () => {
      render(<CheckBox {...defaultProps} />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with label associated to input', () => {
      render(<CheckBox {...defaultProps} label="Accept terms" />);
      expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
    });

    it('renders checked state', () => {
      render(<CheckBox {...defaultProps} checked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('renders unchecked state', () => {
      render(<CheckBox {...defaultProps} checked={false} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('renders indeterminate state', () => {
      const { container } = render(<CheckBox {...defaultProps} indeterminate={true} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it.each([
      ['sm', '16px'],
      ['md', '20px'],
      ['lg', '24px'],
    ] as const)('renders %s size (%s)', (size, expectedSize) => {
      const { container } = render(<CheckBox {...defaultProps} size={size} />);
      const boxElement = container.querySelector('label > div');
      expect(boxElement).toHaveStyle({ width: expectedSize, height: expectedSize });
    });
  });

  describe('User Interactions', () => {
    it('calls onChange with true when unchecked CheckBox is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<CheckBox checked={false} onChange={handleChange} label="Agree" />);

      await user.click(screen.getByRole('checkbox', { name: 'Agree' }));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange with false when checked CheckBox is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<CheckBox checked={true} onChange={handleChange} label="Agree" />);

      await user.click(screen.getByRole('checkbox', { name: 'Agree' }));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('toggles internal state when used in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<CheckBox defaultChecked={false} label="Uncontrolled" />);

      const checkbox = screen.getByRole('checkbox', { name: 'Uncontrolled' });
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });

    it('does not call onChange when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<CheckBox checked={false} disabled onChange={handleChange} label="Disabled" />);

      await user.click(screen.getByRole('checkbox', { name: 'Disabled' }));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled', () => {
      render(<CheckBox {...defaultProps} disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('applies disabled styling', () => {
      const { container } = render(<CheckBox {...defaultProps} label="Test" disabled />);
      const label = container.querySelector('label');
      expect(label).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    });
  });

  describe('Custom Color', () => {
    it('applies custom color when checked', () => {
      const { container } = render(<CheckBox {...defaultProps} checked color="#ff0000" />);
      const boxElement = container.querySelector('label > div');
      expect(boxElement).toHaveStyle({ background: '#ff0000', borderColor: '#ff0000' });
    });
  });

  describe('Accessibility', () => {
    it('supports keyboard focus and Space key toggling', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<CheckBox checked={false} onChange={handleChange} label="Keyboard CheckBox" />);

      const checkbox = screen.getByRole('checkbox', { name: 'Keyboard CheckBox' });
      await user.tab();
      expect(checkbox).toHaveFocus();

      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalledWith(true);
    });
  });
});
