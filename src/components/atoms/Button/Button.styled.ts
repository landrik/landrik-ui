import styled, { css, keyframes } from "styled-components";
import { ButtonShape, ButtonSize, ButtonVariant } from "./Button.types";

const spin = keyframes`to { transform: rotate(360deg); }`;
const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: ${(p) => p.theme.spacing[2]}px ${(p) => p.theme.spacing[3]}px;
    font-size: ${(p) => p.theme.typography.fontSize.sm};
    border-radius: ${(p) => p.theme.radii.md};
  `,
  md: css`
    padding: ${(p) => p.theme.spacing[3]}px ${(p) => p.theme.spacing[4]}px;
    font-size: ${(p) => p.theme.typography.fontSize.base};
    border-radius: ${(p) => p.theme.radii.lg};
  `,
  lg: css`
    padding: ${(p) => p.theme.spacing[4]}px ${(p) => p.theme.spacing[6]}px;
    font-size: ${(p) => p.theme.typography.fontSize.lg};
    border-radius: ${(p) => p.theme.radii.lg};
  `,
};
const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${(p) => p.theme.colors.primary[600]};
    color: ${(p) => p.theme.colors.neutral[0]};

    &:hover:not(:disabled) {
      background-color: ${(p) => p.theme.colors.primary[700]};
    }

    &:active:not(:disabled) {
      background-color: ${(p) => p.theme.colors.primary[800]};
    }
  `,
  secondary: css`
    background-color: ${(p) => p.theme.colors.neutral[200]};
    color: ${(p) => p.theme.colors.neutral[900]};

    &:hover:not(:disabled) {
      background-color: ${(p) => p.theme.colors.neutral[300]};
    }

    &:active:not(:disabled) {
      background-color: ${(p) => p.theme.colors.neutral[400]};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${(p) => p.theme.colors.neutral[700]};
    border: 2px solid ${(p) => p.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${(p) => p.theme.colors.neutral[50]};
      border-color: ${(p) => p.theme.colors.neutral[400]};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${(p) => p.theme.colors.neutral[700]};

    &:hover:not(:disabled) {
      background-color: ${(p) => p.theme.colors.neutral[100]};
    }
  `,
  danger: css`
    background-color: ${(p) => p.theme.colors.semantic.error};
    color: ${(p) => p.theme.colors.neutral[0]};

    &:hover:not(:disabled) {
      background-color: ${(p) => p.theme.colors.semantic.error};
    }

    &:active:not(:disabled) {
      background-color: ${(p) => p.theme.colors.semantic.error};
    }
  `,
};

export const Spinner = styled.span`
  display: inline-block; 
  width: 1em; 
  height: 1em; 
  border: 2px solid currentColor; 
  border-right-color: transparent; 
  border-radius: 50%; 
  animation: ${spin} 0.6s linear infinite;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button<{
  $shape: ButtonShape;
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
  $iconOnly?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${(props) => props.theme.typography.fontFamily.sans};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
    
  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.primary[500]};
    outline-offset: 2px;
  }


  ${(p) => sizeStyles[p.$size]}
  ${(p) => variantStyles[p.$variant]}


`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center
`