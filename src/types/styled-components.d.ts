import 'styled-components';

import type { Theme } from '../theme/theme.types';

//type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
 interface DOMAttributes<T> {
   css?: CSSProp;
 }
}
