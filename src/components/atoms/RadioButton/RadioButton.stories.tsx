import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
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
    defaultValue: 'option1',
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
    defaultValue: 'green',
    color: '#10b981',
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'disabled-option',
    options: [
      { value: 'enabled1', label: 'Enabled Option 1' },
      { value: 'disabled', label: 'Disabled Option', disabled: true },
      { value: 'enabled2', label: 'Enabled Option 2' },
    ],
    defaultValue: 'enabled1',
  },
};

export const GroupDisabled: Story = {
  args: {
    name: 'group-disabled',
    disabled: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    defaultValue: 'option1',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioButton
        name="small"
        options={[{ value: '1', label: 'Small' }]}
        defaultValue="1"
        size="sm"
      />
      <RadioButton
        name="medium"
        options={[{ value: '1', label: 'Medium' }]}
        defaultValue="1"
        size="md"
      />
      <RadioButton
        name="large"
        options={[{ value: '1', label: 'Large' }]}
        defaultValue="1"
        size="lg"
      />
    </div>
  ),
};
