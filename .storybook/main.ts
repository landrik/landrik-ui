/**# ────────────────────────────────────────────────────────────

# .storybook/main.ts

# ────────────────────────────────────────────────────────────*/

import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  async viteFinal(config) {
    config.resolve!.alias = {
      ...config.resolve?.alias,
      "@": path.resolve(__dirname, './src')
    }
    config.plugins = config.plugins ?? []
    config.plugins = config.plugins.filter(
      (p:any) =>!('name' in p && p.name === 'vite:asset')
    );
    config.plugins.push(
      svgr({
        svgrOptions: {
          exportType: 'default',
          jsxRuntime: 'automatic'
        },
        include: '**/*.svg'
      })
    );
    return config
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  staticDirs: ['../dist'],
};

export default config;