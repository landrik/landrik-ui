// import React from 'react';
// import { Meta, StoryObj } from '@storybook/react';

// import { CheckBox } from './CheckBox';

// const meta = {
//   title: 'Atoms/Checkbox',
//   component: CheckBox,
//   parameters: {layout: 'centered'},
//   tags: ['autodocs']
// } satisfies Meta<typeof CheckBox>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Regular: Story = {
//   args: { 
//     labelText: 'Checkbox',
//     isSelected: true,
//     id: "checkbox_id",
//     name: '',
//     value: '',
//     isDisabled: false
//   },
// };



// ========================================
// Checkbox.stories.tsx
// ========================================

import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Atoms/Checkbox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    onChange: (checked) => console.log(checked),
  },
};

export const Checked: Story = {
  args: {
    label: 'Already accepted',
    checked: true,
    onChange: (checked) => console.log(checked),
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    checked: false,
    indeterminate: true,
    onChange: (checked) => console.log(checked),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    checked: false,
    disabled: true,
    onChange: (checked) => console.log(checked),
  },
};

export const Sizes: Story = {
render: () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <CheckBox label="Small checkbox" checked size="sm" onChange={() => {}} />
    <CheckBox label="Medium checkbox" checked size="md" onChange={() => {}} />
    <CheckBox label="Large checkbox" checked size="lg" onChange={() => {}} />
  </div>
),
};
