/**
 * theme.types.ts
 *
 * Type contract for the design token system.
 * Import types from here for component prop typing and theme consumption.
 *
 * Usage:
 *   import type { Theme, StatusVariant, ColorGroup } from "@/tokens"
 *
 * DO NOT import runtime values from this file — types only.
 */
import type { Typography, Radius, Shadows, Spacing, Transitions, Breakpoints, ZIndices } from "./primitives";
/** All valid neutral scale steps including 0 (white) */
export type NeutralStep = 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
/** All valid accent (purple) scale steps */
export type AccentStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
/** All valid status ramp steps */
export type StatusStep = 50 | 200 | 400 | 600 | 800 | 950;
/** Elevation-based surface backgrounds */
export interface SurfaceColor {
    /** Root page background */
    page: string;
    /** Default card / panel surface */
    default: string;
    /** Elevated surface — modal, popover, dropdown */
    raised: string;
    /** Recessed area — input bg, code block, well */
    sunken: string;
    /** Scrim behind modals / drawers */
    overlay: string;
}
/** Structural borders and focus rings */
export interface BorderColor {
    /** Lowest-contrast divider */
    subtle: string;
    /** Standard card / input border */
    default: string;
    /** Emphasized separator */
    strong: string;
    /** Keyboard focus ring */
    focus: string;
}
/** Text and icon colors */
export interface TextColor {
    /** Primary body text */
    default: string;
    /** Secondary / supporting text */
    muted: string;
    /** Disabled state — lower contrast than muted */
    disabled: string;
    /** Text placed on a filled / dark background */
    onFill: string;
    /** Default standalone icon fill */
    icon: string;
    link: string;
    linkHover: string;
}
/** Brand accent interactive tokens (amber) */
export interface AccentColor {
    /** Tinted background — highlighted row, tag bg */
    bgSubtle: string;
    /** Filled button / badge background */
    bgDefault: string;
    /** Hover state on filled bg */
    bgHover: string;
    /** Pressed state on filled bg */
    bgActive: string;
    /** Accent-colored border / ring */
    border: string;
    /** Accent text on page bg */
    text: string;
    /** Text / icon on top of bgDefault */
    onFill: string;
}
/** Neutral interactive tokens — ghost / secondary patterns */
export interface NeutralColor {
    /** Ghost button hover bg */
    bgSubtle: string;
    /** Neutral filled bg */
    bgDefault: string;
    bgHover: string;
    bgActive: string;
    border: string;
    text: string;
    /** Text / icon on top of bgDefault */
    onFill: string;
}
/**
 * Status color group.
 * Shared by: success | warning | danger | info.
 * Every role is explicit — consumers never pick a raw scale step.
 */
export interface StatusColor {
    /** Alert / banner background */
    bgSubtle: string;
    /** Filled badge / icon background */
    bgDefault: string;
    /** Input ring, card border */
    border: string;
    /** Body text communicating status */
    text: string;
    /** Icon fill */
    icon: string;
    /** Text / icon placed on bgDefault */
    onFill: string;
}
export interface ColorTokens {
    surface: SurfaceColor;
    border: BorderColor;
    text: TextColor;
    accent: AccentColor;
    neutral: NeutralColor;
    success: StatusColor;
    warning: StatusColor;
    danger: StatusColor;
    info: StatusColor;
}
export interface Theme {
    color: ColorTokens;
    spacing: Spacing;
    radius: Radius;
    typography: Typography;
    shadows: Shadows;
    transitions: Transitions;
    breakpoints: Breakpoints;
    zIndices: ZIndices;
}
/** All top-level color group keys */
export type ColorGroup = keyof ColorTokens;
/** The four status groups */
export type StatusVariant = "success" | "warning" | "danger" | "info";
/** Interactive color groups */
export type InteractiveVariant = "accent" | "neutral";
/** All variants available to components */
export type ThemeVariant = StatusVariant | InteractiveVariant;
/** Role keys within the status group */
export type StatusRole = keyof StatusColor;
/** Role keys within the border group */
export type BorderRole = keyof BorderColor;
/** Role keys within the surface group */
export type SurfaceRole = keyof SurfaceColor;
/** Role keys within the text group */
export type TextRole = keyof TextColor;
/** Infer the role keys for any color group */
export type ColorRole<G extends ColorGroup> = keyof ColorTokens[G];
/** Theme mode */
export type ThemeMode = "light" | "dark";
//# sourceMappingURL=theme.types.d.ts.map