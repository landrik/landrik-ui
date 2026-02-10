import React from "react";
import {Header} from "./Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },

};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header size="xs">Extra Small Heading (xs)</Header>
      <Header size="sm">Small Heading (sm)</Header>
      <Header size="md">Medium Heading (md)</Header>
      <Header size="lg">Large Heading (lg)</Header>
      <Header size="xl">Extra Large Heading (xl)</Header>
      <Header size="2xl">2XL Heading (2xl)</Header>
      <Header size="3xl">3XL Heading (3xl)</Header>
      <Header size="4xl">4XL Heading (4xl)</Header>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header weight="normal">Normal Weight</Header>
      <Header weight="medium">Medium Weight</Header>
      <Header weight="semibold">Semibold Weight</Header>
      <Header weight="bold">Bold Weight</Header>
    </div>
  ),
};

export const SemanticLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header as="h1" size="3xl">H1 - Main Page Title</Header>
      <Header as="h2" size="2xl">H2 - Section Title</Header>
      <Header as="h3" size="xl">H3 - Subsection Title</Header>
      <Header as="h4" size="lg">H4 - Component Title</Header>
      <Header as="h5" size="md">H5 - Minor Title</Header>
      <Header as="h6" size="sm">H6 - Smallest Title</Header>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header align="left">Left Aligned Heading</Header>
      <Header align="center">Center Aligned Heading</Header>
      <Header align="right">Right Aligned Heading</Header>
    </div>
  ),
};

export const HeroHeading: Story = {
  render: () => (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <Header as="h1" size="4xl" align="center">
        Build amazing products
      </Header>
      <Header as='h2' size='lg' weight='normal' align='center' style={{ marginTop: '1rem', color: '#6b7280' }}>
        Create beautiful user interfaces with our design system
      </Header>
    </div>
  ),
};