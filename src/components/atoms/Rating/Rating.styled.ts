import styled, { css } from "styled-components";
import { RatingSize, RatingProps } from "./Rating.types";


export const RatingContainer = styled.div`display: inline-flex; align-items: center; gap: ${p => p.theme.spacing[2]}px;`;
export const StarsContainer = styled.div`display: inline-flex; gap: ${p => p.theme.spacing[1]}px;`;

interface StarButtonProps {
  $size: RatingSize;
  $readOnly: boolean;
}

const sizeStyles: Record<RatingSize, ReturnType<typeof css>> = {
  sm: css`width: 16px; height: 16px;`,
  md: css`width: 24px; height: 24px;`,
  lg: css`width: 32px; height: 32px;`,
};

export const StarButton = styled.button<StarButtonProps>`
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${p => p.$readOnly ? 'default' : 'pointer'};
  transition: transform ${p => p.theme.transitions.fast};

  &:hover:not(:disabled) {
    transform: ${p => p.$readOnly ? 'none' : 'scale(1.1)'};
  }

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.primary[500]};
    outline-offset: 2px;
    border-radius: ${p => p.theme.radii.sm};
  }

  ${p => sizeStyles[p.$size]}

`;

interface StarIconProps {
  $filled: number;
  $color: string;
}

export const StarIcon = styled.svg<StarIconProps>`
  width: 100%;
  height: 100%;

  .star-bg {
    fill: ${p => p.theme.colors.neutral[300]};
  }

  .star-fill {
    fill: ${p => p.$color};
    clip-path: ${p => `inset(0 ${100 - p.$filled}% 0 0)`};
  }
`;

export const RatingValue = styled.span`
  font-size: ${p => p.theme.typography.fontSize.sm}; 
  font-weight: ${p => p.theme.typography.fontWeight.medium}; 
  color: ${p => p.theme.colors.neutral[700]};
`;
