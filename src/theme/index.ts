/*# ────────────────────────────────────────────────────────────

# src/theme/index.ts

# ────────────────────────────────────────────────────────────*/


// Export the default theme object
export { theme, default as defaultTheme } from './theme';

// Export GlobalStyles
export { GlobalStyles } from './GlobalStyles';

// Export ALL type definitions
export type { Theme, ThemeConfig, ColorShades, NeutralColors, SemanticColors, Spacing, Typography, Shadows, Transitions, Breakpoints, ZIndices  } from './theme.types';

//Export ThemeProvider component
export { ThemeProvider } from './ThemeProvider';
export type { ThemeProviderProps } from './ThemeProvider'
