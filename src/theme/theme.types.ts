

export interface ColorShades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
export interface NeutralColors extends ColorShades {
  0: string;
}
export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}
export interface Colors {
  primary: ColorShades;
  neutral: NeutralColors;
  semantic: SemanticColors;
}
export interface Typography {
  fontFamily: {
    sans: string;
    mono: string;
  };

  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  letterSpacing:{
    tight: number;
    normal: number;
    relaxed: number;
  };
}
export interface Radii {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}
export interface Shadows {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Spacing {}

export interface Transitions {
  duration:{
    shortest: number,
    shorter: number,
    short: number,
    base: number,
    complex: number,
    enteringScreen: number,
    leavingScreen: number,
  }
  easing:{
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string,
  }
  timing:{
    easeInOut: string,
    easeOut: string,
    easeIn: string,
    sharp: string,
  }
  fast: string;
  base: string;
  slow: string;
}
export interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}
export interface ZIndices {
  base: number;
  dropdown: number;
  sticky: number;
  fixed: number;
  modal: number;
  popover: number;
  tooltip: number;
}
export interface Theme {
  colors: Colors;
  typography: Typography;
  radii: Radii;
  shadows: Shadows;
  spacing: number[];
  transitions: Transitions;
  breakpoints: Breakpoints;
  zIndices: ZIndices;
}

//Type for theme prop in ThemeProvider

export type ThemeConfig = Theme | undefined