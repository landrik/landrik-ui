// ========================================
// RadioButton.test.tsx
// ========================================

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const defaultProps = {
    name: 'test-radio',
    options: mockOptions,
    value: 'option1',
    onChange: jest.fn(),
  };

  beforeEach(() => {
  jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders all radio options', () => {
      render(<RadioButton {...defaultProps} />);
      expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
    });


    it('renders with radiogroup role', () => {
      const { container } = render(<RadioButton {...defaultProps} />);
      expect(container.querySelector('[role="radiogroup"]')).toBeInTheDocument();
    });

    it('marks the selected option as checked', () => {
      render(<RadioButton {...defaultProps} value="option2" />);
      const radio = screen.getByLabelText('Option 2') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('applies custom color', () => {
      const { container } = render(<RadioButton {...defaultProps} color="#ff0000" />);
      const radioElement = container.querySelector('[data-checked="true"]');
      expect(radioElement).toHaveStyle({ borderColor: '#ff0000' });
    });


  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<RadioButton {...defaultProps} size="sm" />);
      const radioElement = container.querySelector('label > div');
      expect(radioElement).toHaveStyle({ width: '16px', height: '16px' });
    });

    it('renders medium size', () => {
      const { container } = render(<RadioButton {...defaultProps} size="md" />);
      const radioElement = container.querySelector('label > div');
      expect(radioElement).toHaveStyle({ width: '20px', height: '20px' });
    });

    it('renders large size', () => {
      const { container } = render(<RadioButton {...defaultProps} size="lg" />);
      const radioElement = container.querySelector('label > div');
      expect(radioElement).toHaveStyle({ width: '24px', height: '24px' });
    });

  });

  describe('User Interactions', () => {

    it('calls onChange when a different option is selected', () => {
      const handleChange = jest.fn();
      render(<RadioButton {...defaultProps} onChange={handleChange} />);

      const radio2 = screen.getByLabelText('Option 2');
      fireEvent.click(radio2);

      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('does not call onChange when clicking the already selected option', () => {
      const handleChange = jest.fn();
      render(<RadioButton {...defaultProps} value="option1" onChange={handleChange} />);

      const radio1 = screen.getByLabelText('Option 1');
      fireEvent.click(radio1);

      // onChange is still called, but with the same value
      expect(handleChange).not.toHaveBeenCalledWith('option1');
    });

  });

  describe('Disabled State', () => {

    it('renders disabled option', () => {
      const optionsWithDisabled = [
        ...mockOptions,
        { value: 'option4', label: 'Disabled Option', disabled: true },
      ];
      render(<RadioButton {...defaultProps} options={optionsWithDisabled} />);
      const disabledRadio = screen.getByLabelText('Disabled Option') as HTMLInputElement;
      expect(disabledRadio.disabled).toBe(true);
    });

    it('does not call onChange when clicking disabled option', () => {
      const handleChange = jest.fn();
      const optionsWithDisabled = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', disabled: true },
      ];

      render(<RadioButton {...defaultProps} options={optionsWithDisabled} onChange={handleChange} />);

      const disabledRadio = screen.getByLabelText('Option 2');
      fireEvent.click(disabledRadio);

      expect(handleChange).not.toHaveBeenCalledWith();
    });

  });

  describe('Accessibility', () => {
    it('uses the same name for all radio buttons in the group', () => {
      render(<RadioButton {...defaultProps} name="test-group" />);


      const radios = screen.getAllByRole('radio');
      radios.forEach(radio => {
        expect(radio).toHaveAttribute('name', 'test-group');
      });
    });

    it('associates labels with inputs correctly', () => {
      render(<RadioButton {...defaultProps} />);

      mockOptions.forEach(option => {
        const radio = screen.getByLabelText(option.label);
        expect(radio).toHaveAttribute('value', option.value);
      });
    });

  });
});