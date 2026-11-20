import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormGroup } from './FormGroup';
import { TextInput } from '../../atoms/TextInput/TextInput';
import { Select } from '../../atoms/Select/Select';
import { CheckBox } from '../../atoms/CheckBox/CheckBox';

const meta: Meta<typeof Form> = {
  title: 'Molecules/FormGroup',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

/* ── 1. Login Form ────────────────────────────────────────────────────────── */
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
        </FormGroup>

        <FormGroup>
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
        </FormGroup>

        <FormGroup>
          <CheckBox
            label="Remember me for 30 days"
            checked={rememberMe}
            onChange={setRememberMe}
          />
        </FormGroup>
      </Form>
    );
  },
};

/* ── 2. Registration Form ─────────────────────────────────────────────────── */
export const RegistrationForm: Story = {
  render: () => {
    const [values, setValues] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});

    const handleRegister = () => {
      const nextErrors: Partial<Record<keyof typeof values, string>> = {};
      if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required';
      if (!values.email.trim()) nextErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Invalid email address';
      if (values.password.length < 8)
        nextErrors.password = 'Password must be at least 8 characters';
      if (values.confirmPassword !== values.password)
        nextErrors.confirmPassword = 'Passwords do not match';
      if (!values.acceptTerms) nextErrors.acceptTerms = 'You must accept the terms to register';

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        alert(`Account created for ${values.fullName}`);
      }
    };

    return (
      <Form
        title="Create an account"
        description="Get started with a free account today."
        submitLabel="Create Account"
        onSubmit={handleRegister}
      >
        <FormGroup>
          <TextInput
            labelText="Full name"
            placeholder="Jane Doe"
            isRequired
            value={values.fullName}
            onChangeInput={(val) => setValues({ ...values, fullName: val })}
            error={Boolean(errors.fullName)}
            errorText={errors.fullName}
          />
        </FormGroup>

        <FormGroup helperText={!errors.email ? "We'll never share your email." : undefined}>
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
        </FormGroup>

        <FormGroup helperText={!errors.password ? 'Must be at least 8 characters long.' : undefined}>
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
        </FormGroup>

        <FormGroup>
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
        </FormGroup>

        <FormGroup error={errors.acceptTerms}>
          <CheckBox
            label="I have read and agree to the Terms of Service"
            checked={values.acceptTerms}
            onChange={(checked) => setValues({ ...values, acceptTerms: checked })}
          />
        </FormGroup>
      </Form>
    );
  },
};

/* ── 3. Contact Form ──────────────────────────────────────────────────────── */
export const ContactForm: Story = {
  render: () => {
    const [values, setValues] = useState({
      name: '',
      email: '',
      role: '',
      message: '',
      subscribe: false,
    });
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
          <TextInput
            labelText="Name"
            placeholder="Your name"
            isRequired
            value={values.name}
            onChangeInput={(val) => setValues({ ...values, name: val })}
            error={Boolean(errors.name)}
            errorText={errors.name}
          />
        </FormGroup>

        <FormGroup>
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
        </FormGroup>

        <FormGroup label="Role" required error={errors.role}>
          <Select
            options={roleOptions}
            value={values.role}
            onChange={(val: string) => setValues({ ...values, role: val })}
          />
        </FormGroup>

        <FormGroup helperText={!errors.message ? 'Tell us a bit about your project.' : undefined}>
          <TextInput
            labelText="Message"
            placeholder="How can we help?"
            isRequired
            value={values.message}
            onChangeInput={(val) => setValues({ ...values, message: val })}
            error={Boolean(errors.message)}
            errorText={errors.message}
          />
        </FormGroup>

        <FormGroup>
          <CheckBox
            label="Subscribe to our newsletter"
            checked={values.subscribe}
            onChange={(checked) => setValues({ ...values, subscribe: checked })}
          />
        </FormGroup>
      </Form>
    );
  },
};
