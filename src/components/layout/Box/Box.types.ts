import { HTMLAttributes, ReactNode } from 'react';
//export type BoxVariant = 'primary' | 'secondary' | 'danger';
export type BackgroundVariant = 'transparent' | 'subtle' | 'surface'


export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  // display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none';
  // backgroundColor?: string;
  // borderRadius?: number | string;
  // $borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  // $backgroundColor?: BackgroundVariant;
  // width?: string;
  // maxWidth?: string;
  // height?: string;

  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main';
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  margin?: number;
  marginX?: number;
  marginY?: number;
  background?: BackgroundVariant | (string & {});
  radius?: string;
  
}


