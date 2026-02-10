import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
title: 'Layout/Box',
component: Box,
parameters: {layout: 'centered'},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
args: {
  children: 'This is a box',
  p: 4,
  bg: '#f3f4f6',
},
};

export const WithPadding: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box p={2} bg="#f3f4f6">Padding 2 (8px)</Box>
      <Box p={4} bg="#f3f4f6">Padding 4 (16px)</Box>
      <Box p={6} bg="#f3f4f6">Padding 6 (24px)</Box>
      <Box p={8} bg="#f3f4f6">Padding 8 (32px)</Box>
    </div>
  ),
};

export const WithMargin: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc' }}>
      <Box m={4} p={4} bg="#f3f4f6">Box with margin 4 (16px) </Box>
      <Box m={8} p={4} bg="#e5e7eb">Box with margin 8 (32px)</Box>
    </div>
  ),
};

export const DirectionalSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box px={6} py={2} bg="#f3f4f6">
        Horizontal padding 6, Vertical padding 2
      </Box>
      <Box px={2} py={6} bg="#e5e7eb">
        Horizontal padding 2, Vertical padding 6
      </Box>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box p={4} bg="#f3f4f6" radius="none">None</Box>
      <Box p={4} bg="#f3f4f6" radius="sm">Small</Box>
      <Box p={4} bg="#f3f4f6" radius="md">Medium</Box>
      <Box p={4} bg="#f3f4f6" radius="lg">Large</Box>
      <Box p={4} bg="#f3f4f6" radius="xl">XL</Box>
      <Box p={4} bg="#f3f4f6" radius="full">Full</Box>
    </div>
  ),
};

export const AsCard: Story = {
  render: () => (
    <Box
      as="article"
      p={6}
      bg="#ffffff"
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