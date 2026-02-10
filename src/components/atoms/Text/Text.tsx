import React, { FC } from 'react';
import { StyledText } from './Text.styled';
import { TextProps } from './Text.types';


export const Text:FC<TextProps> = ({
  children,
  as = 'p',
  size = 'base',
  weight = 'normal',
  align = 'left',
  variant = 'default',
  truncate = false,
  italic = false,
  lineClamp,
  ...props
}) => {
  return (
    <StyledText
      as={as}
      $size={size}
      $weight={weight}
      $align={align}
      $variant={variant}
      $truncate={truncate}
      $lineClamp={lineClamp}
    >
      {children}
    </StyledText>
  );
};
