import React, { FC } from 'react';
import { StyledBox } from './Box.styled';
import { BoxProps } from './Box.types';

export const Box: FC<BoxProps> = ({
  children,
  as = 'div',
  p,
  px,
  py,
  m,
  mx,
  my,
  bg,
  radius,
  ...props
}) => {
  return (
    <StyledBox
      as={as}
      $p={p}
      $px={px}
      $py={py}
      $m={m}
      $mx={mx}
      $my={my}
      $bg={bg}
      $radius={radius}
      {...props}
    >
      {children}
    </StyledBox>
  );
};