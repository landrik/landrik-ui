import React, { FC, ReactNode } from 'react';
import { StyledButton, IconWrapper, Spinner } from './Button.styled';
import { Icon } from '../Icons';
import { IconName } from '../../../assets/svgs';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'rounded' | 'square' | 'pill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  textColor?: 'default' | 'white' | 'primary';
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconName;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  backgroundColor?: string;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  size = 'md',
  backgroundColor,
  textColor,
  children,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  variant = 'primary',
  htmlType = 'button',
  type,
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  onClick,
  ...props
}) => {
  const showIcon = !isLoading && Boolean(icon);
  const isIconOnly = Boolean(iconOnly || (!children && icon));
  const resolvedType = type ?? htmlType;

  return (
    <StyledButton
      type={resolvedType}
      $shape={shape}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $iconOnly={isIconOnly}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      onClick={onClick}
      aria-label={
        props['aria-label'] ??
        (isIconOnly && typeof children === 'string' ? children : undefined)
      }
      {...props}
    >
      {isLoading && <Spinner />}

      {!isIconOnly && showIcon && icon && iconPosition === 'left' && (
        <IconWrapper>
          <Icon name={icon} />
        </IconWrapper>
      )}

      {isIconOnly && showIcon && icon ? (
        <IconWrapper>
          <Icon name={icon} />
        </IconWrapper>
      ) : (
        children && <span className="lk-button__text">{children}</span>
      )}

      {!isIconOnly && showIcon && icon && iconPosition === 'right' && (
        <IconWrapper>
          <Icon name={icon} />
        </IconWrapper>
      )}
    </StyledButton>
  );
};
