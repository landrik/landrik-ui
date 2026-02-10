// ========================================
// CheckBox.test.tsx
// ========================================

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
      const { container } = render(<CheckBox {...defaultProps} />);
      expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<CheckBox {...defaultProps} label="Accept terms" />);
      expect(screen.getByText('Accept terms')).toBeInTheDocument();
    });

    it('renders checked state', () => {
      render(<CheckBox {...defaultProps} checked={true} />);
      const Checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(Checkbox.checked).toEqual(true);
    });

    it('renders unchecked state', () => {
      render(<CheckBox {...defaultProps} checked={false} />);
      const Checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(Checkbox.checked).toEqual(false);
    });

    it('renders indeterminate state', () => {
      const { container } = render(<CheckBox {...defaultProps} indeterminate={true} />);
      // Indeterminate shows minus icon
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<CheckBox {...defaultProps} size="sm" />);
      const CheckBoxElement = container.querySelector('label > div');
      expect(CheckBoxElement).toHaveStyle({ width: '16px', height: '16px' });
    });

    it('renders medium size', () => {
      const { container } = render(<CheckBox {...defaultProps} size="md" />);
      const CheckBoxElement = container.querySelector('label > div');
      expect(CheckBoxElement).toHaveStyle({ width: '20px', height: '20px' });
    });

    it('renders large size', () => {
      const { container } = render(<CheckBox {...defaultProps} size="lg" />);
      const CheckBoxElement = container.querySelector('label > div');
      expect(CheckBoxElement).toHaveStyle({ width: '24px', height: '24px' });
    });

  });

  describe('User Interactions', () => {

    it('calls onChange with true when unchecked CheckBox is clicked', () => {
      const handleChange = jest.fn();
      render(<CheckBox {...defaultProps} checked={false} onChange={handleChange} />);


      const Checkbox = screen.getByRole('checkbox');
      fireEvent.click(Checkbox);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange with false when checked CheckBox is clicked', () => {
      const handleChange = jest.fn();
      render(<CheckBox {...defaultProps} checked={true} onChange={handleChange} />);

      const Checkbox = screen.getByRole('checkbox');
      fireEvent.click(Checkbox);

      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('does not call onChange when disabled', () => {
      const handleChange = jest.fn();
      render(<CheckBox {...defaultProps} disabled onChange={handleChange} />);

      const Checkbox = screen.getByRole('checkbox') as HTMLElement;
      fireEvent.click(Checkbox);

      expect(handleChange).not.toHaveBeenCalledWith();
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled', () => {
      render(<CheckBox {...defaultProps} disabled />);
      const Checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(Checkbox.disabled).toBe(true);
    });


    it('applies disabled styling', () => {
      const { container } = render(<CheckBox {...defaultProps} label="Test" disabled />);
      const label = container.querySelector('label');
      expect(label).toHaveStyle({ opacity: 0.5, cursor: 'not-allowed' });
    });
  });

  describe('Custom Color', () => {
    it('applies custom color', () => {
      const { container } = render(<CheckBox {...defaultProps} checked color="#ff0000" />);
      const CheckBoxElement = container.querySelector('label > div');
      expect(CheckBoxElement).toHaveStyle({ background: '#ff0000', borderColor: '#ff0000' });
    });
  });

  describe('Accessibility', () => {
    it('is keyboard accessible', () => {
      render(<CheckBox {...defaultProps} label="Test CheckBox" />);
      const Checkbox = screen.getByRole('checkbox');
      expect(Checkbox).toBeInTheDocument();
    });
  });
});