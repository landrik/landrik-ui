import React from 'react';
import { IndicatorProps } from './Indicator.types';
import { IndicatorWrapper, IndicatorBadge } from './Indicator.styled';

export const Indicator: React.FC<IndicatorProps> = ({
  content,
  children,
  variant = 'error',
  size = 'md',
  position = 'top-right',
  dot = false,
  show = true,
}) => {
  return (
    <IndicatorWrapper>
      {children}
      <IndicatorBadge
        $variant={variant}
        $size={size}
        $position={position}
        $dot={dot}
        $show={show}
      >
        {!dot && content}
      </IndicatorBadge>
    </IndicatorWrapper>
  );
};