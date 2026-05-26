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

import {
  palette,
  spacing,
  radius,
  typography,
  shadows,
  transitions,
  breakpoints,
  zIndices,
} from "./primitives";

import type { Theme } from "./theme.types";

// ── Primitive aliases ─────────────────────────────────────────────────────────
const { neutral, accent, overlay } = palette.primary;
const { success, warning, danger, info } = palette.semantic;


// ── Light Theme ───────────────────────────────────────────────────────────────
export const lightTheme: Theme = {
  color: {

    // Elevation-based surface backgrounds
    surface: {
      page:    neutral[0],          // root page background
      default: neutral[50],         // default card / panel
      raised:  neutral[0],          // elevated — modal, popover
      sunken:  neutral[100],        // recessed — input bg, code block
      overlay: overlay.blackA60,    // scrim behind modals / drawers
    },

    // Borders & outlines
    border: {
      subtle:  neutral[100],        // lowest-contrast divider
      default: neutral[200],        // standard card / input border
      strong:  neutral[300],        // emphasized separator
      focus:   neutral[500],        // keyboard focus ring
    },

    // Text & icons
    text: {
      default:   neutral[900],      // primary body text
      muted:     neutral[400],      // secondary / supporting text
      disabled:  neutral[300],      // disabled — lower contrast than muted
      onFill:    neutral[0],        // text on a filled / dark background
      icon:      neutral[500],      // default icon fill
      link:      accent[500],
      linkHover: accent[300],
    },

    // Brand accent (purple)
    accent: {
      bgSubtle:  accent[50],        // tinted bg — highlighted row, tag bg
      bgDefault: accent[500],       // filled button / badge bg
      bgHover:   accent[400],       // hover on filled bg
      bgActive:  accent[600],       // pressed on filled bg
      border:    accent[500],       // accent-colored border / ring
      text:      accent[500],       // accent text on page bg
      onFill:    neutral[0],        // text / icon on bgDefault
    },

    // Neutral interactive — ghost / secondary patterns
    neutral: {
      bgSubtle:  neutral[100],      // ghost button hover bg
      bgDefault: neutral[400],      // neutral filled bg
      bgHover:   neutral[500],
      bgActive:  neutral[600],
      border:    neutral[300],
      text:      neutral[600],
      onFill:    neutral[900],
    },

    // ── Status tokens ─────────────────────────────────────────────────────────
    // Explicit roles — consumers never pick a raw numeric step.

    success: {
      bgSubtle:  success[50],       // alert / banner bg
      bgDefault: success[400],      // filled badge / icon bg
      border:    success[200],      // input ring, card border
      text:      success[600],      // body text communicating success
      icon:      success[600],
      onFill:    neutral[0],
    },

    warning: {
      bgSubtle:  warning[50],
      bgDefault: warning[400],
      border:    warning[200],
      text:      warning[600],
      icon:      warning[600],
      onFill:    neutral[0],
    },

    danger: {
      bgSubtle:  danger[50],
      bgDefault: danger[400],
      border:    danger[200],
      text:      danger[600],
      icon:      danger[600],
      onFill:    neutral[0],
    },

    info: {
      bgSubtle:  info[50],
      bgDefault: info[400],
      border:    info[200],
      text:      info[600],
      icon:      info[600],
      onFill:    neutral[0],
    },

  },

  spacing,
  radius,
  typography,
  shadows,
  transitions,
  breakpoints,
  zIndices,
};


// ── Dark Theme ────────────────────────────────────────────────────────────────
export const darkTheme: Theme = {
  ...lightTheme,
  color: {

    surface: {
      page:    neutral[900],
      default: neutral[900],
      raised:  neutral[800],
      sunken:  neutral[900],
      overlay: overlay.blackA60,
    },

    border: {
      subtle:  neutral[800],
      default: neutral[700],
      strong:  neutral[600],
      focus:   accent[400],         // purple focus ring in dark mode
    },

    text: {
      default:   neutral[100],
      muted:     neutral[500],
      disabled:  neutral[700],
      onFill:    neutral[900],
      icon:      neutral[400],
      link:      accent[300],
      linkHover: accent[200],
    },

    accent: {
      bgSubtle:  accent[900],       // dark-mode tinted bg
      bgDefault: accent[500],
      bgHover:   accent[400],
      bgActive:  accent[600],
      border:    accent[400],
      text:      accent[200],
      onFill:    neutral[0],
    },

    neutral: {
      bgSubtle:  neutral[800],
      bgDefault: neutral[600],
      bgHover:   neutral[500],
      bgActive:  neutral[400],
      border:    neutral[700],
      text:      neutral[400],
      onFill:    neutral[100],
    },

    success: {
      bgSubtle:  success[950],
      bgDefault: success[400],
      border:    success[200],
      text:      success[200],
      icon:      success[400],
      onFill:    neutral[900],
    },

    warning: {
      bgSubtle:  warning[950],
      bgDefault: warning[400],
      border:    warning[200],
      text:      warning[200],
      icon:      warning[400],
      onFill:    neutral[900],
    },

    danger: {
      bgSubtle:  danger[950],
      bgDefault: danger[400],
      border:    danger[200],
      text:      danger[200],
      icon:      danger[400],
      onFill:    neutral[900],
    },

    info: {
      bgSubtle:  info[950],
      bgDefault: info[400],
      border:    info[200],
      text:      info[200],
      icon:      info[400],
      onFill:    neutral[900],
    },

  },
};


export const theme = {
  light: lightTheme,
  dark:  darkTheme,
} as const;