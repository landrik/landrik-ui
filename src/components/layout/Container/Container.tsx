import React, { FC } from 'react';
  import { StyledContainer } from './Container.styled';
  import { ContainerProps } from './Container.types';


export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  center = true,
  px = 4,
  ...props
}) => {
  return (
    <StyledContainer
      $size={size}
      $center={center}
      $px={px}
    >
      {children}
    </StyledContainer>
  );
};