import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

} satisfies Meta<typeof Link>;

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   children: "Website Homepage",
   href:'http://www.globaldata.com'
  }
}

export const withIcon: Story = {
  args: {
   children: "Website Homepage",
   href:'http://www.globaldata.com',
   icon: 'arrowrightalt'
   
  }
}


