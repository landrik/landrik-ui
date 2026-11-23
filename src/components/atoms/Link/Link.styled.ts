import styled, { css } from 'styled-components';
import { LinkVariant, LinkSize } from './Link.types';

interface StyledProps {
  $variant: LinkVariant;
  $size: LinkSize;
  $underline: boolean;
  $disabled: boolean;
}

const variantStyles: Record<LinkVariant, ReturnType<typeof css>> = {
  primary: css`
    color: ${({ theme }) => theme.color.text.link};
    &:hover {
      color: ${({ theme }) => theme.color.text.linkHover};
    }
    &:active {
      color: ${({ theme }) => theme.color.accent.bgActive};
    }
  `,

  secondary: css`
    color: ${({ theme }) => theme.color.accent.border};
    &:hover {
      color: ${({ theme }) => theme.color.accent.text};
    }
  `,

  subtle: css`
    color: ${({ theme }) => theme.color.neutral.text};
    &:hover {
      color: ${({ theme }) => theme.color.text.default};
    }
  `,

  danger: css`
    color: ${({ theme }) => theme.color.danger.text};
    &:hover {
      color: ${({ theme }) => theme.color.danger.bgDefault};
    }
  `,
};

const sizeStyles: Record<LinkSize, ReturnType<typeof css>> = {
  sm: css`
    font-size: ${({ theme }) => theme.typography.size.sm};
    gap: ${({ theme }) => theme.spacing[1]}px;
  `,
  md: css`
    font-size: ${({ theme }) => theme.typography.size.base};
    gap: ${({ theme }) => theme.spacing[2]}px;
  `,
  lg: css`
    font-size: ${({ theme }) => theme.typography.size.lg};
    gap: ${({ theme }) => theme.spacing[4]}px;
  `,
};

export const StyledLink = styled.a<StyledProps>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  text-decoration: ${(p) => (p.$underline ? 'underline' : 'none')};
  transition: ${({ theme }) => theme.transitions.preset.base};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  &:hover {
    text-decoration: ${(p) => (p.$underline ? 'underline' : 'none')};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    `}

  ${(p) => variantStyles[p.$variant]}
  ${(p) => sizeStyles[p.$size]}
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;
