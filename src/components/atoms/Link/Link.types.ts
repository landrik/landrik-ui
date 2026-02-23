import { AnchorHTMLAttributes, ReactNode } from 'react';
import { ICON_REGISTRY, IconName  } from '../../../assets/svgs/icons';

//export type IconType = keyof typeof icons;

export type LinkVariant = 'primary' | 'secondary' | 'subtle' | 'danger';
export type LinkSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: LinkVariant;
  size?: LinkSize;
  underline?: boolean;
  external?: boolean;
  leftIcon?: ReactNode;
  iconPosition?: IconPosition;
  icon?: IconName
}