import React, { FC } from 'react';
import { StyledStack } from './Stack.styled';
import { StackProps } from './Stack.types';



export const Stack:FC<StackProps> = ({
  children,
  direction = 'vertical',
  ...props
}) => {
  return (
    <StyledStack
      direction={direction}
      {...props}
    >
      {children}
    </StyledStack>
  );
};