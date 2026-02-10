import React, { FC, ReactNode, AnchorHTMLAttributes } from 'react'
import {Icon} from '../Icons';
//import { icons } from '../../../assets/svgs/icons';

 /*# ────────────────────────────────────────────────────────────

# src/components/Link/Link.tsx

# ────────────────────────────────────────────────────────────*/


import { LinkProps } from './Link.types';
import { StyledLink, IconWrapper } from './Link.styled';

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  underline = false,
  external = false,
  iconPosition = 'right',
  icon,
  ...props
}) => {
const externalProps = external
? { target: '_blank', rel: 'noopener noreferrer' }
: {};

return (
  <StyledLink
    $variant={variant}
    $size={size}
    $underline={underline}
    {...externalProps}
    {...props}
  >

    {icon && iconPosition === 'left' && (<IconWrapper><Icon name={icon} /></IconWrapper>)}
    {children}
    {icon && iconPosition === 'right' && (<IconWrapper><Icon name={icon} /></IconWrapper>)}
  </StyledLink>
);
};

