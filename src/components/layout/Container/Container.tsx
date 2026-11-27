import React, { FC } from 'react';
  import { StyledContainer } from './Container.styled';
  import { ContainerProps } from './Container.types';


export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  center = true,
  paddingX = 4,
  ...props
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      center={center}
      paddingX={paddingX}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};