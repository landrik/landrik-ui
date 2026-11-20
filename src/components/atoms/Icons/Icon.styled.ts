import styled, { css } from 'styled-components';
import { IconSize } from './Icon.types';

interface StyledIconProps {
  $size: IconSize;
  $color?: string;
  $clickable: boolean;
}

const sizeStyles: Record<IconSize, ReturnType<typeof css>> = {
  xs: css`
    width: 8px;
    height: 8px;
  `,
  sm: css`
    width: 12px;
    height: 12px;
  `,
  md: css`
    width: 20px;
    height: 20px;
  `,
  lg: css`
    width: 32px;
    height: 32px;
  `,
  xl: css`
    width: 40px;
    height: 40px;
  `,
};

export const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${(p) => p.$color || 'currentColor'};
  cursor: ${(p) => (p.$clickable ? 'pointer' : 'inherit')};
  transition: opacity 0.15s ease, color 0.15s ease;
  ${(p) => sizeStyles[p.$size]}

  ${(p) =>
    p.$clickable &&
    css`
      &:hover {
        opacity: 0.75;
      }
    `}

  svg {
    width: 100%;
    height: 100%;
    ${(p) =>
      p.$color &&
      css`
        fill: ${p.$color};
      `}
  }
`;
