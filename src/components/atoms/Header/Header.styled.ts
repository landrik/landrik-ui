import styled, { css } from "styled-components";
import { HeaderVariant, HeadingSize, HeadingWeight, HeadingAlign  } from "./Header.types";

const sizeStyles: Record<HeadingSize, ReturnType<typeof css>> = {
  xs: css`font-size: ${({ theme }) => theme.typography.size.xs};`,
  sm: css`font-size: ${({ theme }) => theme.typography.size.sm};`,
  md: css`font-size: ${({ theme }) => theme.typography.size.base};`,
  lg: css`font-size: ${({ theme }) => theme.typography.size.lg};`,
  xl: css`font-size: ${({ theme }) => theme.typography.size.xl};`,
  '2xl': css`font-size: ${({ theme }) => theme.typography.size['2xl']};`,
  '3xl': css`font-size: ${({ theme }) => theme.typography.size['3xl']};`,
  '4xl': css`font-size: ${({ theme }) => theme.typography.size['4xl']};`,
  '5xl': css`font-size: ${({ theme }) => theme.typography.size['5xl']};`,
  '6xl': css`font-size: ${({ theme }) => theme.typography.size['6xl']};`,
};

const weightStyles: Record<HeadingWeight, ReturnType<typeof css>> = {
  normal: css`font-weight: ${({ theme }) => theme.typography.weight.normal};`,
  medium: css`font-weight: ${({ theme }) => theme.typography.weight.medium};`,
  semibold: css`font-weight: ${({ theme }) => theme.typography.weight.semibold};`,
  bold: css`font-weight: ${({ theme }) => theme.typography.weight.bold};`,
};

const alignStyles : Record<HeadingAlign, ReturnType<typeof css>> = {
  left: css`align-items: left; text-align: left;`,
  center: css`align-items: center; text-align: center;`,
  right: css`align-items: right; text-align: right;`,
}


interface StyledHeaderProps {
  $size: HeadingSize;
  $weight: HeadingWeight;
  $variant: HeaderVariant;
  $align: HeadingAlign;
}

export const StyledHeader = styled.h1<StyledHeaderProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.family.sans};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${p =>
    p.$variant === 'primary' ? p.theme.color.accent[700] :
    p.$variant === 'secondary' ? p.theme.color.accent[300] :
    p.$variant === 'muted' ? p.theme.color.neutral[600] :
    p.theme.color.neutral[900]
  };
  ${p => alignStyles[p.$align]};
  ${p => sizeStyles[p.$size]};
  ${p => weightStyles[p.$weight]}
`;