/*# ────────────────────────────────────────────────────────────

# .storybook/preview.tsx

# ────────────────────────────────────────────────────────────*/

import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '../src/theme';

/**
 * Global decorator — wraps every story with ThemeProvider + GlobalStyles.
 * Storybook's backgrounds toolbar controls the `theme` parameter below.
 */
const withTheme = (Story: React.ComponentType, context: any) => {
  const theme = context.globals.backgrounds?.value === "#0A0A0A" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      
      <div
        style={{
          padding: "32px",
          //background: theme.color.surface.page,
          transition: "background 0.2s ease",
        }}
      >
        <GlobalStyles />
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],

  parameters: {
    // Default backgrounds aligned with your themes
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#0A0A0A" },
      ],
    },

    // Controls: group props by category in the Controls panel
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },

    // Accessibility: run axe on all stories
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "button-name", enabled: true },
        ],
      },
    },

    // Docs: configure the autodoc page
    docs: {
      toc: true, // table of contents in docs pages
    },
  },
    
  // ── Toolbar toggle ────────────────────────────────────────────────────────
  // Adds a Light / Dark button to the Storybook toolbar.
  // Global types for the toolbar
  globalTypes: {
    themeMode: {
      name: "Theme",
      description: "Global theme mode",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun",  title: "Light" },
          { value: "dark",  icon: "moon", title: "Dark"  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    locale: {
      description: "Locale for i18n",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: ["en", "fr"],
        showName: true,
      },
    },
  },
  
};

export default preview;
