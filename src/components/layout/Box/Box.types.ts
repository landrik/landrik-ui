import { HTMLAttributes, ReactNode } from 'react';
//export type BoxVariant = 'primary' | 'secondary' | 'danger';


export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  // as?: keyof JSX.IntrinsicElements;
  // padding?: number | string;
  // paddingX?: number | string;
  // paddingY?: number | string;
  // margin?: number | string;
  // marginX?: number | string;
  // marginY?: number | string;
  // width?: string;
  // maxWidth?: string;
  // height?: string;
  // display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none';
  // backgroundColor?: string;
  // borderRadius?: number | string;

  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main';
  p?: number;
  px?: number;
  py?: number;
  m?: number;
  mx?: number;
  my?: number;
  bg?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

}


