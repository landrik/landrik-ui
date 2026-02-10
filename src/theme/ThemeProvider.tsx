import React, { FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme as defaultTheme } from './theme';
import { Theme } from './theme.types'



export interface ThemeProviderProps {
    children: ReactNode;
    theme?: Theme;
}

export const ThemeProvider:FC<ThemeProviderProps> = ({ children, theme=defaultTheme }) => (
	<StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
);

