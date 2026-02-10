import React from "react";
import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes: {
  as: {
    control: 'select',
    options: ['p', 'span', 'div', 'label'],
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  weight: {
    control: 'select',
    options: ['normal', 'medium', 'semibold', 'bold'],
  },
  variant: {
    control: 'select',
    options: ['default', 'subtle', 'muted', 'error', 'success', 'warning'],
  },
  align: {
    control: 'select',
    options: ['left', 'center', 'right', 'justify'],
  },
},

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleText = 'The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate text styling.';

export const Default: Story = {
  args: {
    children: sampleText,
  },
};

export const AllSizes: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text size="xs">Extra Small Text (xs) - {sampleText}</Text>
      <Text size="sm">Small Text (sm) - {sampleText}</Text>
      <Text size="base">Medium Text (md) - {sampleText}</Text>
      <Text size="lg">Large Text (lg) - {sampleText}</Text>
      <Text size="xl">Extra Large Text (xl) - {sampleText}</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text weight="normal">Normal Weight - {sampleText}</Text>
      <Text weight="medium">Medium Weight - {sampleText}</Text>
      <Text weight="semibold">Semibold Weight - {sampleText}</Text>
      <Text weight="bold">Bold Weight - {sampleText}</Text>
    </div>
  ),
};

export const AllVariants: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text variant="default">Default - {sampleText}</Text>
      <Text variant="subtle">Subtle - {sampleText}</Text>
      <Text variant="muted">Muted - {sampleText}</Text>
      <Text variant="error">Error - {sampleText}</Text>
      <Text variant="success">Success - {sampleText}</Text>
      <Text variant="warning">Warning - {sampleText}</Text>
    </div>
  ),
};

export const Alignment: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text align="left">{sampleText}</Text>
      <Text align="center">{sampleText}</Text>
      <Text align="right">{sampleText}</Text>
      <Text align="justify">{sampleText}</Text>
    </div>
  ),
};

export const Italic: Story = {
  args: {
    children: sampleText,
    italic: true,
  },
};

export const Truncate: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ maxWidth: '300px', border: '1px solid #e5e7eb', padding: '1rem' }}>
      <Text truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width
      </Text>
    </div>
  ),
};

export const AsLabel: Story = {
  args:{ ...Default.args},
  render: () => (
    <div>
      <Text as="label" weight="medium" size="sm">
      Email Address
      </Text>
      <input type="email" style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%' }} />
    </div>
  ),
};
