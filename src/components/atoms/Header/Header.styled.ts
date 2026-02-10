import styled, { css } from "styled-components";
import { HeaderVariant, HeadingSize, HeadingWeight, HeadingAlign  } from "./Header.types";

const sizeStyles: Record<HeadingSize, ReturnType<typeof css>> = {
  xs: css`font-size: ${p => p.theme.typography.fontSize.xs};`,
  sm: css`font-size: ${p => p.theme.typography.fontSize.sm};`,
  md: css`font-size: ${p => p.theme.typography.fontSize.base};`,
  lg: css`font-size: ${p => p.theme.typography.fontSize.lg};`,
  xl: css`font-size: ${p => p.theme.typography.fontSize.xl};`,
  '2xl': css`font-size: ${p => p.theme.typography.fontSize['2xl']};`,
  '3xl': css`font-size: ${p => p.theme.typography.fontSize['3xl']};`,
  '4xl': css`font-size: ${p => p.theme.typography.fontSize['4xl']};`,
  '5xl': css`font-size: ${p => p.theme.typography.fontSize['5xl']};`,
  '6xl': css`font-size: ${p => p.theme.typography.fontSize['6xl']};`,
};

const weightStyles: Record<HeadingWeight, ReturnType<typeof css>> = {
  normal: css`font-weight: ${p => p.theme.typography.fontWeight.normal};`,
  medium: css`font-weight: ${p => p.theme.typography.fontWeight.medium};`,
  semibold: css`font-weight: ${p => p.theme.typography.fontWeight.semibold};`,
  bold: css`font-weight: ${p => p.theme.typography.fontWeight.bold};`,
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
  font-family: ${p => p.theme.typography.fontFamily.sans};
  line-height: ${p => p.theme.typography.lineHeight.tight};
  letter-spacing: ${p => p.theme.typography.letterSpacing.tight};
  color: ${p =>
    p.$variant === 'primary' ? p.theme.colors.primary[700] :
    p.$variant === 'secondary' ? p.theme.colors.primary[300] :
    p.$variant === 'muted' ? p.theme.colors.neutral[600] :
    p.theme.colors.neutral[900]
  };
  ${p => alignStyles[p.$align]};
  ${p => sizeStyles[p.$size]};
  ${p => weightStyles[p.$weight]}
`;