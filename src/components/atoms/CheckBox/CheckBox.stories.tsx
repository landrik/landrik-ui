import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribed to newsletter',
    defaultChecked: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom emerald checkbox',
    defaultChecked: true,
    color: '#10b981',
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckBox label="Disabled unchecked" disabled />
      <CheckBox label="Disabled checked" defaultChecked disabled />
      <CheckBox label="Disabled indeterminate" indeterminate disabled />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckBox label="Small checkbox" size="sm" defaultChecked />
      <CheckBox label="Medium checkbox" size="md" defaultChecked />
      <CheckBox label="Large checkbox" size="lg" defaultChecked />
    </div>
  ),
};

export const SelectAllIndeterminate: Story = {
  render: () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({
      analytics: true,
      marketing: false,
      security: false,
    });

    const values = Object.values(selected);
    const allChecked = values.every(Boolean);
    const someChecked = values.some(Boolean) && !allChecked;

    const handleToggleAll = (checked: boolean) => {
      setSelected({
        analytics: checked,
        marketing: checked,
        security: checked,
      });
    };

    const handleToggleItem = (key: string) => (checked: boolean) => {
      setSelected((prev) => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <CheckBox
          label="Select all permissions"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleToggleAll}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingLeft: '24px',
          }}
        >
          <CheckBox
            label="Analytics cookies"
            checked={selected.analytics}
            onChange={handleToggleItem('analytics')}
          />
          <CheckBox
            label="Marketing emails"
            checked={selected.marketing}
            onChange={handleToggleItem('marketing')}
          />
          <CheckBox
            label="Security alerts"
            checked={selected.security}
            onChange={handleToggleItem('security')}
          />
        </div>
      </div>
    );
  },
};
