import { HTMLAttributes, ReactNode } from 'react';

export type TextVariant = 'default' | 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'subtle' | 'warning' ;
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  as?: 'p' | 'span' | 'div' | 'label';
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  variant?: TextVariant;
  truncate?: boolean;
  lineClamp?: number;
  italic?: boolean;
}
