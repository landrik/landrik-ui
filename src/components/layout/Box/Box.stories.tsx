import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { subtle } from 'crypto';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {
    //padding: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    background: { control: 'select', options: ['transparent', 'subtle', 'surface'] },
    //borderRadius: { control: 'select', options: ['none', 'sm', 'md', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'A foundational Box container with design tokens applied.',
    padding: 4,
    background: 'subtle',
    //borderRadius: 'md',
  },
};

export const WithPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem',textAlign:'center'  }}>
      <Box padding={2} background={'subtle'}>Padding 2 (8px)</Box>
      <Box padding={4} background={'subtle'}>Padding 4 (16px)</Box>
      <Box padding={6} background={'subtle'}>Padding 6 (24px)</Box>
      <Box padding={8} background={'subtle'}>Padding 8 (32px)</Box>
    </div>
  ),
};

export const WithMargin: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', textAlign:'center'  }}>
      <Box margin={4} padding={4} background={'subtle'}>Box with margin 4 (16px) </Box>
      <Box margin={8} padding={4} background={'subtle'}>Box with margin 8 (32px)</Box>
    </div>
  ),
};

export const DirectionalSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignContent: 'center', textAlign:'center' }}>
      <Box paddingX={6} paddingY={2} background="#f3f4f6">
        Horizontal padding 6, Vertical padding 2
      </Box>
      <Box paddingX={2} paddingY={6} background="#e5e7eb">
        Horizontal padding 2, Vertical padding 6
      </Box>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box padding={4} background={'subtle'} radius="none">None</Box>
      <Box padding={4} background={'subtle'} radius="sm">Small</Box>
      <Box padding={4} background={'subtle'} radius="md">Medium</Box>
      <Box padding={4} background={'subtle'} radius="lg">Large</Box>
      <Box padding={4} background={'subtle'} radius="xl">XL</Box>
      <Box padding={4} background={'subtle'} radius="full">Full</Box>
    </div>
  ),
};

export const AsCard: Story = {
  render: () => (
    <Box
      as="article"
      padding={6}
       background={'subtle'}
      radius="lg"
      style={{ border: '1px solid #e5e7eb', maxWidth: '400px' }}
    >
      <h3 style={{ margin: '0 0 1rem 0' }}>Card Title</h3>
      <p style={{ margin: '0', color: '#6b7280' }}>
      This is a card-like component created using the Box component with padding, background, and border radius.
      </p>
    </Box>
  ),
};