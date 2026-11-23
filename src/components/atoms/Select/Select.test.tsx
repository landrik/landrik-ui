import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Select } from './Select';
import { lightTheme } from '../../../theme/theme';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

const defaultProps = {
  options: mockOptions,
  placeholder: 'Select an option',
  onChange: jest.fn(),
};

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering & Controlled / Uncontrolled Modes', () => {
    it('renders placeholder and closed combobox state initially', () => {
      render(<Select {...defaultProps} />);
      const trigger = screen.getByRole('combobox');

      expect(trigger).toHaveTextContent('Select an option');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('renders controlled value and marks matching option with aria-selected="true"', () => {
      render(<Select {...defaultProps} value="option2" />);

      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveTextContent('Option 2');

      fireEvent.click(trigger);
      expect(screen.getByRole('option', { name: /Option 2/i })).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });

    it('supports uncontrolled mode with defaultValue and updates internal selection', () => {
      const handleChange = jest.fn();
      render(
        <Select
          options={mockOptions}
          defaultValue="option1"
          onChange={handleChange}
        />
      );

      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveTextContent('Option 1');

      fireEvent.click(trigger);
      fireEvent.click(screen.getByRole('option', { name: 'Option 2' }));

      expect(handleChange).toHaveBeenCalledWith('option2');
      expect(trigger).toHaveTextContent('Option 2');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('forwards id, aria-invalid, and aria-describedby attributes to the combobox', () => {
      render(
        <Select
          {...defaultProps}
          id="country-select"
          aria-invalid={true}
          aria-describedby="country-hint"
        />
      );

      const trigger = screen.getByRole('combobox');
      expect(trigger).toHaveAttribute('id', 'country-select');
      expect(trigger).toHaveAttribute('aria-invalid', 'true');
      expect(trigger).toHaveAttribute('aria-describedby', 'country-hint');
    });
  });

  describe('Mouse Interactions & Disabled Options', () => {
    it('opens and closes dropdown when trigger is clicked', () => {
      render(<Select {...defaultProps} />);
      const trigger = screen.getByRole('combobox');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('listbox')).toBeVisible();

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes dropdown when clicking outside the wrapper', () => {
      render(
        <div>
          <Select {...defaultProps} />
          <button type="button">Outside</button>
        </div>
      );

      const trigger = screen.getByRole('combobox');
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      fireEvent.mouseDown(screen.getByRole('button', { name: 'Outside' }));
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('prevents selecting an individual disabled option', () => {
      const handleChange = jest.fn();
      render(<Select {...defaultProps} onChange={handleChange} />);

      const trigger = screen.getByRole('combobox');
      fireEvent.click(trigger);

      const disabledOption = screen.getByRole('option', { name: 'Option 3' });
      expect(disabledOption).toHaveAttribute('aria-disabled', 'true');

      fireEvent.click(disabledOption);
      expect(handleChange).not.toHaveBeenCalled();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Keyboard Navigation', () => {
    it('opens dropdown with ArrowDown, navigates options, and selects with Enter', () => {
      const handleChange = jest.fn();
      render(<Select {...defaultProps} onChange={handleChange} />);

      const trigger = screen.getByRole('combobox');

      // ArrowDown opens dropdown and highlights index 0 ("Option 1")
      fireEvent.keyDown(trigger, { key: 'ArrowDown' });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      // ArrowDown moves highlight to index 1 ("Option 2")
      fireEvent.keyDown(trigger, { key: 'ArrowDown' });

      // Enter selects highlighted option and closes dropdown
      fireEvent.keyDown(trigger, { key: 'Enter' });
      expect(handleChange).toHaveBeenCalledWith('option2');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('opens dropdown with ArrowUp at the last option and selects with Space', () => {
      const handleChange = jest.fn();
      const enabledOptions = [
        { value: 'a', label: 'Alpha' },
        { value: 'b', label: 'Beta' },
      ];
      render(<Select options={enabledOptions} onChange={handleChange} />);

      const trigger = screen.getByRole('combobox');

      // ArrowUp when closed opens and highlights last item ("Beta")
      fireEvent.keyDown(trigger, { key: 'ArrowUp' });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      // Space selects highlighted item
      fireEvent.keyDown(trigger, { key: ' ' });
      expect(handleChange).toHaveBeenCalledWith('b');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes dropdown when Escape is pressed', () => {
      render(<Select {...defaultProps} />);
      const trigger = screen.getByRole('combobox');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      fireEvent.keyDown(trigger, { key: 'Escape' });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Disabled, Error & Shape States', () => {
    it('blocks mouse and keyboard interaction when disabled is true', () => {
      render(<Select {...defaultProps} disabled />);
      const trigger = screen.getByRole('combobox');

      expect(trigger).toBeDisabled();

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      fireEvent.keyDown(trigger, { key: 'ArrowDown' });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('displays error message and sets aria-invalid="true" when error is provided', () => {
      render(<Select {...defaultProps} error="Selection is required" />);

      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByText('Selection is required')).toBeInTheDocument();
    });

    it.each([
      ['rounded', lightTheme.radius.lg],
      ['pill', lightTheme.radius.full],
      ['square', lightTheme.radius.none],
    ] as const)('applies %s shape border radius', (shape, expectedRadius) => {
      render(<Select {...defaultProps} shape={shape} />);
      expect(screen.getByRole('combobox')).toHaveStyle({ borderRadius: expectedRadius });
    });
  });
});
