import React, { FC, ReactNode, AnchorHTMLAttributes } from 'react'
import {Icon} from '../Icons';
import { Button } from '../Button';
//import { ICON_REGISTRY, IconName  } from '../../../assets/svgs/icons';

 /*# ────────────────────────────────────────────────────────────

# src/components/Link/Link.tsx

# ────────────────────────────────────────────────────────────*/


import { LinkProps } from './Link.types';
import { StyledLink, IconWrapper } from './Link.styled';

export const Link: React.FC<LinkProps> = (props) => {

  const {
    children,
    variant = 'primary',
    size = 'md',
    underline = false,
    disabled = false,
    isExternal = false,
    iconPosition = 'right',
    icon,
    isButton = false,
    ...rest  } = props as any

  const externalProps = isExternal
  ? { target: '_blank', rel: 'noopener noreferrer' }
  : {};

  const content = (
    <>
     {icon && iconPosition === 'left' && (<IconWrapper><Icon name={icon} /></IconWrapper>)}
      {children}
     {icon && iconPosition === 'right' && (<IconWrapper><Icon name={icon} /></IconWrapper>)} 
    </>
  )

  if(isButton){
    return(
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        {...rest}
      >
        {content}
      </Button>
    )
  }

  return (
    <StyledLink
      $variant={variant}
      $size={size}
      $underline={underline}
      {...externalProps}
      {...rest}
    >
      {content}
    </StyledLink>
  );
};

