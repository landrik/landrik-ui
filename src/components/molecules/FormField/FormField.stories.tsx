import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Select } from '../../atoms/Select/Select';
import { CheckBox } from '../../atoms/CheckBox/CheckBox';
import { RadioButton } from '../../atoms/RadioButton/RadioButton';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    helperText: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

const roleOptions = [
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'manager', label: 'Manager' },
];

export const Default: Story = {
  args: {
    label: 'Role',
    helperText: 'Select the role that best describes your position.',
    required: false,
    error: '',
  },
  render: (args) => {
    const [role, setRole] = useState('');
    return (
      <div style={{ width: '320px' }}>
        <FormField {...args}>
          <Select options={roleOptions} value={role} onChange={setRole} />
        </FormField>
      </div>
    );
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    label: 'Department Role',
    required: true,
    helperText: 'This field is required before continuing.',
  },
  render: Default.render,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'Role',
    required: true,
    error: 'Please select a role to continue.',
  },
  render: Default.render,
};

export const WithCheckBox: Story = {
  args: {
    helperText: 'You can unsubscribe at any time in your account settings.',
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <FormField {...args}>
        <CheckBox
          label="Receive product updates"
          checked={checked}
          onChange={setChecked}
        />
      </FormField>
    );
  },
};

export const WithRadioGroup: Story = {
  args: {
    label: 'Notification preference',
    required: true,
    helperText: 'Choose how you want to be notified.',
  },
  render: (args) => {
    const [channel, setChannel] = useState('email');
    return (
      <FormField {...args}>
        <RadioButton
          name="notifications"
          value={channel}
          onChange={setChannel}
          options={[
            { value: 'email', label: 'Email' },
            { value: 'sms', label: 'SMS' },
            { value: 'push', label: 'Push notification' },
          ]}
        />
      </FormField>
    );
  },
};
