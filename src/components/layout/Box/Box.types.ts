import type { HTMLAttributes, ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';
import type { ResponsiveValue } from '@/components/utils/responsive';
import type { SpacingIndex } from '@/theme'; // adjust path if needed

export type BackgroundVariant = 'transparent' | 'subtle' | 'surface';
export type SpaceKey = SpacingIndex;
export type RadiusKey = keyof DefaultTheme['radius'];

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main';
  padding?: ResponsiveValue<SpaceKey>;
  paddingX?: ResponsiveValue<SpaceKey>;
  paddingY?: ResponsiveValue<SpaceKey>;
  margin?: ResponsiveValue<SpaceKey>;
  marginX?: ResponsiveValue<SpaceKey>;
  marginY?: ResponsiveValue<SpaceKey>;
  background?: BackgroundVariant | (string & {});
  radius?: RadiusKey;
  gridArea?: string;
}