// import type { Meta, StoryObj } from '@storybook/react-webpack5';

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {Button} from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    shape: 'rounded',
    size:'md',
    onClick: () => void({}),
  }
}

export const Primary: Story = {
  args: { ...Default.args, variant: 'primary', children: 'Click Me'},
};

export const Secondary: Story = {
  args: { ...Default.args, variant: 'secondary', children: 'Click Me'},
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading',
    isLoading: true,
  }
};

export const WithIcon: Story = {
  args: { 
    ...Default.args, 
    variant: 'primary', 
    children: 'Click Me', 
    icon: 'plus', 
  },
};

export const WithIconOnly: Story = {
  args: { 
    ...Default.args, 
    variant: 'primary', 
    children: 'Click Me', 
    icon: 'plus', 
    iconOnly: true,
    shape:'pill'
  },
};


export const WithOnClick: Story = {
  args: { variant: 'primary', children: 'Click Me', onClick: () => alert('Clicked!'), },
};

export const Disabled: Story = {
  args: { 
    variant: 'primary', 
    children: 'Click Me', 
    disabled: true 
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Button size='sm'>Small Button</Button>
      <Button size='md'>Medium Button</Button>
      <Button size='lg'>Large Button</Button>
    </div>
  )
}
