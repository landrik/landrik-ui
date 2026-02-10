import React, { FC } from 'react';
import { StyledStack } from './Stack.styled';
import { StackProps } from './Stack.types';



export const Stack:FC<StackProps> = ({
  children,
  direction = 'column',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  ...props
}) => {
  return (
    <StyledStack
      $direction={direction}
      $gap={gap}
      $align={align}
      $justify={justify}
      $wrap={wrap}
    >
      {children}
    </StyledStack>
  );
};