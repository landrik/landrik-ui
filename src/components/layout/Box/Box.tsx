import React, { FC } from 'react';
import { StyledBox } from './Box.styled';
import { BoxProps } from './Box.types';


export const Box: React.FC<BoxProps> = ({ children, as = 'div', ...props }) => {
  return (
    <StyledBox as={as}>
      {children}
    </StyledBox>
  );
};
