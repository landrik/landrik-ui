import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Conditional from "./index";

// export default {
//   title: "Components/Utils/Conditional",
//   component: Conditional,
//   parameters: {
//     docs: {
//       description: {
//         component: "A helper component to conditionally render it's content",
//       },
//     },
//   },
// } as Meta;


const meta = {
  title: 'Components/Utils/Conditional',
  component: Conditional,
  
} satisfies Meta<typeof Conditional>;

export default meta;
type Story = StoryObj<typeof Conditional>;

// const Template = ({ condition, renderIf, renderElse }) => (
//   <Conditional
//     condition={condition}
//     renderIf={renderIf}
//     renderElse={renderElse}
//   />
// );

const Template: Story = {
  render: ({ condition, renderIf, renderElse  }) => {
    return (
      <Conditional
        condition={condition}
        renderIf={renderIf}
        renderElse={renderElse}
      />
    );
  },
};

// export const Default = Template.bind({});
// Default.args = {
//   condition: 2 === 1 + 1,
//   renderIf: "if true, render potato",
//   renderElse: "if false, render carrot",
// };

export const Default: Story = {
  ...Template,
  args: {
    condition: 2 === 1 + 1,
    renderIf: "if true, render potato",
    renderElse: "if false, render carrot",
  }
}