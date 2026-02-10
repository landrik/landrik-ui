// import React from 'react';
// import { Meta, StoryFn } from '@storybook/react';

// import TabItem from './TabItem';
// import TabList, { TabListProps } from './Tablist';

// export default {
//   title: 'atoms/Tabs',
//   component: TabList,
//   subcomponents: { TabItem, TabList }
// } as Meta;

// const Template: StoryFn<TabListProps> = (args) => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   return(
//     <TabList 
//       activeTabIndex={selectedIndex}
//       {...args}
//     >
//       <TabItem label="Tab #1">
//           <p>This is Tab #1</p>
//         </TabItem>
//         <TabItem label="Tab #2">
//           <p>Selected by default, this is tab #2.</p>
//         </TabItem>
//         <TabItem label="Tab #3">
//           <p>Tab #3, the last tab.</p>
//         </TabItem>
//     </TabList>
//   )
// }


// export const Default = {
//   render: Template,
// };


// ========================================
// Tabs.stories.tsx
// ========================================

import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  { label: 'Profile', value: 'profile', content: <div>Profile content goes here</div> },
  { label: 'Settings', value: 'settings', content: <div>Settings content goes here</div> },
  { label: 'Notifications', value: 'notifications', content: <div>Notifications content goes here</div> },
];

export const Line: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'line',
    onChange: (value) => console.log(value),
  },
};

export const Enclosed: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'enclosed',
    onChange: (value) => console.log(value),
  },
};

export const Pills: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: 'profile',
    variant: 'pills',
    onChange: (value) => console.log(value),
  },
};

export const WithDisabled: Story = {
  args: {
    tabs: [
      ...sampleTabs,
      { label: 'Disabled', value: 'disabled', disabled: true, content: <div>Disabled</div> },
    ],
    activeTab: 'profile',
    onChange: (value) => console.log(value),
  },
};


