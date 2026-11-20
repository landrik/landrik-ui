import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: 'Option 2' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: 'Option 3' })).toBeInTheDocument();
    });

    it('renders with radiogroup role and accessible label', () => {
      render(<RadioButton {...defaultProps} ariaLabel="Choose an option" />);
      expect(screen.getByRole('radiogroup', { name: 'Choose an option' })).toBeInTheDocument();
    });

    it('marks the selected option as checked', () => {
      render(<RadioButton {...defaultProps} value="option2" />);
      expect(screen.getByRole('radio', { name: 'Option 2' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option 1' })).not.toBeChecked();
    });

    it('applies custom color to selected radio', () => {
      const { container } = render(<RadioButton {...defaultProps} color="#ff0000" />);
      const radioElement = container.querySelector('[data-checked="true"]');
      expect(radioElement).toHaveStyle({ borderColor: '#ff0000' });
    });
  });

  describe('Sizes', () => {
    it.each([
      ['sm', '16px'],
      ['md', '20px'],
      ['lg', '24px'],
    ] as const)('renders %s size (%s)', (size, expectedSize) => {
      const { container } = render(<RadioButton {...defaultProps} size={size} />);
      const radioElement = container.querySelector('label > div');
      expect(radioElement).toHaveStyle({ width: expectedSize, height: expectedSize });
    });
  });

  describe('User Interactions', () => {
    it('calls onChange when a different option is selected', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<RadioButton {...defaultProps} onChange={handleChange} />);

      await user.click(screen.getByRole('radio', { name: 'Option 2' }));

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('does not call onChange when clicking the already selected option', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<RadioButton {...defaultProps} value="option1" onChange={handleChange} />);

      await user.click(screen.getByRole('radio', { name: 'Option 1' }));

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('updates selection internally when used in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<RadioButton name="uncontrolled" options={mockOptions} defaultValue="option1" />);

      const option1 = screen.getByRole('radio', { name: 'Option 1' });
      const option3 = screen.getByRole('radio', { name: 'Option 3' });

      expect(option1).toBeChecked();
      await user.click(option3);

      expect(option3).toBeChecked();
      expect(option1).not.toBeChecked();
    });
  });

  describe('Disabled State', () => {
    it('renders individual disabled option', () => {
      const optionsWithDisabled = [
        ...mockOptions,
        { value: 'option4', label: 'Disabled Option', disabled: true },
      ];
      render(<RadioButton {...defaultProps} options={optionsWithDisabled} />);
      expect(screen.getByRole('radio', { name: 'Disabled Option' })).toBeDisabled();
    });

    it('does not call onChange when clicking a disabled option', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const optionsWithDisabled = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', disabled: true },
      ];

      render(
        <RadioButton
          name="disabled-test"
          options={optionsWithDisabled}
          value="option1"
          onChange={handleChange}
        />
      );

      await user.click(screen.getByRole('radio', { name: 'Option 2' }));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('disables all options when group disabled prop is true', () => {
      render(<RadioButton {...defaultProps} disabled />);
      const radios = screen.getAllByRole('radio');
      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });
  });

  describe('Accessibility', () => {
    it('uses the same name for all radio buttons in the group', () => {
      render(<RadioButton {...defaultProps} name="test-group" />);
      const radios = screen.getAllByRole('radio');
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute('name', 'test-group');
      });
    });

    it('supports keyboard arrow navigation between options', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<RadioButton {...defaultProps} value="option1" onChange={handleChange} />);

      const option1 = screen.getByRole('radio', { name: 'Option 1' });
      option1.focus();
      await user.keyboard('{ArrowDown}');

      expect(handleChange).toHaveBeenCalledWith('option2');
    });
  });
});
