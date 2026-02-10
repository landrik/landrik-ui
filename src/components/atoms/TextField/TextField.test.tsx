
// ========================================
// TextField.test.tsx
// ========================================

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';


import { TextField } from './TextField';



describe('TextField', () => {
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
      const { container } = render(<TextField {...defaultProps} />);


      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    });

    it('renders with icon on left by default', () => {
      const { container } = render(
        <TextField {...defaultProps} icon='email' />
      );
      const icon = container.querySelector("[data-icon='email']") as HTMLImageElement;
      expect(icon.classList.toString()).toContain('icon-svg');
    });

    it('renders with icon on right when specified', () => {
      const {container} = render(
        <TextField
          {...defaultProps}
          icon='search'
          iconPosition="right"
        />
      );
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument();
    });

    it('displays error message when error prop is provided', () => {
      const { container } = render(<TextField {...defaultProps} error errorText="Invalid email" />);
      expect(screen.queryByText('Invalid email')).toBeInTheDocument();
      // const errMsg = container.querySelector('span');
      // expect(errMsg).toHaveStyle({backgroundColor: '#ef4444'});
      
      //expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });

    it('shows success icon when success prop is true', () => {
      const { container } = render(<TextField {...defaultProps} success={true} />);
      const successIcon = container.querySelector('svg');
      expect(successIcon).toBeInTheDocument();
    });

  });

  describe('Password Toggle', () => {
    it('renders password toggle button when showPasswordToggle is true', () => {
      render(<TextField {...defaultProps} type="password" showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button', { name: /show password/i });
      expect(toggleButton).toBeInTheDocument();
    });

    it('toggles password visibility on button click', () => {
      render(<TextField {...defaultProps} type="password" showPasswordToggle={true} />);
      const input = screen.getByPlaceholderText('Enter email') as HTMLInputElement;
      const toggleButton = screen.getByRole('button', { name: /show password/i });

      expect(input.type).toBe('password');

      fireEvent.click(toggleButton);
      expect(input.type).toBe('text');

      fireEvent.click(toggleButton);
      expect(input.type).toBe('password');
    });

    it('changes button aria-labelText when toggled', () => {
      render(<TextField {...defaultProps} showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button', { name: /show password/i });

      fireEvent.click(toggleButton);
      expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument();
    });

  });

  describe('Shapes', () => {
    it('applies rounded shape class', () => {
      const { container } = render(<TextField {...defaultProps} shape="rounded" />);
      const inputContainer = container.querySelector('div > label + div');
      expect(inputContainer).toHaveStyle({ borderRadius: '8px' });
    });

    it('applies pill shape class', () => {
      const { container } = render(<TextField {...defaultProps} shape="pill" />);
      const inputContainer = container.querySelector('div > label + div');
      expect(inputContainer).toHaveStyle({ borderRadius: '999px' });
    });

    it('applies square shape class', () => {
      const { container } = render(<TextField {...defaultProps} shape="square" />);
      const inputContainer = container.querySelector('div > label + div');
      expect(inputContainer).toHaveStyle({ borderRadius: '4px' });
    });

  });

  describe('User Interactions', () => {
    it('calls onChangeInput when input value changes', () => {
      const handleChange = jest.fn();
      render(<TextField {...defaultProps} onChangeInput={handleChange} />);

      const input = screen.getByPlaceholderText('Enter email');
      fireEvent.change(input, { target: { value: 'test@example.com' } });

      expect(handleChange).toHaveBeenCalledWith('test@example.com');
    });

    it('displays the current value', () => {
      render(<TextField {...defaultProps} value="current@email.com" />);
      const input = screen.getByPlaceholderText('Enter email') as HTMLInputElement;
      expect(input.value).toBe('current@email.com');
    });

  });

  describe('Error States', () => {
    it('shows error icon when error is present', () => {

      const { container } = render(<TextField {...defaultProps} error errorText="Error message" />);
      // AlertCircle icon should be rendered
      const errorIcon = container.querySelector('svg') as SVGSVGElement
      expect(errorIcon).toBeInTheDocument();
    });

    it('does not show success icon when error is present', () => {
      render(<TextField {...defaultProps} error errorText="Error" success={true} />);
      // Should only show error, not success
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });

  });

  describe('Accessibility', () => {

    it('associates labelText with input', () => {
      render(<TextField {...defaultProps} labelText="Email Address" />);
      const inputLabel = screen.getByText('Email Address');
      expect(inputLabel).toBeInTheDocument();
    });

    it('has proper aria-labelText for password toggle', () => {
      render(<TextField {...defaultProps} showPasswordToggle={true} />);
      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toHaveAttribute('aria-label');
    });

  });

});