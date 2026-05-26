import styled, { ThemeProvider, css } from "styled-components";
import { LinkVariant, LinkSize } from "./Link.types";

interface StyledProps {
  $variant: LinkVariant;
  $size: LinkSize;
  $underline: boolean;
  $disabled: boolean;
}


const variantStyles: Record<LinkVariant, ReturnType<typeof css>> = {
  primary: css`
    color: ${({ theme }) => theme.color.accent[600]};
    &:hover {
      color: ${({ theme }) => theme.color.accent[700]};
    }
    &:active {
      color: ${({ theme }) => theme.color.accent[800]};
    }
  `, 

  secondary: css`
    color: ${({ theme }) => theme.color.accent[100]};
    &:hover {
      color: ${({ theme }) => theme.color.accent[300]};
    }
  `, 

  subtle: css`
    color: ${({ theme }) => theme.color.neutral[700]};
    &:hover {
      color: ${({ theme }) => theme.color.neutral[900]};
    }
  `, 

  danger: css`
    color: ${({ theme }) => theme.color.danger[600]};
    &:hover {
      color: ${({ theme }) => theme.color.danger[600]};
    }
  `,
};

const sizeStyles: Record<LinkSize, ReturnType<typeof css>> = {
  sm: css`font-size: ${({ theme }) => theme.typography.size.sm}; gap: ${({ theme }) => theme.spacing[4]}px;`,
  md: css`font-size: ${({ theme }) => theme.typography.size.base}; gap: ${({ theme }) => theme.spacing[12]}px;`,
  lg: css`font-size: ${({ theme }) => theme.typography.size.lg}; gap: ${({ theme }) => theme.spacing[12]}px;`,
};

export const StyledLink = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  vertical-align: middle;
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  text-decoration: ${p => p.$underline ? 'underline' : 'none'};
  transition: all ${({ theme }) => theme.transitions.duration.base} ${({ theme }) => theme.transitions.preset.base};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent[500]};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
  &:hover {
    text-decoration: ${p => p.$underline ? 'underline' : 'none'};
  }  

  ${({ $disabled })=> $disabled && css`opacity: 0.5; pointer-events: none; cursor: not-allowed`}

  ${p => variantStyles[p.$variant]}
  ${p => sizeStyles[p.$size]}
  
`;

export const IconWrapper = styled.span`display: inline-flex; align-items: center;`;
