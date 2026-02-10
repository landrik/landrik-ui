import styled, { css } from 'styled-components';
import { PaginationSize, PaginationVariant } from './Pagination.types';

export const PaginationContainer = styled.nav`
  display: flex; 
  align-items: center; 
  gap: ${p => p.theme.spacing[1]}px;
`;

interface PageButtonProps {
  $size: PaginationSize;
  $variant: PaginationVariant;
  $active?: boolean;
  $disabled?: boolean;
}

const sizeStyles: Record<PaginationSize, ReturnType<typeof css>> = {
  sm: css`min-width: 32px; height: 32px; padding: 0 ${p => p.theme.spacing[2]}px; font-size: ${p => p.theme.typography.fontSize.sm};`,
  md: css`min-width: 40px; height: 40px; padding: 0 ${p => p.theme.spacing[3]}px; font-size: ${p => p.theme.typography.fontSize.base};`,
  lg: css`min-width: 48px; height: 48px; padding: 0 ${p => p.theme.spacing[4]}px; font-size: ${p => p.theme.typography.fontSize.lg};`,
};

const variantStyles: Record<PaginationVariant, ReturnType<typeof css>> = { 
  default: css<PageButtonProps>`
    background-color: ${p => p.$active ? p.theme.colors.primary[600] : p.theme.colors.neutral[0]};
    color: ${p => p.$active ? p.theme.colors.neutral[0] : p.theme.colors.neutral[700]};
    border: 1px solid ${p => p.$active ? p.theme.colors.primary[600] : p.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      background-color: ${p => p.$active ? p.theme.colors.primary[700] : p.theme.colors.neutral[50]};
      border-color: ${p => p.$active ? p.theme.colors.primary[700] : p.theme.colors.neutral[400]};
    }

  `, 
  
  outlined: css<PageButtonProps>`
    background-color: transparent;
    color: ${p => p.$active ? p.theme.colors.primary[600] : p.theme.colors.neutral[700]};
    border: 2px solid ${p => p.$active ? p.theme.colors.primary[600] : p.theme.colors.neutral[300]};

    &:hover:not(:disabled) {
      border-color: ${p => p.$active ? p.theme.colors.primary[700] : p.theme.colors.neutral[400]};
      background-color: ${p => p.$active ? p.theme.colors.primary[50] : p.theme.colors.neutral[50]};
    }

  `, 
  
  minimal: css<PageButtonProps>`
    background-color: ${p => p.$active ? p.theme.colors.primary[100] : 'transparent' };
    color: ${p => p.$active ? p.theme.colors.primary[700] : p.theme.colors.neutral[700] };
    border: none;

    &:hover:not(:disabled) {
      background-color: ${p => p.$active ? p.theme.colors.primary[200] : p.theme.colors.neutral[100]};
    }

  `,
};

export const PageButton = styled.button<PageButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.typography.fontFamily.sans};
  font-weight: ${p => p.theme.typography.fontWeight.medium};
  border-radius: ${p => p.theme.radii.md};
  cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
  transition: all ${p => p.theme.transitions.duration.base};
  user-select: none;

  &:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  }

  &:focus-visible {
  outline: 2px solid ${p => p.theme.colors.primary[500]};
  outline-offset: 2px;
}

${p => sizeStyles[p.$size]}
${p => variantStyles[p.$variant]}
`;

export const Ellipsis = styled.span<{ $size: PaginationSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.neutral[500]};

  ${p => sizeStyles[p.$size]}
`;
