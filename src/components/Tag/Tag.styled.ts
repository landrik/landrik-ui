import styled, { css, keyframes } from "styled-components";
import type { DefaultTheme } from "styled-components";
import type {
  $TagStyleProps,
  $TagGroupStyleProps,
  TagColor,
  AccentColor,
} from "./Tag.types";

import type { SpacingIndex } from "@/theme/primitives";

// ─── Motion ───────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
`;

const ripple = keyframes`
  from { transform: scale(0); opacity: 0.35; }
  to   { transform: scale(2.5); opacity: 0; }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;

// ─── Token helpers ────────────────────────────────────────────────────────────

/**
 * Resolves the color group from the flat theme.color map.
 *
 * All TagColor values are direct keys on theme.color:
 *   accent  → theme.color.accent   (AccentColor interface)
 *   neutral → theme.color.neutral  (NeutralColor interface)
 *   success → theme.color.success  (StatusColor interface)
 *   warning → theme.color.warning  (StatusColor interface)
 *   danger  → theme.color.danger   (StatusColor interface)
 *   info    → theme.color.info     (StatusColor interface)
 *
 * Every group exposes the same role keys used by the CSS vars below:
 *   bgSubtle, bgDefault, bgHover, bgActive, border, text, onFill
 */
const resolveScale = (theme: DefaultTheme, color: TagColor) =>
  theme.color[color as keyof typeof theme.color] as {
    bgSubtle:  string;
    bgDefault: string;
    bgHover:   string;
    bgActive:  string;
    border:    string;
    text:      string;
    onFill:    string;
  };

/**
 * Injects all color CSS custom properties for a given TagColor.
 * Variant styles consume these vars — keeping variant logic color-agnostic.
 */
const injectColorVars = ($color: TagColor) => css`
  --tag-bg:       ${({ theme }) => resolveScale(theme, $color).bgSubtle};
  --tag-bg-hover: ${({ theme }) => resolveScale(theme, $color).bgHover};
  --tag-border:   ${({ theme }) => resolveScale(theme, $color).border};
  --tag-text:     ${({ theme }) => resolveScale(theme, $color).text};
  --tag-solid:    ${({ theme }) => resolveScale(theme, $color).bgDefault};
  --tag-contrast: ${({ theme }) => resolveScale(theme, $color).onFill};
`;

// ─── Size map ─────────────────────────────────────────────────────────────────
// spacing is a readonly number[] — append px for CSS output.

const sizeStyles = {
  sm: css`
    padding:       ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[2]}px;
    font-size:     ${({ theme }) => theme.typography.size.xs};
    border-radius: ${({ theme }) => theme.radius.sm};
    gap:           ${({ theme }) => theme.spacing[4]}px;
  `,
  md: css`
    padding:       ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[4]}px;
    font-size:     ${({ theme }) => theme.typography.size.sm};
    border-radius: ${({ theme }) => theme.radius.md};
    gap:           ${({ theme }) => theme.spacing[4]}px;
  `,
  lg: css`
    padding:       ${({ theme }) => theme.spacing[3]}px ${({ theme }) => theme.spacing[6]}px;
    font-size:     ${({ theme }) => theme.typography.size.base};
    border-radius: ${({ theme }) => theme.radius.lg};
    gap:           ${({ theme }) => theme.spacing[12]}px;
  `,
};

// ─── Variant map ──────────────────────────────────────────────────────────────

const variantStyles = {
  filled: css`
    background: var(--tag-solid);
    color:      var(--tag-contrast);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      filter: brightness(1.08);
    }
  `,
  soft: css`
    background: var(--tag-bg);
    color:      var(--tag-text);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg-hover);
    }
  `,
  outlined: css`
    background: transparent;
    color:      var(--tag-text);
    border:     1px solid var(--tag-border);

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg);
    }
  `,
  ghost: css`
    background: transparent;
    color:      var(--tag-text);
    border:     1px solid transparent;

    &:hover:not([aria-disabled="true"]) {
      background: var(--tag-bg);
    }
  `,
};

// ─── TagRoot ──────────────────────────────────────────────────────────────────

export const TagRoot = styled.span<$TagStyleProps>`
  /* Color CSS vars */
  ${({ $color }) => injectColorVars($color)}

  /* Layout */
  display:        inline-flex;
  align-items:    center;
  position:       relative;
  overflow:       hidden;
  white-space:    nowrap;
  user-select:    none;
  cursor:         default;
  vertical-align: middle;

  /* Sizing */
  ${({ $size }) => sizeStyles[$size]}

  /* Variant */
  ${({ $variant }) => variantStyles[$variant]}

  /* Font */
  font-family:     ${({ theme }) => theme.typography.family.sans};
  font-weight:     ${({ theme }) => theme.typography.weight.medium};
  line-height:     1;
  letter-spacing:  0.01em;

  /* Transitions */
  transition:
    background    ${({ theme }) => theme.transitions.preset.fast},
    color         ${({ theme }) => theme.transitions.preset.fast},
    border-color  ${({ theme }) => theme.transitions.preset.fast},
    filter        ${({ theme }) => theme.transitions.preset.fast},
    box-shadow    ${({ theme }) => theme.transitions.preset.fast};

  /* Entry animation */
  animation: ${fadeIn} ${({ theme }) => theme.transitions.duration.shorter}ms ease both;
  ${reducedMotion}

  /* Selected state */
  ${({ $selected, $variant }) =>
    $selected &&
    css`
      ${$variant === "filled"
        ? css`filter: brightness(1.12);`
        : css`
            background:   var(--tag-bg-hover);
            border-color: var(--tag-border);
          `}
      box-shadow: 0 0 0 2px var(--tag-border);
    `}

  /* Disabled state */
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity:        0.45;
      pointer-events: none;
    `}

  /* Clickable (role=button) */
  &[role="button"] {
    cursor: pointer;
    &:focus-visible {
      outline:        2px solid var(--tag-border);
      outline-offset: 2px;
    }
  }
`;

// ─── Icon wrappers ────────────────────────────────────────────────────────────

export const TagIconLeft = styled.span`
  display:     inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity:     0.85;

  svg {
    width:  1em;
    height: 1em;
  }
`;

export const TagIconRight = styled.span`
  display:     inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity:     0.85;

  svg {
    width:  1em;
    height: 1em;
  }
`;

// ─── Label ────────────────────────────────────────────────────────────────────

export const TagLabel = styled.span`
  flex:          1 1 auto;
  overflow:      hidden;
  text-overflow: ellipsis;
`;

// ─── Remove button ────────────────────────────────────────────────────────────

export const TagRemoveButton = styled.button`
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  flex-shrink:     0;

  /* Reset */
  padding:       0;
  margin:        0;
  background:    none;
  border:        none;
  cursor:        pointer;
  color:         inherit;
  opacity:       0.6;
  border-radius: 50%;

  /* Size relative to font */
  width:  1.25em;
  height: 1.25em;

  position: relative;
  overflow: hidden;

  transition:
    opacity    ${({ theme }) => theme.transitions.preset.fast},
    background ${({ theme }) => theme.transitions.preset.fast};
  ${reducedMotion}

  &:hover {
    opacity:    1;
    background: ${({ theme }) => theme.color.surface.overlay};
  }

  &:focus-visible {
    outline:        2px solid var(--tag-border);
    outline-offset: 1px;
    opacity:        1;
  }

  /* Ripple pseudo-element */
  &::after {
    content:       "";
    position:      absolute;
    inset:         0;
    margin:        auto;
    width:         100%;
    height:        100%;
    border-radius: 50%;
    background:    currentColor;
    pointer-events: none;
    opacity:       0;
  }

  &:active::after {
    animation: ${ripple} 400ms ease-out forwards;
    ${reducedMotion}
  }

  svg {
    width:          0.75em;
    height:         0.75em;
    pointer-events: none;
  }
`;

// ─── TagGroup ─────────────────────────────────────────────────────────────────

const gapMap = {
  xs: css`gap: ${({ theme }) => theme.spacing[4]}px;`,
  sm: css`gap: ${({ theme }) => theme.spacing[12]}px;`,
  md: css`gap: ${({ theme }) => theme.spacing[6]}px;`,
};

export const TagGroupRoot = styled.div<$TagGroupStyleProps>`
  display:     flex;
  align-items: center;
  flex-wrap:   ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
  ${({ $gap }) => gapMap[$gap]}
`;

// ─── Overflow badge ───────────────────────────────────────────────────────────
// Reuses the neutral color group directly — no TagColor resolution needed.

export const OverflowBadge = styled.span`
  display:         inline-flex;
  align-items:     center;
  padding:         0 ${({ theme }) => theme.spacing[4]}px;
  border-radius:   ${({ theme }) => theme.radius.md};
  font-size:       ${({ theme }) => theme.typography.size.sm};
  font-family:     ${({ theme }) => theme.typography.family.sans};
  font-weight:     ${({ theme }) => theme.typography.weight.medium};
  background:      ${({ theme }) => theme.color.neutral.bgSubtle};
  color:           ${({ theme }) => theme.color.neutral.text};
  border:          1px solid ${({ theme }) => theme.color.neutral.border};
  white-space:     nowrap;
  user-select:     none;
  animation:       ${fadeIn} ${({ theme }) => theme.transitions.duration.shorter}ms ease both;
  ${reducedMotion}
`;