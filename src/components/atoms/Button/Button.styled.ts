import styled, { css, keyframes } from "styled-components";

import { ButtonShape, ButtonSize, ButtonVariant } from "./Button.types";
import { lighten } from "polished";


const spin = keyframes`to { transform: rotate(360deg); }`;
const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[3]}px;
    font-size: ${({ theme }) => theme.typography.size.sm};
    border-radius: ${({ theme }) => theme.radius.md};
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing[3]}px ${({ theme }) => theme.spacing[4]}px;
    font-size: ${({ theme }) => theme.typography.size.base};
    border-radius: ${({ theme }) => theme.radius.lg};
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing[5]}px ${({ theme }) => theme.spacing[6]}px;
    font-size: ${({theme}) => theme.typography.size.lg};
    border-radius: ${({theme}) => theme.radius.lg};
  `,
};

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.color.accent.bgDefault};
    color: ${({ theme }) => theme.color.accent.onFill};


    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.color.accent.bgDefault};
    }

    &:active:not(:disabled) {
      background-color: ${({theme}) => theme.color.accent.bgActive};
    }
  `,
  secondary: css`
    background-color: ${({theme}) => theme.color.neutral.bgSubtle};
    color: ${({theme}) => theme.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.color.neutral.bgHover};
    }

    &:active:not(:disabled) {
      background-color: ${({theme}) => theme.color.neutral.bgActive};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({theme}) => theme.color.neutral.bgDefault};
    border: 2px solid ${({theme}) => theme.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.color.neutral.bgSubtle};
      border-color: ${({theme}) => theme.color.neutral.bgDefault};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({theme}) => theme.color.neutral.bgDefault};

    &:hover:not(:disabled) {
      background-color: ${({theme}) => theme.color.neutral.bgSubtle};
    }
  `,
  danger: css`
    background-color: ${({theme}) => theme.color.danger.bgDefault};
    color: ${({theme}) => theme.color.neutral.bgSubtle};

    &:hover:not(:disabled) {
      background-color: ${({theme}) => lighten(0.2, theme.color.danger.bgDefault)};
    }

    &:active:not(:disabled) {
      background-color: ${({theme}) => theme.color.danger.bgDefault};
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
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
    
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent.bgDefault};
    outline-offset: 2px;
  }


  ${(p) => sizeStyles[p.$size]}
  ${(p) => variantStyles[p.$variant]}


`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center
`