import React from "react";
import { Tooltip } from "./Tooltip";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {layout: 'centered'},
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;


export const AllPlacements: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Tooltip content="Tooltip on top" placement="top">
      <button>Hover me (top)</button>
      </Tooltip>

      <Tooltip content="Tooltip on right" placement="right">
      <button>Hover me (right)</button>
      </Tooltip>


      <Tooltip content="Tooltip on bottom" placement="bottom">
        <button>Hover me (bottom)</button>
      </Tooltip>

      <Tooltip content="Tooltip on left" placement="left">
        <button>Hover me (left)</button>
      </Tooltip>
    </div>
),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <p>
        This is some text with a helpful tooltip{' '}
        <Tooltip content="This provides additional information">
          <span style={{ cursor: 'help', color: '#3b82f6', textDecoration: 'underline' }}>
          ⓘ
          </span>
        </Tooltip>
      </p>
    </div>
  ),
};