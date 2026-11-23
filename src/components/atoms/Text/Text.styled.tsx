import styled, { css } from 'styled-components';
import { TextSize, TextWeight, TextAlign, TextVariant } from './Text.types';

const sizeStyles: Record<TextSize, ReturnType<typeof css>> = {
  xs: css`font-size: ${({ theme }) => theme.typography.size.xs};`,
  sm: css`font-size: ${({ theme }) => theme.typography.size.sm};`,
  base: css`font-size: ${({ theme }) => theme.typography.size.base};`,
  lg: css`font-size: ${({ theme }) => theme.typography.size.lg};`,
  xl: css`font-size: ${({ theme }) => theme.typography.size.xl};`,
};

const weightStyles: Record<TextWeight, ReturnType<typeof css>> = {
  normal: css`font-weight: ${({ theme }) => theme.typography.weight.normal};`,
  medium: css`font-weight: ${({ theme }) => theme.typography.weight.medium};`,
  semibold: css`font-weight: ${({ theme }) => theme.typography.weight.semibold};`,
  bold: css`font-weight: ${({ theme }) => theme.typography.weight.bold};`,
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
  font-family: ${({ theme }) => theme.typography.family.sans};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  text-align: ${(p) => p.$align};

  color: ${(p) =>
    p.$variant === 'primary'
      ? p.theme.color.accent.text
      : p.$variant === 'secondary'
        ? p.theme.color.accent.border
        : p.$variant === 'muted'
          ? p.theme.color.text.muted
          : p.$variant === 'error'
            ? p.theme.color.danger.text
            : p.$variant === 'success'
              ? p.theme.color.success.text
              : p.theme.color.text.default};

  ${(p) => sizeStyles[p.$size]}
  ${(p) => weightStyles[p.$weight]}

  ${(p) =>
    p.$truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${(p) =>
    p.$lineClamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${p.$lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;
