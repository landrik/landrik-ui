import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormGroup } from './FormGroup';
import { FormField } from '../FormField/FormField';
import { TextInput } from '../../atoms/TextInput/TextInput';
import { Select } from '../../atoms/Select/Select';
import { CheckBox } from '../../atoms/CheckBox/CheckBox';

const meta: Meta<typeof FormGroup> = {
  title: 'Molecules/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    description: { control: 'text' },
    direction: {
      control: 'inline-radio',
      options: ['column', 'row'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

/* ── 1. Default FormGroup Template ────────────────────────────────────────── */
export const Default: Story = {
  args: {
    legend: 'Personal Information',
    description: 'Enter your name as it appears on your official ID.',
    direction: 'row',
    disabled: false,
  },
  render: (args) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
      <div style={{ width: '480px', maxWidth: '100%' }}>
        <FormGroup {...args}>
          <FormField>
            <TextInput
              labelText="First name"
              placeholder="Jane"
              isRequired
              value={firstName}
              onChangeInput={setFirstName}
            />
          </FormField>
          <FormField>
            <TextInput
              labelText="Last name"
              placeholder="Doe"
              isRequired
              value={lastName}
              onChangeInput={setLastName}
            />
          </FormField>
        </FormGroup>
      </div>
    );
  },
};

/* ── 2. Login Form ────────────────────────────────────────────────────────── */
export const LoginForm: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleLogin = () => {
      const nextErrors: { email?: string; password?: string } = {};
      if (!email.trim()) nextErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email address';
      if (!password) nextErrors.password = 'Password is required';

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        alert(`Logged in as ${email} (Remember me: ${rememberMe})`);
      }
    };

    return (
      <Form
        title="Welcome back"
        description="Sign in to your account to continue."
        submitLabel="Sign In"
        onSubmit={handleLogin}
      >
        <FormGroup>
          <FormField>
            <TextInput
              type="email"
              labelText="Email"
              placeholder="you@example.com"
              isRequired
              value={email}
              onChangeInput={setEmail}
              error={Boolean(errors.email)}
              errorText={errors.email}
            />
          </FormField>

          <FormField>
            <TextInput
              type="password"
              labelText="Password"
              placeholder="••••••••"
              isRequired
              showPasswordToggle
              value={password}
              onChangeInput={setPassword}
              error={Boolean(errors.password)}
              errorText={errors.password}
            />
          </FormField>

          <FormField>
            <CheckBox
              label="Remember me for 30 days"
              checked={rememberMe}
              onChange={setRememberMe}
            />
          </FormField>
        </FormGroup>
      </Form>
    );
  },
};

/* ── 3. Registration Form ─────────────────────────────────────────────────── */
export const RegistrationForm: Story = {
  render: () => {
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});

    const handleRegister = () => {
      const nextErrors: Partial<Record<keyof typeof values, string>> = {};
      if (!values.firstName.trim()) nextErrors.firstName = 'First name is required';
      if (!values.lastName.trim()) nextErrors.lastName = 'Last name is required';
      if (!values.email.trim()) nextErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Invalid email address';
      if (values.password.length < 8)
        nextErrors.password = 'Password must be at least 8 characters';
      if (values.confirmPassword !== values.password)
        nextErrors.confirmPassword = 'Passwords do not match';
      if (!values.acceptTerms) nextErrors.acceptTerms = 'You must accept the terms to register';

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        alert(`Account created for ${values.firstName} ${values.lastName}`);
      }
    };

    return (
      <Form
        title="Create an account"
        description="Get started with a free account today."
        submitLabel="Create Account"
        onSubmit={handleRegister}
      >
        <FormGroup legend="Personal Details" direction="row">
          <FormField>
            <TextInput
              labelText="First name"
              placeholder="Jane"
              isRequired
              value={values.firstName}
              onChangeInput={(val) => setValues({ ...values, firstName: val })}
              error={Boolean(errors.firstName)}
              errorText={errors.firstName}
            />
          </FormField>

          <FormField>
            <TextInput
              labelText="Last name"
              placeholder="Doe"
              isRequired
              value={values.lastName}
              onChangeInput={(val) => setValues({ ...values, lastName: val })}
              error={Boolean(errors.lastName)}
              errorText={errors.lastName}
            />
          </FormField>
        </FormGroup>

        <FormGroup legend="Account Security">
          <FormField helperText={!errors.email ? "We'll never share your email." : undefined}>
            <TextInput
              type="email"
              labelText="Email"
              placeholder="jane@example.com"
              isRequired
              value={values.email}
              onChangeInput={(val) => setValues({ ...values, email: val })}
              error={Boolean(errors.email)}
              errorText={errors.email}
            />
          </FormField>

          <FormField helperText={!errors.password ? 'Must be at least 8 characters long.' : undefined}>
            <TextInput
              type="password"
              labelText="Password"
              placeholder="••••••••"
              isRequired
              showPasswordToggle
              value={values.password}
              onChangeInput={(val) => setValues({ ...values, password: val })}
              error={Boolean(errors.password)}
              errorText={errors.password}
            />
          </FormField>

          <FormField>
            <TextInput
              type="password"
              labelText="Confirm password"
              placeholder="••••••••"
              isRequired
              showPasswordToggle
              value={values.confirmPassword}
              onChangeInput={(val) => setValues({ ...values, confirmPassword: val })}
              error={Boolean(errors.confirmPassword)}
              errorText={errors.confirmPassword}
            />
          </FormField>

          <FormField error={errors.acceptTerms}>
            <CheckBox
              label="I have read and agree to the Terms of Service"
              checked={values.acceptTerms}
              onChange={(checked) => setValues({ ...values, acceptTerms: checked })}
            />
          </FormField>
        </FormGroup>
      </Form>
    );
  },
};


/* ── 4. Contact Form ──────────────────────────────────────────────────────── */

export const ContactForm: Story = {
  render: () => {
    const [values, setValues] = useState({
      name: '',
      email: '',
      role: '',
      message: '',
      subscribe: false,
    })
    const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});

    const roleOptions = [
      { value: 'developer', label: 'Developer' },
      { value: 'designer', label: 'Designer' },
      { value: 'manager', label: 'Manager' },
    ];

    const handleContactSubmit = () => {
      const nextErrors: Partial<Record<keyof typeof values, string>> = {};
      if (!values.name.trim()) nextErrors.name = 'Name is required';
      if (!values.email.trim()) nextErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email';
      if (!values.role) nextErrors.role = 'Please select a role';
      if (values.message.trim().length < 10)
        nextErrors.message = 'Message must be at least 10 characters';

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        alert(`Message sent from ${values.name}`);
      }
    };

    const handleReset = () => {
      setValues({ name: '', email: '', role: '', message: '', subscribe: false });
      setErrors({});
    };

    return (
      <Form
        title="Contact us"
        description="Fill in the form and we'll get back to you."
        submitLabel="Send Message"
        cancelLabel="Reset"
        onSubmit={handleContactSubmit}
        onCancel={handleReset}
      >
        <FormGroup>
          <FormField>
            <TextInput 
              labelText="Name"
              placeholder="Your name"
              isRequired
              value={values.name}
              onChangeInput={(val) => setValues({ ...values, name: val })}
              error={Boolean(errors.name)}
              errorText={errors.name}
            />
            <TextInput 
             type="email"
              labelText="Email"
              placeholder="you@company.com"
              isRequired
              value={values.email}
              onChangeInput={(val) => setValues({ ...values, email: val })}
              error={Boolean(errors.email)}
              errorText={errors.email}
            />
            <Select
              options={roleOptions}
              value={values.role}
              onChange={(val) => setValues({ ...values, role: val })}
              />
          </FormField>
          <FormField helperText={!errors.message ? 'Tell us a bit about your project.' : undefined}>
            <TextInput
              labelText="Message"
              placeholder="How can we help?"
              isRequired
              value={values.message}
              onChangeInput={(val) => setValues({ ...values, message: val })}
              error={Boolean(errors.message)}
              errorText={errors.message}
            />
            <CheckBox
              label="Subscribe to our newsletter"
              checked={values.subscribe}
              onChange={(checked) => setValues({ ...values, subscribe: checked })}
            />
          </FormField>
        </FormGroup>
      </Form>
    );

  }
};