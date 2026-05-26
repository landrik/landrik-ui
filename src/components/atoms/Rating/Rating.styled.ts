import styled, { css } from "styled-components";
import { RatingSize, RatingProps } from "./Rating.types";


export const RatingContainer = styled.div`display: inline-flex; align-items: center; gap: ${({ theme }) => theme.spacing[12]}px;`;
export const StarsContainer = styled.div`display: inline-flex; gap: ${({ theme }) => theme.spacing[4]}px;`;

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
  transition: transform ${({ theme }) => theme.transitions.preset.fast};

  &:hover:not(:disabled) {
    transform: ${p => p.$readOnly ? 'none' : 'scale(1.1)'};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent[500]};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
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
    fill: ${({ theme }) => theme.color.neutral[300]};
  }

  .star-fill {
    fill: ${p => p.$color};
    clip-path: ${p => `inset(0 ${100 - p.$filled}% 0 0)`};
  }
`;

export const RatingValue = styled.span`
  font-size: ${({ theme }) => theme.typography.size.sm}; 
  font-weight: ${({ theme }) => theme.typography.weight.medium}; 
  color: ${({ theme }) => theme.color.neutral[700]};
`;
