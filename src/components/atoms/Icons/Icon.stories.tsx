import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from 'styled-components';
import { Icon } from './Icon';
import { icons, IconName } from '../../../assets/svgs';

const allIconNames = Object.keys(icons) as IconName[];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: allIconNames,
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'heart',
    size: 'lg',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="heart" size="xs" />
      <Icon name="heart" size="sm" />
      <Icon name="heart" size="md" />
      <Icon name="heart" size="lg" />
      <Icon name="heart" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const theme = useTheme();
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Icon name="heart" size="md" color={theme.color.accent.bgDefault} />
        <Icon name="heart" size="md" color="#ef4444" />
        <Icon name="heart" size="md" color="#3b82f6" />
        <Icon name="heart" size="md" color="#10b981" />
        <Icon name="heart" size="md" color="#f59e0b" />
        <Icon name="heart" size="md" color="#8b5cf6" />
      </div>
    );
  },
};

export const Interactive: Story = {
  args: {
    name: 'hand',
    size: 'lg',
    title: 'Clickable hand icon',
    onClick: () => alert('Icon clicked!'),
  },
};

export const SearchIcon: Story = {
  args: {
    name: 'magnifying-glass',
    size: 'lg',
  },
};

export const ListIcon: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const filteredIcons = allIconNames.filter((iconName) =>
      iconName.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div style={{ width: '860px', maxWidth: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 0',
            marginBottom: '12px',
          }}
        >
          <span>
            Showing <strong>{filteredIcons.length}</strong> of {allIconNames.length} icons
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter icons by name..."
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '14px',
              width: '260px',
            }}
          />
        </div>

        <ul
          style={{
            display: 'grid',
            gap: '1rem',
            margin: 0,
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            listStyle: 'none',
            padding: 0,
            textAlign: 'center',
          }}
        >
          {filteredIcons.map((iconName) => (
            <li
              key={iconName}
              style={{
                display: 'flex',
                gap: '8px',
                padding: '16px 8px',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontSize: '12px',
                wordBreak: 'break-word',
              }}
            >
              <Icon name={iconName} size="md" />
              <span>{iconName}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};
