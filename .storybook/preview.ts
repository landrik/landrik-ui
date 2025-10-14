import type { Preview } from "@storybook/react-webpack5";
//import "../src/assets/scss/global.scss";

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


