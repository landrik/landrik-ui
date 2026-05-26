/*# ────────────────────────────────────────────────────────────

# src/theme/GlobalStyles.ts

# ────────────────────────────────────────────────────────────*/

import { createGlobalStyle } from 'styled-components';
import type { Theme } from "./theme.types";

import AvertaRegular from '../assets/fonts/Averta/AvertaRegular.ttf';
import AvertaBold from '../assets/fonts/Averta/AvertaBold.ttf';
  

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`

  @font-face {
    font-family: "Averta";
    src: local(${AvertaRegular}),
      url(${AvertaRegular}) format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Averta";
    src: local(${AvertaBold}),
      url(${AvertaBold}) format("truetype");
    font-weight: Bold;
  }

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    /* ── Background ──────────────────────────── */
    --color-bg-page:        ${({ theme }) => theme.color.surface.page};
    --color-bg-subtle:      ${({ theme }) => theme.color.surface.default};
    --color-bg-overlay:     ${({ theme }) => theme.color.surface.overlay};

    /* ── Surface ─────────────────────────────── */
    --color-surface:        ${({ theme }) => theme.color.surface.default};
    --color-surface-raised: ${({ theme }) => theme.color.surface.raised};
    --color-surface-overlay:${({ theme }) => theme.color.surface.overlay};
    --color-surface-sunken: ${({ theme }) => theme.color.surface.sunken};

    /* ── Border ──────────────────────────────── */
    --color-border:         ${({ theme }) => theme.color.border.default};
    --color-border-strong:  ${({ theme }) => theme.color.border.strong};
    --color-border-focus:   ${({ theme }) => theme.color.border.focus};
    --color-border-subtle:  ${({ theme }) => theme.color.border.subtle};

    /* ── Text ────────────────────────────────── */
    --color-text:           ${({ theme }) => theme.color.text.default};
    --color-text-muted:     ${({ theme }) => theme.color.text.muted};
    --color-text-disabled:  ${({ theme }) => theme.color.text.disabled};
    --color-text-on-accent: ${({ theme }) => theme.color.text.onFill};
    --color-text-link:      ${({ theme }) => theme.color.text.link};

    /* ── Accent ──────────────────────────────── */
    --color-accent:         ${({ theme }) => theme.color.accent.bgDefault};
    --color-accent-hover:   ${({ theme }) => theme.color.accent.bgHover};
    --color-accent-subtle:  ${({ theme }) => theme.color.accent.bgSubtle};

    /* ── Status ──────────────────────────────── */
    --color-success:        ${({ theme }) => theme.color.success.bgDefault};
    --color-success-subtle: ${({ theme }) => theme.color.success.bgSubtle};
    --color-warning:        ${({ theme }) => theme.color.warning.bgDefault};
    --color-warning-subtle: ${({ theme }) => theme.color.warning.bgSubtle};
    --color-danger:         ${({ theme }) => theme.color.danger.bgDefault};
    --color-danger-subtle:  ${({ theme }) => theme.color.danger.bgSubtle};
    --color-info:           ${({ theme }) => theme.color.info.bgDefault};
    --color-info-subtle:    ${({ theme }) => theme.color.info.bgSubtle};
  }

   
  html {
    font-family: ${({ theme }) => theme.typography.family.sans};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.family.sans};
    font-size: ${({ theme }) => theme.typography.size.base};
    color: ${({ theme }) => theme.color.text.default};
    background: ${({ theme }) => theme.color.surface.page};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`;