import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  themeMode?: 'light' | 'dark';
}

const AllTheProviders = ({
  children,
  themeMode = 'light',
}: {
  children: React.ReactNode;
  themeMode?: 'light' | 'dark';
}) => {
  const activeTheme = themeMode === 'dark' ? darkTheme : lightTheme;
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  { themeMode = 'light', ...options }: CustomRenderOptions = {}
): RenderResult => {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders themeMode={themeMode}>{children}</AllTheProviders>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
