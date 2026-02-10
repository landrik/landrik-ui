import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;


export const Default: Story = {
  render: () => (
    <div style={{ background: '#f3f4f6' }}>
      <Container>
        <div style={{ background: '#e0f2fe', padding: '2rem', borderRadius: '0.5rem' }}>
          Container content
        </div>
      </Container>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: '#f3f4f6', padding: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Small (640px)</h4>
        <Container size="sm">
          <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '0.5rem' }}>
          Small container content
          </div>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Medium (768px)</h4>
        <Container size="md">
          <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.5rem' }}>
          Medium container content
          </div>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Large (1024px)</h4>
        <Container size="lg">
          <div style={{ background: '#bae6fd', padding: '1rem', borderRadius: '0.5rem' }}>
          Large container content
          </div>
        </Container>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>XL (1280px)</h4>
        <Container size="xl">
          <div style={{ background: '#7dd3fc', padding: '1rem', borderRadius: '0.5rem' }}>
          XL container content
          </div>
        </Container>
      </div>
    </div>
  ),
};

