import React from "react";
import { Rating } from "./Rating";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
