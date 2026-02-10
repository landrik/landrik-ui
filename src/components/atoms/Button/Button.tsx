import React, { FC } from 'react';
import { StyledButton, IconWrapper, Spinner } from './Button.styled';
import { ReactNode } from 'react';


import {Icon} from '../Icons';
import { icons } from '../../../assets/svgs/icons';

export type IconType = keyof typeof icons;

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape= 'rounded' | 'square' | 'pill';

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant,
  shape?: ButtonShape,
  textColor?: 'default'| 'white'| 'primary';
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconType;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right',
  backgroundColor?: string;
  children?: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

/**
* @author landry.karege
* @function @Button
**/

export const Button:FC<ButtonProps> = ({ 
  size = 'md',
  backgroundColor,
  textColor,
  children = 'Button component',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  variant = 'primary',
  htmlType = 'button',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  onClick, 
  ...props
}) => {



  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
  const showIcon = !isLoading && icon;
  const isIconOnly = iconOnly || (!children && icon)

  return (

    <StyledButton
      $shape={shape}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}  
      $iconOnly={iconOnly}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={iconOnly && typeof children === 'string' ? children : undefined}
      {...props}
    >
      
      { isLoading && <Spinner />}
      { !isIconOnly && showIcon && iconPosition === 'left' && (<IconWrapper><Icon name={icon} /></IconWrapper>)}
      <span className='lk-button__text'>{isIconOnly && showIcon ? <IconWrapper><Icon name={icon} /></IconWrapper> : children}</span>
      {!isIconOnly && showIcon && iconPosition === 'right' && (<IconWrapper><Icon name={icon} /></IconWrapper>)}
      
    </StyledButton>
  )
}

//export default Button;



