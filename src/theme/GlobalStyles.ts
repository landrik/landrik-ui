/*# ────────────────────────────────────────────────────────────

# src/theme/GlobalStyles.ts

# ────────────────────────────────────────────────────────────*/

import { createGlobalStyle } from 'styled-components';

import '../assets/fonts/Averta/Averta-Regular.ttf';
import '../assets/fonts/Averta/Averta-Bold.ttf';
  

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Averta";
    src: local('../assets/fonts/Averta/Averta-Regular.ttf'),
      url('../assets/fonts/Averta/Averta-Regular.ttf') format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Averta";
    src: local('../assets/fonts/Averta/Averta-Bold.ttf'),
      url('../assets/fonts/Averta/Averta-Bold.ttf') format("truetype");
    font-weight: Bold;
  }

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${props => props.theme.typography.fontFamily.sans};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.neutral[900]};
    background-color: ${props => props.theme.colors.neutral[0]};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`;