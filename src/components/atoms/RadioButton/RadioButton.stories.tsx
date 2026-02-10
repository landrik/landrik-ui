
// ========================================
// RadioButton.stories.tsx
// ========================================

import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'default',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    value: 'option1',
    onChange: (value) => console.log(value),
  },
};

export const CustomColor: Story = {
  args: {
    name: 'color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' },
    ],
    value: 'green',
    color: '#10b981',
    onChange: (value) => console.log(value),
  },
};

export const WithDisabled: Story = {
  args: {
    name: 'disabled',
    options: [
      { value: 'enabled1', label: 'Enabled Option 1' },
      { value: 'disabled', label: 'Disabled Option', disabled: true },
      { value: 'enabled2', label: 'Enabled Option 2' },
    ],
    value: 'enabled1',
    onChange: (value) => console.log(value),
  },
};

export const Sizes: Story = {
   render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioButton
        name="small"
        options={[{ value: '1', label: 'Small' }]}
        value="1"
        size="sm"
        onChange={() => {}}
      />
      <RadioButton
        name="medium"
        options={[{ value: '1', label: 'Medium' }]}
        value="1"
        size="md"
        onChange={() => {}}
      />
      <RadioButton
        name="large"
        options={[{ value: '1', label: 'Large' }]}
        value="1"
        size="lg"
        onChange={() => {}}
      />
    </div>
   )
};