import styled, { css } from 'styled-components';
import { PaginationSize, PaginationVariant } from './Pagination.types';

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]}px;
`;

interface PageButtonProps {
  $size: PaginationSize;
  $variant: PaginationVariant;
  $active?: boolean;
  $disabled?: boolean;
}

const sizeStyles: Record<PaginationSize, ReturnType<typeof css>> = {
  sm: css`
    min-width: 32px;
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[2]}px;
    font-size: ${({ theme }) => theme.typography.size.sm};
  `,
  md: css`
    min-width: 40px;
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing[3]}px;
    font-size: ${({ theme }) => theme.typography.size.base};
  `,
  lg: css`
    min-width: 48px;
    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing[4]}px;
    font-size: ${({ theme }) => theme.typography.size.lg};
  `,
};

const variantStyles: Record<PaginationVariant, ReturnType<typeof css<PageButtonProps>>> = {
  default: css<PageButtonProps>`
    background-color: ${(p) =>
      p.$active ? p.theme.color.accent.bgDefault : p.theme.color.surface.raised};
    color: ${(p) =>
      p.$active ? p.theme.color.accent.onFill : p.theme.color.text.default};
    border: 1px solid
      ${(p) =>
        p.$active ? p.theme.color.accent.bgDefault : p.theme.color.border.default};

    &:hover:not(:disabled) {
      background-color: ${(p) =>
        p.$active ? p.theme.color.accent.bgHover : p.theme.color.neutral.bgSubtle};
      border-color: ${(p) =>
        p.$active ? p.theme.color.accent.bgHover : p.theme.color.border.strong};
    }
  `,

  outlined: css<PageButtonProps>`
    background-color: transparent;
    color: ${(p) =>
      p.$active ? p.theme.color.accent.text : p.theme.color.text.default};
    border: 2px solid
      ${(p) =>
        p.$active ? p.theme.color.accent.border : p.theme.color.border.default};

    &:hover:not(:disabled) {
      border-color: ${(p) =>
        p.$active ? p.theme.color.accent.bgHover : p.theme.color.border.strong};
      background-color: ${(p) =>
        p.$active ? p.theme.color.accent.bgSubtle : p.theme.color.neutral.bgSubtle};
    }
  `,

  minimal: css<PageButtonProps>`
    background-color: ${(p) =>
      p.$active ? p.theme.color.accent.bgSubtle : 'transparent'};
    color: ${(p) =>
      p.$active ? p.theme.color.accent.text : p.theme.color.text.default};
    border: none;

    &:hover:not(:disabled) {
      background-color: ${(p) =>
        p.$active ? p.theme.color.accent.bgSubtle : p.theme.color.neutral.bgSubtle};
    }
  `,
};

const activeStyles: Record<PaginationVariant, ReturnType<typeof css>> = {
  default: css`
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    box-shadow: 0 1px 3px ${({ theme }) => theme.color.accent.bgActive}55;
  `,

  outlined: css`
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.accent.bgActive};
  `,

  minimal: css`
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 25%;
      right: 25%;
      bottom: 4px;
      height: 2px;
      border-radius: 1px;
      background-color: ${({ theme }) => theme.color.accent.bgActive};
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
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  transition: ${({ theme }) => theme.transitions.preset.base};
  user-select: none;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: 2px;
  }

  ${(p) => sizeStyles[p.$size]}
  ${(p) => variantStyles[p.$variant]}
  ${(p) =>
    p.$active &&
    css`
      cursor: default;
      ${activeStyles[p.$variant]}
    `}
`;

export const Ellipsis = styled.span<{ $size: PaginationSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.text.muted};

  ${(p) => sizeStyles[p.$size]}
`;
