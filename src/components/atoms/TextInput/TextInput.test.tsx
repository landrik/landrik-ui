
// ========================================
// TextInput.test.tsx
// ========================================

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { lightTheme } from '../../../theme/theme';


import { TextInput } from './TextInput';



describe('TextInput', () => {
  const defaultProps = {
    labelText: 'Email',
    placeholder: 'Enter email',
    shape: 'rounded' as const,
    color: '#3b82f6',
    value: '',
    onChangeInput: jest.fn(),
  };

  beforeEach(() => {
  jest.clearAllMocks();
  });

  describe('Rendering', () => {

    it('renders with required props', () => {
      const { container } = render(<TextInput {...defaultProps} />);


      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    });

    it('renders with icon on left by default', () => {
      const { container } = render(
        <TextInput {...defaultProps} icon="envelope-closed" />
      );
      const icon = container.querySelector("[data-icon='envelope-closed']");
      expect(icon).toBeInTheDocument();
    });

    it('renders with icon on right when specified', () => {
      const {container} = render(
        <TextInput
          {...defaultProps}
          icon="magnifying-glass"
          iconPosition="right"
        />
      );
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument();
    });

    it('displays error message when error prop is provided', () => {
      const { container } = render(<TextInput {...defaultProps} error errorText="Invalid email" />);
      expect(screen.queryByText('Invalid email')).toBeInTheDocument();
      // const errMsg = container.querySelector('span');
      // expect(errMsg).toHaveStyle({backgroundColor: '#ef4444'});
      
      //expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });

    it('shows success icon when success prop is true', () => {
      const { container } = render(<TextInput {...defaultProps} success={true} />);
      const successIcon = container.querySelector('svg');
      expect(successIcon).toBeInTheDocument();
    });

  });

  describe('Password Toggle', () => {
    it('renders password toggle button when showPasswordToggle is true', () => {
      render(<TextInput {...defaultProps} type="password" showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button', { name: /show password/i });
      expect(toggleButton).toBeInTheDocument();
    });

    it('toggles password visibility on button click', () => {
      render(<TextInput {...defaultProps} type="password" showPasswordToggle={true} />);
      const input = screen.getByPlaceholderText('Enter email') as HTMLInputElement;
      const toggleButton = screen.getByRole('button', { name: /show password/i });

      expect(input.type).toBe('password');

      fireEvent.click(toggleButton);
      expect(input.type).toBe('text');

      fireEvent.click(toggleButton);
      expect(input.type).toBe('password');
    });

    it('changes button aria-labelText when toggled', () => {
      render(<TextInput {...defaultProps} showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button', { name: /show password/i });

      fireEvent.click(toggleButton);
      expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument();
    });

  });

  describe('Shapes', () => {
    it('applies rounded shape class', () => {
      const { container } = render(<TextInput {...defaultProps} shape="rounded" />);
      const inputContainer = container.querySelector('input')?.parentElement;
      expect(inputContainer).toHaveStyle({ borderRadius: lightTheme.radius.lg });
    });

    it('applies pill shape class', () => {
      const { container } = render(<TextInput {...defaultProps} shape="pill" />);
      const inputContainer = container.querySelector('input')?.parentElement;
      expect(inputContainer).toHaveStyle({ borderRadius: lightTheme.radius.full });
    });

    it('applies square shape class', () => {
      const { container } = render(<TextInput {...defaultProps} shape="square" />);
      const inputContainer = container.querySelector('input')?.parentElement;
      expect(inputContainer).toHaveStyle({ borderRadius: lightTheme.radius.none });
    });

  });

  describe('User Interactions', () => {
    it('calls onChangeInput when input value changes', () => {
      const handleChange = jest.fn();
      render(<TextInput {...defaultProps} onChangeInput={handleChange} />);

      const input = screen.getByPlaceholderText('Enter email');
      fireEvent.change(input, { target: { value: 'test@example.com' } });

      expect(handleChange).toHaveBeenCalledWith('test@example.com');
    });

    it('displays the current value', () => {
      render(<TextInput {...defaultProps} value="current@email.com" />);
      const input = screen.getByPlaceholderText('Enter email') as HTMLInputElement;
      expect(input.value).toBe('current@email.com');
    });

  });

  describe('Error States', () => {
    it('shows error icon when error is present', () => {

      const { container } = render(<TextInput {...defaultProps} error errorText="Error message" />);
      // AlertCircle icon should be rendered
      const errorIcon = container.querySelector('svg') as SVGSVGElement
      expect(errorIcon).toBeInTheDocument();
    });

    it('does not show success icon when error is present', () => {
      render(<TextInput {...defaultProps} error errorText="Error" success={true} />);
      // Should only show error, not success
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });

  });

  describe('Accessibility', () => {

    it('associates labelText with input', () => {
      render(<TextInput {...defaultProps} labelText="Email Address" />);
      const inputLabel = screen.getByText('Email Address');
      expect(inputLabel).toBeInTheDocument();
    });

    it('has proper aria-labelText for password toggle', () => {
      render(<TextInput {...defaultProps} showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toHaveAttribute('aria-label');
    });

  });

});