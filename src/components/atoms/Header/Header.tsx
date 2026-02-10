import React, { FC } from 'react';
  

import { HeaderProps } from './Header.types';
import { StyledHeader } from './Header.styled';

export const Header:FC<HeaderProps> = ({
  children,
  as = 'h2',
  size = '2xl',
  weight = 'bold',
  variant = 'default',
  ...props
}) => {
  return (
  <StyledHeader
    as={as}
    $size={size}
    $weight={weight}
    $variant={variant}
  >
    {children}
  </StyledHeader>
  );
}; 