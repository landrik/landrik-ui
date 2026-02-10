import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {
    title: 'Click to expand',
    children: (
      <p>
      This is the collapsed content. It can contain any React elements,
      including text, images, or other components.
      </p>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    title: 'Default open',
    defaultOpen: true,
    children: <p>This collapse is open by default.</p>,
  },
};

export const NoBorder: Story = {
  args: {
    title: 'No border variant',
    bordered: false,
    children: <p>This collapse has no border.</p>,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled collapse',
    disabled: true,
    children: <p>This content cannot be accessed.</p>,
  },
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
        >
          Toggle from outside: {isOpen ? 'Close' : 'Open'}
        </button>
        <Collapse
          title="Controlled collapse"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <p>This collapse is controlled from outside.</p>
        </Collapse>
      </div>
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Collapse title="Section 1">
        <p>Content for section 1</p>
      </Collapse>
      <Collapse title="Section 2">
        <p>Content for section 2</p>
      </Collapse>
      <Collapse title="Section 3">
        <p>Content for section 3</p>
      </Collapse>
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    title: 'FAQ: How does this work?',
    children: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          This component uses CSS transitions to smoothly animate the height.
        </p>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>It measures content height dynamically</li>
          <li>Supports controlled and uncontrolled modes</li>
          <li>Fully accessible with ARIA attributes</li>
        </ul>
      </div>
    ),
  },
};