import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {layout: 'centered'},
  tags: ['autodocs']
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: { 
    labelText: 'Label text',
    placeholder: 'Placeholder',  
    id: 'test-for',
    isRequired: true,
    shape:'rounded', 
    type:'text',
    isDisabled: false, 
    error: false, 
    errorText: 'Error message', 
    icon: 'useralt', 
    iconPosition: 'left',
    helperText: 'test helper text',
    size: 'medium',
    warnText: 'text warning text',
    onChangeInput:() => void({ }),
    className: 'none',

  },
};

export const withIcon: Story = {
  args: { 
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder', 
    isRequired: true,
    icon: 'lock',
    iconPosition: 'left',
    type: 'password',
    showPasswordToggle:true

  },
};


export const Invalid: Story = {
  args: { 
    ...Default.args,
    labelText: 'Label text',
    placeholder: 'Placeholder', 
    isRequired: true,
    error: true,
    errorText: `Input field can't be empty!`,
    icon: 'alert',
    iconPosition: 'right',
  },
};

export const AllShapes: Story = {
  args:{ ...Default.args},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='rounded' />
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='square' />
      <TextField labelText='Label Text' placeholder='Placeholder' onChangeInput={() => {}} shape='pill' />
    </div>
  )
};




// const Template: StoryObj<typeof TextField> = (args) => <TextField {...args} />;

// export const Default = Template.bind({});

// Default.args = {
//   labelText: 'Label',
//   placeholder: 'Placeholder',
//   name: 'test-name',  
//   id: 'test-for',
//   value: 'localValue',
//   onChange: onChangeInput,
// } ;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: { 
//     primary: true,
//     labelText: 'Label',
//     placeholder: 'Placeholder',
//     name: 'test-name',  
//     htmlFor: 'test-for',
//     value: 'localValue',
//     onChange: onChangeInput,
// }