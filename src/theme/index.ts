// Export GlobalStyles
export { GlobalStyles } from './GlobalStyles';


// 1. Primitive values — raw tokens for any non-component usage (e.g. GlobalStyles, CSS-in-JS utils)
export { palette, spacing, radius, typography, shadows, transitions, breakpoints, zIndices } from './primitives';

// 2. Primitive types — used when typing helper functions that accept token subsets
export type { Palette, Typography, Radius, Spacing, Transitions, Breakpoints, ZIndices, SpacingIndex } from './primitives.ts';

// 3. Theme values — passed into ThemeProvider or used directly in tests/stories
export { lightTheme, darkTheme, theme } from "./theme";

// 4. Theme types — used in component prop types, styled-components, hooks
export type { Theme, ThemeMode, ThemeVariant, ColorTokens, ColorGroup, ColorRole,
  SurfaceColor, BorderColor, TextColor, AccentColor, NeutralColor, StatusColor,
  StatusVariant, InteractiveVariant, StatusRole, BorderRole, SurfaceRole, TextRole,
  NeutralStep, AccentStep, StatusStep } from "./theme.types";

// 5. React — provider and hooks for consuming the theme at runtime
// export { TokenThemeProvider, useThemeMode } from "./ThemeProvider";
// export { useTheme } from "./useTheme";