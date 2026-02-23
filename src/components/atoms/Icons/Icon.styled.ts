import styled, { ThemeProvider, css } from "styled-components"
import { IconSize } from './Icon.types';

interface StyledIconProps {
  $size: IconSize;
  $color?: string;
  $clickable: boolean;
}

const sizeStyles: Record<IconSize, ReturnType<typeof css>> = {
  xs: css`width: 24px; height: 24px;`,
  sm: css`width: 32px; height: 32px;`,
  md: css`width: 40px; height: 40px;`,
  lg: css`width: 48px; height: 48px;`,
  xl: css`width: 54px; height: 54px;`,
};

export const StyledIcon = styled.svg<StyledIconProps>`
  display: inline-block;
  vertical-align: middle;
  fill: ${p => p.$color || 'currentColor'};
  cursor: ${p => p.$clickable ? 'pointer' : 'default'};
  ${p => sizeStyles[p.$size]}

`;
