import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TextArea } from './TextArea';
import { lightTheme } from '../../../theme/theme';

describe('TextArea', () => {
  describe('Rendering', () => {
    it('renders with associated label and placeholder', () => {
      render(<TextArea labelText="Message" placeholder="Enter your message" />);
      const textarea = screen.getByRole('textbox', { name: 'Message' });
      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveAttribute('placeholder', 'Enter your message');
    });

    it('renders required indicator when isRequired is true', () => {
      render(<TextArea labelText="Bio" isRequired />);
      const textarea = screen.getByRole('textbox', { name: /Bio/i });
      expect(textarea).toBeRequired();
      expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders helperText when provided', () => {
      render(<TextArea labelText="Notes" helperText="Maximum 200 characters" />);
      expect(screen.getByText('Maximum 200 characters')).toBeInTheDocument();
    });

    it('renders errorText with alert role and sets aria-invalid when error is true', () => {
      render(
        <TextArea
          labelText="Description"
          error
          errorText="Description is required"
          helperText="Helper text should be hidden"
        />
      );
      const textarea = screen.getByRole('textbox', { name: 'Description' });
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('alert')).toHaveTextContent('Description is required');
      expect(screen.queryByText('Helper text should be hidden')).not.toBeInTheDocument();
    });
  });

  describe('Shapes & Sizes', () => {
    it.each([
      ['square', lightTheme.radius.none],
      ['rounded', lightTheme.radius.lg],
      ['pill', lightTheme.radius['2xl']],
    ] as const)('applies %s shape (%s)', (shape, expectedRadius) => {
      render(<TextArea labelText="Shape" shape={shape} />);
      expect(screen.getByRole('textbox')).toHaveStyle({ borderRadius: expectedRadius });
    });

    it.each([
      ['sm', '8px 12px', '0.875rem'],
      ['md', '12px', '1rem'],
      ['lg', '14px 16px', '1.125rem'],
    ] as const)('renders %s size', (size, expectedPadding, expectedFontSize) => {
      render(<TextArea labelText="Size" size={size} />);
      expect(screen.getByRole('textbox')).toHaveStyle({
        padding: expectedPadding,
        fontSize: expectedFontSize,
      });
    });
  });

  describe('User Interactions & Character Count', () => {
    it('calls onChangeInput when typing in controlled mode', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<TextArea labelText="Comment" value="" onChangeInput={handleChange} />);

      await user.type(screen.getByRole('textbox', { name: 'Comment' }), 'Hi');
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange).toHaveBeenNthCalledWith(1, 'H');
      expect(handleChange).toHaveBeenNthCalledWith(2, 'i');
    });

    it('updates value internally in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<TextArea labelText="Feedback" defaultValue="Initial" />);

      const textarea = screen.getByRole('textbox', { name: 'Feedback' });
      expect(textarea).toHaveValue('Initial');

      await user.type(textarea, ' text');
      expect(textarea).toHaveValue('Initial text');
    });

    it('displays live character count and highlights near limit', async () => {
      const user = userEvent.setup();
      render(<TextArea labelText="Bio" maxLength={10} showCharCount />);

      expect(screen.getByText('0/10')).toBeInTheDocument();

      await user.type(screen.getByRole('textbox', { name: 'Bio' }), '123456789');
      const counter = screen.getByText('9/10');
      expect(counter).toBeInTheDocument();
      expect(counter).toHaveStyle({ color: lightTheme.color.warning.text });
    });
  });

  describe('Disabled State', () => {
    it('disables the textarea and prevents typing', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(
        <TextArea
          labelText="Read Only"
          isDisabled
          defaultValue="Locked"
          onChangeInput={handleChange}
        />
      );

      const textarea = screen.getByRole('textbox', { name: 'Read Only' });
      expect(textarea).toBeDisabled();

      await user.type(textarea, 'Attempt');
      expect(handleChange).not.toHaveBeenCalled();
      expect(textarea).toHaveValue('Locked');
    });
  });
});
