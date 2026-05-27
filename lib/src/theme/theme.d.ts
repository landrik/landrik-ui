/**
 * theme.ts
 *
 * Semantic theme objects — maps primitive tokens to meaningful roles.
 * Import lightTheme / darkTheme into ThemeProvider.
 * Import Theme type from theme.types.ts for component prop typing.
 *
 * Token anatomy: color.[group].[role]
 *   group → surface | border | text | accent | neutral | success | warning | danger | info
 *   role  → what it is used for, never what color it is
 */
import type { Theme } from "./theme.types";
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
export declare const theme: {
    readonly light: Theme;
    readonly dark: Theme;
};
//# sourceMappingURL=theme.d.ts.map