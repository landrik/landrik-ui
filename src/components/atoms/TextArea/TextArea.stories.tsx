import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded', 'pill'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    resize: {
      control: 'inline-radio',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    error: { control: 'boolean' },
    showCharCount: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    labelText: 'Message',
    placeholder: 'Write your message here...',
    helperText: 'Share as much detail as needed.',
    rows: 4,
  },
  render: (args) => (
    <div style={{ width: '360px' }}>
      <TextArea {...args} />
    </div>
  ),
};

export const WithCharacterCount: Story = {
  args: {
    labelText: 'Bio',
    placeholder: 'Tell us about yourself...',
    maxLength: 200,
    showCharCount: true,
    helperText: 'Keep it brief and clear.',
  },
  render: (args) => {
    const [bio, setBio] = useState('Frontend developer building design systems.');
    return (
      <div style={{ width: '360px' }}>
        <TextArea {...args} value={bio} onChangeInput={setBio} />
      </div>
    );
  },
};

export const WithError: Story = {
  args: {
    labelText: 'Project Description',
    isRequired: true,
    error: true,
    errorText: 'Description must be at least 20 characters long.',
    defaultValue: 'Too short',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    labelText: 'Notes',
    defaultValue: 'This field is currently read-only.',
    isDisabled: true,
  },
  render: Default.render,
};
