import React from "react";
import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
      <Avatar size="2xl" initials="2XL" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar shape="circle" initials="CI" />
      <Avatar shape="rounded" initials="RO" />
      <Avatar shape="square" initials="SQ" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar initials="ON" status="online" />
      <Avatar initials="OF" status="offline" />
      <Avatar initials="AW" status="away" />
      <Avatar initials="BU" status="busy" />
    </div>
  ),
};

export const Fallback: Story = {
  args: {
    initials: 'JD',
    alt: 'John Doe',
  },
};