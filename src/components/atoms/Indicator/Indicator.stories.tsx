import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Indicator } from './Indicator';

const meta: Meta<typeof Indicator> = {
title: 'Components/Indicator',
component: Indicator,
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const WithNumbers: Story = {
render: () => (
<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
<Indicator content="5">
<button style={{ padding: '0.5rem 1rem' }}>Messages</button>
</Indicator>


  <Indicator content="99+">
    <button style={{ padding: '0.5rem 1rem' }}>Notifications</button>
  </Indicator>
</div>


),
};

export const DotIndicator: Story = {
render: () => (
<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
<Indicator dot>
<button style={{ padding: '0.5rem 1rem' }}>Inbox</button>
</Indicator>


  <Indicator dot variant="success">
    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#e5e7eb' }} />
  </Indicator>
</div>


),
};

export const AllVariants: Story = {
render: () => (
<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
<Indicator content="5" variant="default">
<button>Default</button>
</Indicator>
<Indicator content="5" variant="success">
<button>Success</button>
</Indicator>
<Indicator content="5" variant="warning">
<button>Warning</button>
</Indicator>
<Indicator content="5" variant="error">
<button>Error</button>
</Indicator>
<Indicator content="5" variant="info">
<button>Info</button>
</Indicator>
</div>
),
};