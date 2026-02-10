import styled, { css } from "styled-components";

import { TextSize, TextWeight, TextAlign, TextVariant } from './Text.types';

const sizeStyles: Record<TextSize, ReturnType<typeof css>> = {
  xs: css`font-size: ${p => p.theme.typography.fontSize.xs};`,
  sm: css`font-size: ${p => p.theme.typography.fontSize.sm};`,
  base: css`font-size: ${p => p.theme.typography.fontSize.base};`,
  lg: css`font-size: ${p => p.theme.typography.fontSize.lg};`,
  xl: css`font-size: ${p => p.theme.typography.fontSize.xl};`,
};

const weightStyles: Record<TextWeight, ReturnType<typeof css>> = {
  normal: css`font-weight: ${p => p.theme.typography.fontWeight.normal};`,
  medium: css`font-weight: ${p => p.theme.typography.fontWeight.medium};`,
  semibold: css`font-weight: ${p => p.theme.typography.fontWeight.semibold};`,
  bold: css`font-weight: ${p => p.theme.typography.fontWeight.bold};`,
};

interface StyledTextProps {
  $size: TextSize;
  $weight: TextWeight;
  $align: TextAlign;
  $variant: TextVariant;
  $truncate: boolean;
  $lineClamp?: number;
}

export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-family: ${p => p.theme.typography.fontFamily.sans};
  line-height: ${p => p.theme.typography.lineHeight.normal};
  text-align: ${p => p.$align};

  color: ${p =>
    p.$variant === 'primary' ? p.theme.colors.primary[600] :
    p.$variant === 'secondary' ? p.theme.colors.primary[200] :
    p.$variant === 'muted' ? p.theme.colors.neutral[600] :
    p.$variant === 'error' ? p.theme.colors.semantic.error :
    p.$variant === 'success' ? p.theme.colors.semantic.success :
    p.theme.colors.neutral[900]
  };

  ${p => sizeStyles[p.$size]}
  ${p => weightStyles[p.$weight]}

  ${p => p.$truncate && css`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`}

  ${p => p.$lineClamp && css`display: -webkit-box; -webkit-line-clamp: ${p.$lineClamp}; -webkit-box-orient: vertical; overflow: hidden;`}
`;