import { HTMLAttributes, ReactNode } from 'react';

export type HeaderVariant = 'default' | 'primary' | 'secondary' | 'muted';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingAlign = 'left' | 'center' | 'right'


export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
  variant?: HeaderVariant;
  align?: HeadingAlign;
}

