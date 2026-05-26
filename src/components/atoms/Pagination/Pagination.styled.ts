import styled, { css } from 'styled-components';
import { PaginationSize, PaginationVariant } from './Pagination.types';

export const PaginationContainer = styled.nav`
  display: flex; 
  align-items: center; 
  gap: ${({ theme }) => theme.spacing[4]}px;
`;

interface PageButtonProps {
  $size: PaginationSize;
  $variant: PaginationVariant;
  $active?: boolean;
  $disabled?: boolean;
}

const sizeStyles: Record<PaginationSize, ReturnType<typeof css>> = {
  sm: css`min-width: 32px; height: 32px; padding: 0 ${({ theme }) => theme.spacing[12]}px; font-size: ${({ theme }) => theme.typography.size.sm};`,
  md: css`min-width: 40px; height: 40px; padding: 0 ${({ theme }) => theme.spacing[3]}px; font-size: ${({ theme }) => theme.typography.size.base};`,
  lg: css`min-width: 48px; height: 48px; padding: 0 ${({ theme }) => theme.spacing[4]}px; font-size: ${({ theme }) => theme.typography.size.lg};`,
};

const variantStyles: Record<PaginationVariant, any> = { 
  default: css<PageButtonProps>`
    background-color: ${p => p.$active ? p.theme.color.accent[600] : p.theme.color.neutral[0]};
    color: ${p => p.$active ? p.theme.color.neutral[0] : p.theme.color.neutral[700]};
    border: 1px solid ${p => p.$active ? p.theme.color.accent[600] : p.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${p => p.$active ? p.theme.color.accent[700] : p.theme.color.neutral[50]};
      border-color: ${p => p.$active ? p.theme.color.accent[700] : p.theme.color.neutral[400]};
    }

  `, 
  
  outlined: css<PageButtonProps>`
    background-color: transparent;
    color: ${p => p.$active ? p.theme.color.accent[600] : p.theme.color.neutral[700]};
    border: 2px solid ${p => p.$active ? p.theme.color.accent[600] : p.theme.color.neutral[300]};

    &:hover:not(:disabled) {
      border-color: ${p => p.$active ? p.theme.color.accent[700] : p.theme.color.neutral[400]};
      background-color: ${p => p.$active ? p.theme.color.accent[50] : p.theme.color.neutral[50]};
    }

  `, 
  
  minimal: css<PageButtonProps>`
    background-color: ${p => p.$active ? p.theme.color.accent[100] : 'transparent' };
    color: ${p => p.$active ? p.theme.color.accent[700] : p.theme.color.neutral[700] };
    border: none;

    &:hover:not(:disabled) {
      background-color: ${p => p.$active ? p.theme.color.accent[200] : p.theme.color.neutral[100]};
    }

  `,
};






export const PageButton = styled.button<PageButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
  transition: all ${({ theme }) => theme.transitions.duration.base};
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent[500]};
    outline-offset: 2px;
  }

  ${p => sizeStyles[p.$size]}
  ${p => variantStyles[p.$variant]}
`;

export const Ellipsis = styled.span<{ $size: PaginationSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.neutral[500]};

  ${p => sizeStyles[p.$size]}
`;
