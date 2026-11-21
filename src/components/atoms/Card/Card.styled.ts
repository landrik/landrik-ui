
import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';
import {
  CardProps,
  CardFooterProps,
  CardMediaProps,
  CardBadgeProps,
  CardSize,
} from './Card.types';

// ─── Animations ─────────────────────────────────────────────────────────────

const liftUp = keyframes`
  from { transform: translateY(0) scale(1); }
  to   { transform: translateY(-3px) scale(1.005); }
`;

// ─── Variant Styles ─────────────────────────────────────────────────────────

const variantStyles = {
  elevated: css`
    background: ${({ theme }) => theme.color.surface.raised};
    border: 1px solid ${({ theme }) => theme.color.border.subtle};
    box-shadow: ${({ theme }) => theme.shadows.md};
  `,
  outlined: css`
    background: ${({ theme }) => theme.color.surface.raised};
    border: 1.5px solid ${({ theme }) => theme.color.border.default};
    box-shadow: none;
  `,
  filled: css`
    background: ${({ theme }) => theme.color.surface.sunken};
    border: 1px solid transparent;
    box-shadow: none;
  `,
  glass: css`
    background: ${({ theme }) => theme.color.surface.overlay};
    border: 1px solid ${({ theme }) => theme.color.border.default};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
  `,
};

const interactiveStyles = {
  elevated: css`
    &:hover {
      border-color: ${({ theme }) => theme.color.border.strong};
      box-shadow: ${({ theme }) => theme.shadows.lg};
      animation: ${liftUp} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px) scale(1.002);
    }
  `,
  outlined: css`
    &:hover {
      border-color: ${({ theme }) => theme.color.border.strong};
      box-shadow: ${({ theme }) => theme.shadows.sm};
      animation: ${liftUp} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `,
  filled: css`
    &:hover {
      background: ${({ theme }) => theme.color.neutral.bgSubtle};
      animation: ${liftUp} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `,
  glass: css`
    &:hover {
      border-color: ${({ theme }) => theme.color.border.strong};
      animation: ${liftUp} 0.2s ease forwards;
    }
    &:active {
      transform: translateY(-1px);
    }
  `,
};

const sizeStyles: Record<CardSize, ReturnType<typeof css>> = {
  sm: css`
    padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[3]}px;
    font-size: ${({ theme }) => theme.typography.size.xs};
    gap: ${({ theme }) => theme.spacing[2]}px;
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[5]}px;
    font-size: ${({ theme }) => theme.typography.size.sm};
    gap: ${({ theme }) => theme.spacing[3]}px;
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing[4]}px ${({ theme }) => theme.spacing[8]}px;
    font-size: ${({ theme }) => theme.typography.size.base};
    gap: ${({ theme }) => theme.spacing[4]}px;
  `,
};



// ─── Root Card ───────────────────────────────────────────────────────────────

export const StyledCard = styled.div<CardProps>`
  
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.color.neutral.bgDefault};
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  /* Width */
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  /* Radius */
  border-radius: ${({ radius = 'lg' }) => ({ theme }) => theme.radius[radius]};

  /* Variant */
  ${({ $variant = 'elevated' }) => variantStyles[$variant]}

  /* Interactive */
  ${({ interactive, $variant = 'elevated' }) =>
    interactive &&
    css`
      cursor: pointer;
      user-select: none;
      ${interactiveStyles[$variant]}
    `}

  /* Disabled */
  ${({ disabled }) => disabled && css`
      opacity: 0.48;
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

// ─── Card Header ────────────────────────────────────────────────────────────

export const StyledCardHeader = styled.div<{ $size: CardSize }>`
  display: flex;
  flex-direction: column;
  ${(p) => sizeStyles[p.$size]}
  padding-top: 12px;
`;

// ─── Card Body ──────────────────────────────────────────────────────────────

export const StyledCardBody = styled.div<{ $size: CardSize  }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${(p) => sizeStyles[p.$size]}
`;

// ─── Card Footer ────────────────────────────────────────────────────────────

export const StyledCardFooter = styled.div<CardFooterProps & { $size: CardSize }>`
  
  display: flex;
  align-items: center;
  position: relative;
  ${(p) => sizeStyles[p.$size]};
  padding-bottom: 12px;
  padding-top: 12px;
  justify-content: ${({ align = 'left' }) => {
    const map = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end',
      'space-between': 'space-between',
    };
    return map[align];
  }};

 

  &::before {
    content: '';
    display: block;
    height: 1px;
    background: ${({theme}) => theme.color.border.subtle};
    position: absolute;
    left: 0;
    right: 0;
    top:0;
  }
`;

export const StyledCardFooterInner = styled.div<Pick<CardFooterProps, 'align'> & { $size: CardSize }>`
  padding-top: 12px;
  padding-bottom: ${p => p.$size === 'sm' ? '12px' : p.$size === 'lg' ? '28px' : '20px'};
  
  border-top: 1px solid ${({theme}) => theme.color.border.subtle};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  justify-content: ${({ align = 'left' }) => {
    const map = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end',
      'space-between': 'space-between',
    };
    return map[align];
  }};
`;

export type StyledCardMediaProps = Pick<CardMediaProps, '$height' | '$objectFit'>;

export const StyledCardMedia = styled.div<StyledCardMediaProps>`
  position: relative;
  width: 100%;
  height: ${({ theme, $height }) =>
    $height !== undefined ? `${theme.spacing[$height]}px` : undefined};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ $objectFit = 'cover' }) => $objectFit};
    display: block;
    transition: transform 0.4s ease;
  }
`;

// ─── Card Divider ────────────────────────────────────────────────────────────

export const StyledCardDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({theme}) => theme.color.border.default};
  margin: 0;
`;

// ─── Card Badge ──────────────────────────────────────────────────────────────

const badgeColorMap = {
  default: css`
    background: ${(p) => lighten(0.2, p.theme.color.neutral.bgDefault)};
    color: ${({theme}) => theme.color.neutral.bgDefault};
  `,
  primary: css`
    background: ${(p) => lighten(0.2, p.theme.color.accent.bgDefault)};
    color: ${({theme}) => theme.color.accent.bgDefault};
  `,
  success: css`
    background: ${({theme}) => lighten(0.2, theme.color.success.bgDefault)};
    color: ${({theme}) => theme.color.success.bgDefault};
  `,
  warning: css`
    background: ${(p) => lighten(0.2, p.theme.color.warning.bgDefault)};
    color: ${({theme}) => theme.color.warning.bgDefault};
  `,
  danger: css`
    background: ${(p) => lighten(0.2, p.theme.color.danger.bgDefault)};
    color: ${({theme}) => theme.color.danger.bgDefault};
  `,
};

export const StyledCardBadge = styled.span<CardBadgeProps>`
  font-family: ${({theme}) =>  theme.typography.family.sans};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  line-height: 1.5;

  ${({ color = 'default' }) => badgeColorMap[color]}
`;

// ─── Card Title & Description ────────────────────────────────────────────────

export const StyledCardTitle = styled.h3`
  font-family: ${({theme}) =>  theme.typography.family.sans};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme}) => theme.color.accent.bgDefault};
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

export const StyledCardDescription = styled.p`
  font-family: ${({theme}) =>  theme.typography.family.sans};
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.6;
`;
