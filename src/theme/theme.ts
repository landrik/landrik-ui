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

import 'styled-components';
import {
  palette,
  spacing,
  radius,
  typography,
  shadows,
  transitions,
  breakpoints,
  zIndices,
} from './primitives';

import type { Theme } from './theme.types';

// ── Primitive aliases ─────────────────────────────────────────────────────────
const neutral = palette.primary.neutral;
const accent = palette.primary.accent;
const overlay = palette.primary.overlay;

const success = palette.semantic.success;
const warning = palette.semantic.warning;
const danger = palette.semantic.danger;
const info = palette.semantic.info;

// ── Light Theme ───────────────────────────────────────────────────────────────
export const lightTheme: Theme = {
  color: {
    // Elevation-based surface backgrounds
    surface: {
      page:    neutral[0],       // root page background
      default: neutral[50],      // default card / panel
      raised:  neutral[0],       // elevated — modal, popover
      sunken:  neutral[100],     // recessed — input bg, code block
      overlay: overlay.blackA60, // scrim behind modals / drawers
    },

    // Borders & outlines
    border: {
      subtle:  neutral[100],     // lowest-contrast divider
      default: neutral[200],     // standard card / input border
      strong:  neutral[300],     // emphasized separator
      focus:   accent[500],      // branded keyboard focus ring
    },

    // Text & icons
    text: {
      default:   neutral[900],   // primary body text
      muted:     neutral[500],   // secondary / supporting text (WCAG AA compliant)
      disabled:  neutral[300],   // disabled — lower contrast than muted
      onFill:    neutral[0],     // text on a filled / dark background
      icon:      neutral[500],   // default icon fill
      link:      accent[500],
      linkHover: accent[400],
    },

    // Brand accent (purple)
    accent: {
      bgSubtle:  accent[50],     // tinted bg — highlighted row, tag bg
      bgDefault: accent[500],    // filled button / badge / checkbox bg
      bgHover:   accent[400],    // hover on filled bg
      bgActive:  accent[600],    // pressed on filled bg
      border:    accent[500],    // accent-colored border / ring
      text:      accent[500],    // accent text on page / bgSubtle
      onFill:    neutral[0],     // text / icon on bgDefault
    },

    // Neutral interactive — ghost / secondary patterns
    neutral: {
      bgSubtle:  neutral[100],   // ghost button hover bg
      bgDefault: neutral[400],   // neutral filled bg
      bgHover:   neutral[500],
      bgActive:  neutral[600],
      border:    neutral[300],
      text:      neutral[600],
      onFill:    neutral[900],
    },

    // ── Status tokens ─────────────────────────────────────────────────────────
    success: {
      bgSubtle:  success[50],
      bgDefault: success[600],   // WCAG AA compliant with white onFill text
      border:    success[200],
      text:      success[600],
      icon:      success[600],
      onFill:    neutral[0],
    },

    warning: {
      bgSubtle:  warning[50],
      bgDefault: warning[400],
      border:    warning[200],
      text:      warning[600],
      icon:      warning[600],
      onFill:    neutral[900],   // dark text on amber fill (8.9:1 contrast)
    },

    danger: {
      bgSubtle:  danger[50],
      bgDefault: danger[600],    // WCAG AA compliant with white onFill text
      border:    danger[200],
      text:      danger[600],
      icon:      danger[600],
      onFill:    neutral[0],
    },

    info: {
      bgSubtle:  info[50],
      bgDefault: info[600],      // WCAG AA compliant with white onFill text
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
  grid: { columns: 6 },
  zIndices,
};

// ── Dark Theme ────────────────────────────────────────────────────────────────
export const darkTheme: Theme = {
  ...lightTheme,
  color: {
    surface: {
      page:    neutral[950],     // deepest base background
      default: neutral[900],     // cards & panels sit above page
      raised:  neutral[800],     // modals, popovers & unchecked inputs
      sunken:  neutral[950],     // recessed containers inside cards
      overlay: overlay.blackA60,
    },

    border: {
      subtle:  neutral[800],
      default: neutral[700],
      strong:  neutral[600],
      focus:   accent[400],      // bright purple focus ring in dark mode
    },

    text: {
      default:   neutral[100],
      muted:     neutral[400],   // bumped from 500 → 400 for dark-mode legibility
      disabled:  neutral[600],
      onFill:    neutral[900],
      icon:      neutral[400],
      link:      accent[200],    // high-contrast light purple link
      linkHover: accent[300],
    },

    accent: {
      bgSubtle:  accent[900],    // deep purple tinted bg
      bgDefault: accent[400],    // vibrant purple fill on dark surfaces
      bgHover:   accent[300],    // lightens on hover in dark mode
      bgActive:  accent[500],
      border:    accent[400],
      text:      accent[200],    // high-contrast text on dark surfaces
      onFill:    neutral[0],
    },

    neutral: {
      bgSubtle:  neutral[800],
      bgDefault: neutral[600],
      bgHover:   neutral[500],
      bgActive:  neutral[400],
      border:    neutral[700],
      text:      neutral[300],
      onFill:    neutral[100],
    },

    success: {
      bgSubtle:  success[950],
      bgDefault: success[400],
      border:    success[800],   // subdued dark border instead of bright 200
      text:      success[200],
      icon:      success[400],
      onFill:    neutral[900],
    },

    warning: {
      bgSubtle:  warning[950],
      bgDefault: warning[400],
      border:    warning[800],
      text:      warning[200],
      icon:      warning[400],
      onFill:    neutral[900],
    },

    danger: {
      bgSubtle:  danger[950],
      bgDefault: danger[400],
      border:    danger[800],
      text:      danger[200],
      icon:      danger[400],
      onFill:    neutral[900],
    },

    info: {
      bgSubtle:  info[950],
      bgDefault: info[400],
      border:    info[800],
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

