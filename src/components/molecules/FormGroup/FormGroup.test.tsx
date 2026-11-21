import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form, FormGroup } from './FormGroup';
import { FormField } from '../FormField/FormField';

describe('FormGroup & Form', () => {
  describe('FormGroup', () => {
    it('renders legend, description, and grouped fields inside a fieldset', () => {
      render(
        <FormGroup legend="Profile Details" description="Public information on your profile">
          <FormField label="Display Name">
            <input type="text" />
          </FormField>
        </FormGroup>
      );

      const group = screen.getByRole('group', { name: 'Profile Details' });
      expect(group).toBeInTheDocument();
      expect(screen.getByText('Public information on your profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Display Name')).toBeInTheDocument();
    });

    it('disables all child form controls when disabled is true', () => {
      render(
        <FormGroup legend="Locked Section" disabled>
          <FormField label="First Name">
            <input type="text" />
          </FormField>
          <FormField label="Last Name">
            <input type="text" />
          </FormField>
        </FormGroup>
      );

      expect(screen.getByLabelText('First Name')).toBeDisabled();
      expect(screen.getByLabelText('Last Name')).toBeDisabled();
    });
  });

  describe('Form', () => {
    it('renders title, description, footer, and default Submit button', () => {
      render(
        <Form
          title="Contact Us"
          description="Send us a message"
          footer={<span>Need urgent help? Call support.</span>}
          onSubmit={jest.fn()}
        >
          <FormField label="Subject">
            <input type="text" />
          </FormField>
        </Form>
      );

      expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
      expect(screen.getByText('Send us a message')).toBeInTheDocument();
      expect(screen.getByText('Need urgent help? Call support.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute('type', 'submit');
    });

    it('calls onSubmit when the submit button is clicked', async () => {
      const user = userEvent.setup();
      const handleSubmit = jest.fn();

      render(
        <Form title="Login" submitLabel="Sign In" onSubmit={handleSubmit}>
          <FormField label="Email">
            <input type="email" />
          </FormField>
        </Form>
      );

      await user.click(screen.getByRole('button', { name: 'Sign In' }));
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('renders Cancel button and triggers onCancel without submitting the form', async () => {
      const user = userEvent.setup();
      const handleSubmit = jest.fn();
      const handleCancel = jest.fn();

      render(
        <Form
          title="Edit Profile"
          submitLabel="Save"
          cancelLabel="Discard"
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        >
          <FormField label="Bio">
            <input type="text" />
          </FormField>
        </Form>
      );

      const cancelButton = screen.getByRole('button', { name: 'Discard' });
      expect(cancelButton).toHaveAttribute('type', 'button');

      await user.click(cancelButton);
      expect(handleCancel).toHaveBeenCalledTimes(1);
      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('disables Submit and Cancel buttons when isSubmitting is true', () => {
      render(
        <Form title="Register" isSubmitting onSubmit={jest.fn()} onCancel={jest.fn()}>
          <FormField label="Email">
            <input type="email" />
          </FormField>
        </Form>
      );

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      const cancelButton = screen.getByRole('button', { name: 'Cancel' });

      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveAttribute('aria-busy', 'true');
      expect(cancelButton).toBeDisabled();
    });
  });
});
