import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from './Steps';

const meta: Meta<typeof Steps> = {
title: 'Components/Steps',
component: Steps,
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Steps>;

const basicSteps = [
{ title: 'Account Info', description: 'Enter your details' },
{ title: 'Verification', description: 'Verify your email' },
{ title: 'Complete', description: 'Setup complete' },
];

export const Horizontal: Story = {
render: () => {
const [current, setCurrent] = useState(1);


return (
  <div>
    <Steps current={current} steps={basicSteps} />
    <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
      <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
        Previous
      </button>
      <button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
        Next
      </button>
    </div>
  </div>
);


},
};

export const Vertical: Story = {
render: () => {
const [current, setCurrent] = useState(1);


return (
  <div>
    <Steps current={current} steps={basicSteps} direction="vertical" />
    <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
      <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
        Previous
      </button>
      <button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
        Next
      </button>
    </div>
  </div>
);


},
};

export const Clickable: Story = {
render: () => {
const [current, setCurrent] = useState(1);


return (
  <Steps current={current} steps={basicSteps} onChange={setCurrent} clickable />
);


},


}; 


