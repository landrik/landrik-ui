
// ========================================
// Select.test.tsx
// ========================================

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

describe('Select', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const defaultProps = {
    options: mockOptions,
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with placeholder when no value selected', () => {
      render(<Select {...defaultProps} placeholder="Select an option" />);
      expect(screen.getByText('Select an option')).toBeInTheDocument();
    });

    it('renders selected value', () => {
      render(<Select {...defaultProps} value="option2" />);
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('does not show dropdown initially', () => {
      render(<Select {...defaultProps} />);
      expect(screen.queryByText('Option 1')).not.toBeVisible();
    });

    it('shows error message when error prop is provided', () => {
      render(<Select {...defaultProps} error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

  });

  describe('Dropdown Behavior', () => {
    it('opens dropdown when clicked', () => {
      render(<Select {...defaultProps} />);
      const button = screen.getByRole('button');


      fireEvent.click(button);

      expect(screen.getByText('Option 1')).toBeVisible();
      expect(screen.getByText('Option 2')).toBeVisible();
      expect(screen.getByText('Option 3')).toBeVisible();
    });

    it('closes dropdown when an option is selected', () => {
      render(<Select {...defaultProps} />);
      const button = screen.getByRole('button');

      fireEvent.click(button);
      const option = screen.getByText('Option 1');
      fireEvent.click(option);

      waitFor(() => {
        expect(screen.getByText('Option 1')).not.toBeVisible();
      });
    });

    it('closes dropdown when clicking outside', () => {
      render(
        <div>
          <Select {...defaultProps} />
          <div data-testid="outside">Outside</div>
        </div>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      const outside = screen.getByTestId('outside');
      fireEvent.mouseDown(outside);

      waitFor(() => {
        expect(screen.getByText('Option 1')).not.toBeVisible();
      });
    });


  });

  describe('User Interactions', () => {
    it('calls onChange when an option is selected', () => {
      const handleChange = jest.fn();
      render(<Select {...defaultProps} onChange={handleChange} />);


      const button = screen.getByRole('button');
      fireEvent.click(button);

      const option = screen.getByText('Option 2');
      fireEvent.click(option);

      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('shows check mark next to selected option', () => {
      const { container } = render(<Select {...defaultProps} value="option2" />);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      // Check icon should be present next to Option 2
      const option2 = screen.getByText('Option 2').parentElement;
      expect(option2?.querySelector('svg')).toBeInTheDocument();
    });

  });

  describe('Disabled State', () => {
    it('renders as disabled', () => {
      render(<Select {...defaultProps} disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });


    it('does not open dropdown when disabled', () => {
      render(<Select {...defaultProps} disabled />);
      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(screen.queryByText('Option 1')).not.toBeVisible();
    });

  });

  describe('Shapes', () => {
    it('applies rounded shape', () => {
      render(<Select {...defaultProps} shape="rounded" />);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '8px' });
    });

    it('applies pill shape', () => {
      render(<Select {...defaultProps} shape="pill" />);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '999px' });
    });

    it('applies square shape', () => {
      render(<Select {...defaultProps} shape="square" />);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '4px' });
    });

  });

  describe('Error State', () => {
    it('applies error styling', () => {
      render(<Select {...defaultProps} error="Error message" />);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderColor: '#ef4444' });
    });

    it('displays error message', () => {
      render(<Select {...defaultProps} error="Please select an option" />);
      expect(screen.getByText('Please select an option')).toBeInTheDocument();
    });

  });

  describe('Custom Color', () => {
    it('applies custom color to border when open', () => {
      render(<Select {...defaultProps} color="#ff0000" />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(button).toHaveStyle({ borderColor: '#ff0000' });
    });
  });

  describe('Accessibility', () => {
    it('can be focused with keyboard', () => {
      render(<Select {...defaultProps} />);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

});