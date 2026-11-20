import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonRow } from './Button.styled';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded', 'pill'],
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    shape: 'rounded',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <ButtonRow>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </ButtonRow>
  ),
};

export const Shapes: Story = {
  render: () => (
    <ButtonRow>
      <Button shape="square">Square</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="pill">Pill</Button>
    </ButtonRow>
  ),
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading',
    isLoading: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    ...Default.args,
    children: 'Add Item',
    icon: 'plus',
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    ...Default.args,
    children: 'Continue',
    icon: 'arrow-right',
    iconPosition: 'right',
  },
};

export const WithIconOnly: Story = {
  args: {
    variant: 'primary',
    'aria-label': 'Add item',
    icon: 'plus',
    iconOnly: true,
    shape: 'pill',
  },
};

export const Disabled: Story = {
  render: () => (
    <ButtonRow>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="danger" disabled>Danger</Button>
    </ButtonRow>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ),
};
