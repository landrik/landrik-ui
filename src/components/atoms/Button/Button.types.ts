/*# ────────────────────────────────────────────────────────────

# src/components/Button/Button.types.ts

# ────────────────────────────────────────────────────────────*/

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from './Button';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape= 'rounded' | 'square' | 'pill';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;

  textColor?: 'default'| 'white'| 'primary';
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: IconType;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right',
  backgroundColor?: string;
    onClick?: () => void;

}