/*# ────────────────────────────────────────────────────────────

# .storybook/preview.tsx

# ────────────────────────────────────────────────────────────*/

import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
//import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme, GlobalStyles } from '../src/theme';
import { GridOverlay } from "../src/stories/GridOverlay";

/**
 * Global decorator — wraps every story with ThemeProvider + GlobalStyles.
 * Storybook's backgrounds toolbar controls the `theme` parameter below.
 */


const withTheme = (Story: React.ComponentType, context: any) => {
  const activeTheme = context.globals.theme === "dark" ? darkTheme : lightTheme;
  const showGrid = Boolean(context.globals.showGridOverlay)
  const maxWidthKey = context.globals.gridMaxWidth as string;
  const resolvedMaxWidth = maxWidthKey === "full" ? "100%" : activeTheme.breakpoints[maxWidthKey as keyof typeof activeTheme.breakpoints] ?? "100%";
  return (
    <ThemeProvider theme={activeTheme}>
      
      <div
        style={{
          padding: "32px",
          //background: theme.color.surface.page,
          transition: "background 0.2s ease",
        }}
      >
        <GlobalStyles />
        <GridOverlay show={showGrid} maxWidth={resolvedMaxWidth}>
          <Story />
        </GridOverlay>
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
    theme: {
      name: "Theme",
      description: "Global theme mode for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun",  title: "Light" },
          { value: "dark",  icon: "moon", title: "Dark"  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    showGridOverlay: {
      description: "Toggle layout grod column overlay",
      defaultValue: false,
      toolbar: {
        title: "Grid Overlay",
        icon: "grid",
        items: [
          { value: false, title: "Hide Grid" },
          { value: true, title: "Show 6-Col Grid" },
        ],
        dynamicTitle: true,
      }
    },
    gridMaxWidth: {
      description: "Container maxWidth guide for Grid Overlay",
      defaultValue: "full",
      toolbar: {
        title: "Container Width",
        icon: "grow",
        items: [
          { value: "full", title: "Full (100%)" },
          { value: "sm", title: "sm (640px)" },
          { value: "md", title: "md (768px)" },
          { value: "lg", title: "lg (1024px)" },
          { value: "xl", title: "xl (1280px)" },
          { value: "2xl", title: "2xl (1536px)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  
};

export default preview;
