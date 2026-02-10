import { create } from '@storybook/theming';
import logoUrl from './static/lk_blue-logo.svg';

export default create({
  base: 'light',
  brandTitle: 'Landrik Design System',
  brandUrl: 'https://design.landrik.com',
  brandImage: logoUrl,
  brandTarget: '_self',

  colorPrimary: '#F27A1A',
  colorSecondary: '#00dfa6',

  // UI
  appBg: '#fff',
  appContentBg: '#fafafa',
  appBorderRadius: 4,
  appBorderColor:'#fafafa',

   // Toolbar Colors
  barTextColor: '#363a41',
  barSelectedColor: '#25b9d7',
  barBg: '#fafafa',

  // Text colors
  textColor: '#2f2a40',
  textInverseColor: 'rgba(255,255,255, 1)',
  textMutedColor: 'rgba(125,88,255,1)',

  //Typography
  fontBase: '"IBM Plex Sans", sans-serif',
  fontCode: '"Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace',

  

  // Form
  inputTextColor: 'black',
  inputBorderRadius: 4,
  
});
