import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { FormField } from './FormField';

describe('FormField', () => {
  describe('Rendering & Label Association', () => {
    it('renders label and connects it to the child control via generated id', () => {
      render(
        <FormField 
          label="Email Address"
        >
          <input type="Email" />
        </FormField>
      );

      const input = screen.getByLabelText('Email Address');
      expect(input).toBeInTheDocument();
      expect(input.id).toBeTruthy();
    });

    it('uses custom htmlFor when provided', () => {
      render(
        <FormField label="Username" htmlFor="custom-username-id">
          <input type="text" />
        </FormField>
      );

      const input = screen.getByLabelText('Username');
      expect(input).toHaveAttribute('id', 'custom-username-id');
    });

    it('renders required asterisk when required is true', () => {
      render(
        <FormField label="Full Name" required>
          <input type="text" />
        </FormField>
      );

      const asterisk = screen.getByText('*');
      expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Helper & Error Messages', () => {
    it('renders helperText and links it via aria-describedby', () => {
      render(
        <FormField label="Password" helperText="Must be at least 8 characters">
          <input type="password" />
        </FormField>
      );

      const input = screen.getByLabelText('Password');
      const helper = screen.getByText('Must be at least 8 characters');

      expect(helper).toBeInTheDocument();
      expect(input).toHaveAttribute('aria-describedby', helper.id);
      expect(input).not.toHaveAttribute('aria-invalid');
    });

    it('renders error message with alert role, sets aria-invalid, and hides helperText', () => {
      render(
        <FormField
          label="Email"
          helperText="We will never share your email"
          error="Please enter a valid email"
        >
          <input type="email" />
        </FormField>
      );

      const input = screen.getByLabelText('Email');
      const alert = screen.getByRole('alert');

      expect(alert).toHaveTextContent('Please enter a valid email');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-describedby', alert.id);
      expect(screen.queryByText('We will never share your email')).not.toBeInTheDocument();
    });
  });
});
