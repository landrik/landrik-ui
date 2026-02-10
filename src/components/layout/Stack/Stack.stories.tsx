
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import {Box} from '../Box';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  parameters: {layout: 'centered'},
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const DemoBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box p={4} bg="#e0f2fe" radius="md" style={{ border: '1px solid #bae6fd' }}>
  {children}
  </Box>
);

export const Vertical: Story = {
  render: () => (
    <Stack direction="column" gap={4}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Gap 2 (8px)</h4>
        <Stack direction="row" gap={2}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Gap 4 (16px)</h4>
        <Stack direction="row" gap={4}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Gap 8 (32px)</h4>
        <Stack direction="row" gap={8}>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        </Stack>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Align Start</h4>
        <Stack direction="row" gap={4} align="start" style={{ height: '120px', border: '1px dashed #212121' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium<br/>Height</DemoBox>
          <DemoBox>Tall<br/>Content<br/>Here</DemoBox>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Align Center</h4>
        <Stack direction="row" gap={4} align="center" style={{ height: '120px', border: '1px dashed #212121' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium<br/>Height</DemoBox>
          <DemoBox>Tall<br/>Content<br/>Here</DemoBox>
        </Stack>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Align End</h4>
        <Stack direction="row" gap={4} align="end" style={{ height: '120px', border: '1px dashed #212121' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium<br/>Height</DemoBox>
          <DemoBox>Tall<br/>Content<br/>Here</DemoBox>
        </Stack>
      </div>
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4 style={{ marginBottom: '1rem' }}>Justify Start</h4>
      <Stack direction="row" gap={4} justify="start" style={{ border: '1px dashed #212121', padding: '1rem' }}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      </Stack>
    </div>
    <div>
    <h4 style={{ marginBottom: '1rem' }}>Justify Center</h4>
    <Stack direction="row" gap={4} justify="center" style={{ border: '1px dashed #212121', padding: '1rem' }}>
    <DemoBox>Item 1</DemoBox>
    <DemoBox>Item 2</DemoBox>
    <DemoBox>Item 3</DemoBox>
    </Stack>
    </div>
    <div>
    <h4 style={{ marginBottom: '1rem' }}>Justify Between</h4>
    <Stack direction="row" gap={4} justify="between" style={{ border: '1px dashed #212121', padding: '1rem' }}>
    <DemoBox>Item 1</DemoBox>
    <DemoBox>Item 2</DemoBox>
    <DemoBox>Item 3</DemoBox>
    </Stack>
    </div>
  </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Stack direction="row" gap={4} wrap style={{ maxWidth: '400px', border: '1px dashed #212121', padding: '1rem' }}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Stack>
  ),
};

