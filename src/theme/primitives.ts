/**
 * primitives.ts
 *
 * Raw design values — the bottom layer of the token system.
 * These are NEVER used directly in components.
 * Always reference semantic tokens from theme.ts instead.
 *
 * Color scale convention:
 *   0      = white / lightest
 *   50–950 = incremental steps (lighter → darker)
 */

// ─── Color Palette ────────────────────────────────────────────────────────────

export const palette = {
  // ── Primary ─────────────────────────────────────────────────────────────────
  // Destructured in theme.ts as:
  //   const { neutral, accent, overlay } = palette.primary

  primary: {
    // Neutral gray scale
    // neutral[0]   → white (#ffffff)
    // neutral[950] → darkest (#090d16)
    neutral: {
      0:   "#ffffff",
      50:  "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#090d16",
    },

    // Brand accent — purple
    // accent[500] → default brand color
    accent: {
      50:  "#f3f1ff", // Soft light-mode subtle tint
      100: "#e4dfff",
      200: "#c7bdff", // High-contrast light purple for dark-mode text & links
      300: "#a594ff", // Dark-mode link hover
      400: "#6c53ff", // Vibrant purple for dark-mode borders, focus rings & active fills
      500: "#1a0596", // Primary brand purple (WCAG AAA with white text)
      600: "#16047d", // Pressed / active state
      700: "#120363",
      800: "#0e024a",
      900: "#140a4a", // Deep purple tint for dark-mode bgSubtle
    },

    // Alpha overlays — named by color + opacity, not a linear scale
    overlay: {
      blackA10: "rgba(0,0,0,0.10)",
      blackA30: "rgba(0,0,0,0.30)",
      blackA60: "rgba(0,0,0,0.60)",
      whiteA10: "rgba(255,255,255,0.10)",
      whiteA20: "rgba(255,255,255,0.20)",
    },
  },

  // ── Semantic ────────────────────────────────────────────────────────────────
  // Feedback and status ramps.
  //   50  → lightest (light-mode bg)
  //   950 → darkest  (dark-mode subtle bg)
  // Destructured in theme.ts as:
  //   const { success, warning, danger, info } = palette.semantic

  semantic: {
    success: {
      50:  "#EDFAF3",
      200: "#A8DFC4",
      400: "#7EC8A4",
      600: "#3A9E70",
      800: "#1A5C3E",
      950: "#0C1F17",
    },

    warning: {
      50:  "#FFF8E6",
      200: "#F5D47A",
      400: "#E6A817",
      600: "#B07D0A",
      800: "#6B4A00",
      950: "#1A1200",
    },

    danger: {
      50:  "#FDEFEF",
      200: "#F0AAAA",
      400: "#E07070",
      600: "#C03A3A",
      800: "#7A1A1A",
      950: "#200A0A",
    },

    info: {
      50:  "#EDF5FA",
      200: "#AACDE0",
      400: "#7AABCF",
      600: "#3A7EA8",
      800: "#1A4E6E",
      950: "#0A1820",
    },
  },
} as const;

// ─── Spacing Scale (4px base) ─────────────────────────────────────────────────
// Access via theme.spacing[4] → 16

export const spacing = [
  0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96,
] as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const radius = {
  none:  "0rem",
  sm:    "0.25rem",
  md:    "0.375rem",
  base:  "0.375rem",
  lg:    "0.5rem",
  xl:    "0.75rem",
  "2xl": "1rem",
  full:  "9999px",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const typography = {
  family: {
    sans: '"Averta", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: "ui-monospace, Menlo, Monaco, monospace",
  },
  size: {
    xs:    "0.75rem",
    sm:    "0.875rem",
    base:  "1rem",
    lg:    "1.125rem",
    xl:    "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  weight: {
    normal:   400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  lineHeight: {
    none:    1,
    tight:   1.25,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
    loose:   2,
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight:   "-0.025em",
    normal:  "0",
    wide:    "0.025em",
    wider:   "0.05em",
    widest:  "0.1em",
  },
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadows = {
  sm:   "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md:   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg:   "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl:   "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const;

// ─── Transitions ──────────────────────────────────────────────────────────────
// Pair with prefers-reduced-motion — see useReducedMotion / GlobalStyles.

export const transitions = {
  duration: {
    shortest:       150,
    shorter:        200,
    short:          250,
    base:           300,
    complex:        375,
    enteringScreen: 225,
    leavingScreen:  195,
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut:   "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn:    "cubic-bezier(0.4, 0, 1, 1)",
    sharp:     "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  // Convenience shorthands — duration + easing pre-combined
  preset: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const breakpoints = {
  sm:    "640px",
  md:    "768px",
  lg:    "1024px",
  xl:    "1280px",
  "2xl": "1536px",
} as const;


// ─── Z-Indices ────────────────────────────────────────────────────────────────

export const zIndices = {
  base:     0,
  dropdown: 1000,
  sticky:   1100,
  fixed:    1200,
  modal:    1300,
  popover:  1400,
  tooltip:  1500,
} as const;

// ─── Primitive Types ──────────────────────────────────────────────────────────
// Explicit interfaces — consumed by theme.types.ts and component prop types.

export type Palette = typeof palette;

export type Spacing = typeof spacing;
// → readonly [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

type TupleIndices<T extends readonly unknown[], Acc extends number[] = []> =
  Acc["length"] extends T["length"]
    ? Acc[number]
    : TupleIndices<T, [...Acc, Acc["length"]]>;

export type NumericSpacingIndex = TupleIndices<Spacing>;
// → 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type SpacingIndex = NumericSpacingIndex | `${NumericSpacingIndex}`;
// Accepts both numeric (gap={4}) and string (gap="4") indices

export interface Typography {
  family: {
    sans: string;
    mono: string;
  };
  size: {
    xs:    string;
    sm:    string;
    base:  string;
    lg:    string;
    xl:    string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
  };
  weight: {
    normal:   number;
    medium:   number;
    semibold: number;
    bold:     number;
  };
  lineHeight: {
    none:    number;
    tight:   number;
    snug:    number;
    normal:  number;
    relaxed: number;
    loose:   number;
  };
  letterSpacing: {
    tighter: string;
    tight:   string;
    normal:  string;
    wide:    string;
    wider:   string;
    widest:  string;
  };
}

export interface Radius {
  none:  string;
  sm:    string;
  md:    string;
  base:  string;
  lg:    string;
  xl:    string;
  "2xl": string;
  full:  string;
}

export interface Shadows {
  sm:   string;
  base: string;
  md:   string;
  lg:   string;
  xl:   string;
}

export interface Transitions {
  duration: {
    shortest:       number;
    shorter:        number;
    short:          number;
    base:           number;
    complex:        number;
    enteringScreen: number;
    leavingScreen:  number;
  };
  easing: {
    easeInOut: string;
    easeOut:   string;
    easeIn:    string;
    sharp:     string;
  };
  preset: {
    fast: string;
    base: string;
    slow: string;
  };
}

export interface Breakpoints {
  sm:    string;
  md:    string;
  lg:    string;
  xl:    string;
  "2xl": string;
}

export interface ZIndices {
  base:     number;
  dropdown: number;
  sticky:   number;
  fixed:    number;
  modal:    number;
  popover:  number;
  tooltip:  number;
}
