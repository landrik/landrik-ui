import styled, { ThemeProvider, css } from "styled-components";
import { LinkVariant, LinkSize } from "./Link.types";


const variantStyles: Record<LinkVariant, ReturnType<typeof css>> = {
  primary: css`
    color: ${p => p.theme.colors.primary[600]};
    &:hover {
      color: ${p => p.theme.colors.primary[700]};
    }
    &:active {
      color: ${p => p.theme.colors.primary[800]};
    }
  `, 

  secondary: css`
    color: ${p => p.theme.colors.primary[100]};
    &:hover {
      color: ${p => p.theme.colors.primary[300]};
    }
  `, 

  subtle: css`
    color: ${p => p.theme.colors.neutral[700]};
    &:hover {
      color: ${p => p.theme.colors.neutral[900]};
    }
  `, 

  danger: css`
    color: ${p => p.theme.colors.semantic.error};
    &:hover {
      color: ${p => p.theme.colors.semantic.error};
    }
  `,
};

const sizeStyles: Record<LinkSize, ReturnType<typeof css>> = {
  sm: css`font-size: ${p => p.theme.typography.fontSize.sm}; gap: ${p => p.theme.spacing[1]}px;`,
  md: css`font-size: ${p => p.theme.typography.fontSize.base}; gap: ${p => p.theme.spacing[2]}px;`,
  lg: css`font-size: ${p => p.theme.typography.fontSize.lg}; gap: ${p => p.theme.spacing[2]}px;`,
};

export const StyledLink = styled.a<{
  $variant: LinkVariant;
  $size: LinkSize;
  $underline: boolean;
}>`
  display: inline-flex;
  align-items: center;
  font-family: ${p => p.theme.typography.fontFamily.sans};
  font-weight: ${p => p.theme.typography.fontWeight.medium};
  text-decoration: ${p => p.$underline ? 'underline' : 'none'};
  transition: all ${p => p.theme.transitions.duration.base} ${p => p.theme.transitions.timing.easeInOut};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.primary[500]};
    outline-offset: 2px;
    border-radius: ${p => p.theme.radii.sm};
  }
  &:hover {
    text-decoration: ${p => p.$underline ? 'underline' : 'none'};
  }  

  ${p => variantStyles[p.$variant]}
  ${p => sizeStyles[p.$size]}
  
`;

export const IconWrapper = styled.span`display: inline-flex; align-items: center;`;