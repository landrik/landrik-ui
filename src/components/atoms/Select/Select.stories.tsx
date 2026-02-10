// import React, {useState } from 'react';
// import type { Meta, StoryObj } from '@storybook/react';

// import { Select, Option } from './Select';

// //const [selectedItem, setSelectedItem] = useState<Option | null>(null);
// //const onChange = (selection: Option) => {setSelectedItem(selection)};
// const handleSelect = (id: string) => {
//   console.log(`Selected item with id ${id}`);
// };

// const select_box_options = [
//   { id: 1, value: "chocolate", label: "Chocolate" },
//   { id: 2, value: "vanilla", label: "Vanilla" },
// ];

// const meta = {
//   title: 'Atoms/Select',
//   component: Select,
//   parameters: {layout: 'centered'},
//   tags: ['autodocs']
// } satisfies Meta<typeof Select>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
  
//   args: {
//     title: 'select item',
//     iconDescription: 'arrowdown',
//     selectedId:'1',
//     options:select_box_options,
//     onSelect: handleSelect,
//   }
// }

// ========================================
// Select.stories.tsx
// ========================================

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    options,
    value: '',
    placeholder: 'Select a framework',
    onChange: (value) => console.log(value),
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: 'react',
    onChange: (value) => console.log(value),
  },
};

export const WithError: Story = {
  args: {
    options,
    value: '',
    error: 'Please select an option',
    onChange: (value) => console.log(value),
  },
};

export const Disabled: Story = {
  args: {
    options,
    value: 'react',
    disabled: true,
    onChange: (value) => console.log(value),
  },
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select options={options} value="react" shape="rounded" onChange={() => {}} />
      <Select options={options} value="react" shape="square" onChange={() => {}} />
      <Select options={options} value="react" shape="pill" onChange={() => {}} />
    </div>
  ),
};
