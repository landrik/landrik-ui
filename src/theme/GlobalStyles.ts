/*# ────────────────────────────────────────────────────────────

# src/theme/GlobalStyles.ts

# ────────────────────────────────────────────────────────────*/

import { createGlobalStyle } from 'styled-components';

import AvertaRegular from '../assets/fonts/Averta/AvertaRegular.ttf';
import AvertaBold from '../assets/fonts/Averta/AvertaBold.ttf';
  

export const GlobalStyles = createGlobalStyle`

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