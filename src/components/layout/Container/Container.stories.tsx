import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Placeholder } from '@/stories/LayoutPlaceholder';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;



export const Default: Story = {
  render: () => (
    <div style={{ background: '#f3f4f6', padding: '2rem', textAlign: 'center' }}>
      <Container>
        <Placeholder>Container content</Placeholder>
      </Container>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: '#f3f4f6', padding: '2rem', textAlign: 'center' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Small (640px)</h4>
        <Container maxWidth="sm">
          <Placeholder>Small container content</Placeholder>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Medium (768px)</h4>
        <Container maxWidth="md">
          <Placeholder>Medium container content</Placeholder>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Large (1024px)</h4>
        <Container maxWidth="lg">
          <Placeholder>Large container content</Placeholder>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>XL (1280px)</h4>
        <Container maxWidth="xl">
          <Placeholder>XL container content</Placeholder>
        </Container>
      </div>
    </div>
  ),
};

