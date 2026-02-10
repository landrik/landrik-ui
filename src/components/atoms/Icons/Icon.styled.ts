import styled, { ThemeProvider, css } from "styled-components"
import { IconSize } from './Icon.types';

interface StyledIconProps {
  $size: IconSize;
  $color?: string;
  $clickable: boolean;
}

const sizeStyles: Record<IconSize, ReturnType<typeof css>> = {
  xs: css`width: 12px; height: 12px;`,
  sm: css`width: 16px; height: 16px;`,
  md: css`width: 20px; height: 20px;`,
  lg: css`width: 24px; height: 24px;`,
  xl: css`width: 32px; height: 32px;`,
};

export const StyledIcon = styled.svg<StyledIconProps>`
  display: inline-block;
  vertical-align: middle;
  fill: ${p => p.$color || 'currentColor'};
  cursor: ${p => p.$clickable ? 'pointer' : 'default'};
  ${p => sizeStyles[p.$size]}

`;
