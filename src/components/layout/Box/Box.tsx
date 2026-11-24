import React, { FC } from 'react';
import { StyledBox } from './Box.styled';
import type { BoxProps } from './Box.types';

export const Box: FC<BoxProps> = ({
  children,
  as = 'div',
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  background,
  radius,
  ...props
}) => {
  return (
    <StyledBox
      as={as}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      background={background}
      radius={radius}
      {...props}
    >
      {children}
    </StyledBox>
  );
};