import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';
import { ICON_REGISTRY, IconName } from '../../../assets/svgs/icons';

const meta:Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
  argTypes:{
    name:{
      control: 'select',
      options: ['home', 'User', 'Settings', 'Mail', 'Heart', 'Star', 'Bell', 'Search'],
    }
  }

} ;

export default meta
type Story = StoryObj<typeof Icon>;

export interface OptionProps {
  value: string;
  label: string;
}

export const Default: Story = {
  args: {
   name: "heart",
   size: 'lg',
  }
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center'}}>
      <Icon name='heart' size='xs' />
      <Icon name='heart' size='sm' />
      <Icon name='heart' size='md' />
      <Icon name='heart' size='lg' />
      <Icon name='heart' size='xl' />
    </div>
  )
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center'}}>
      
      <Icon name='heart' size='md' color='primary' />
      <Icon name='heart' size='md' color='#ef4444' />
      <Icon name='heart' size='md' color='#3b82f6' />
      <Icon name='heart' size='md' color='#10b981' />
      <Icon name='heart' size='md' color='#f59e0b' />
      <Icon name='heart' size='md' color='#8b5cf6' />
    </div>
  )
}

export const Interactive: Story = {
  args: {name: "watch"}
}

export const SearchIcon: Story = {
  args: {name: "watch"}
}

export const ListIcon: Story = {
  //args: {name: "watch"}
  render: () => {
    const iconList = Object.keys(ICON_REGISTRY) as IconName[];
    const [filterOptions] = useState<OptionProps[]>(iconList.map((icon:any) => ({ value: icon, label: icon })))

    return (
      <>
        <div style={{
          display: 'flex',
          gap: '5px',
          boxSizing: 'border-box',
          padding: '10px'
        }}
        >
          <span>Total number of Icons</span> {' '} <span>{iconList.length}</span>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{display: 'flex', gap: 4, width: '1024px', flexDirection: 'column'}}>
            <ul style={{
              display: 'grid',
              gap: '1rem',
              margin: '0px',
              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
              listStyle: '0',
              padding: '0px',
              listStylePosition: 'unset'
            }}>

            { 
              iconList.map((iconName) => (
                <li key={iconName} style={{
                  display:'flex',
                  padding: '16px 0px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  zIndex:10,
                }}>
                  <Icon name={iconName} />
                  {iconName}
                 </li>
              ))
            }
            </ul>
          </div>
        </div>
      </>
    )

  },
}
