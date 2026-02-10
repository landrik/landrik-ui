// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;


/*# ────────────────────────────────────────────────────────────

# .storybook/preview.tsx

# ────────────────────────────────────────────────────────────*/

import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/theme/GlobalStyles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
