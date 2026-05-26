import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta:Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {layout: 'centered'},
  tags: ['autodocs']
};

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
   icon: 'arrow-right'
   
  }
}

export const asButton: Story = {
  args: {
    isButton: true,
    children: "Website Homepage",
    onClick:()=> alert('Clicked Button'),
    
  }
}

export const asDisabledLink: Story = {
  args: {
    disabled: true,
    children: "Website Homepage",
    href:'http://www.globaldata.com',
    icon: 'arrow-right'
    
  }
}

export const asButtonWithIcon: Story = {
  args: {
    icon: 'arrow-right',
    iconPosition: 'right',
    isButton: true,
    children: "Website Homepage",
    onClick:()=> alert('Clicked Button'),
  }
}


