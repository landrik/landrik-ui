import styled, { css } from 'styled-components';
import { IndicatorVariant, IndicatorSize, IndicatorPosition } from './Indicator.types';

export const IndicatorWrapper = styled.div`position: relative; display: inline-flex;`;

interface IndicatorBadgeProps {
  $variant: IndicatorVariant;
  $size: IndicatorSize;
  $position: IndicatorPosition;
  $dot: boolean;
  $show: boolean;
}

const variantStyles: Record<IndicatorVariant, ReturnType<typeof css>> = {
  default: css`background-color: ${p => p.theme.colors.neutral[600]}; color: ${p => p.theme.colors.neutral[0]};`,
  success: css`background-color: ${p => p.theme.colors.semantic.success}; color: ${p => p.theme.colors.neutral[0]};`,
  warning: css`background-color: ${p => p.theme.colors.semantic.warning}; color: ${p => p.theme.colors.neutral[0]};`,
  error: css`background-color: ${p => p.theme.colors.semantic.error}; color: ${p => p.theme.colors.neutral[0]};`,
  info: css`background-color: ${p => p.theme.colors.semantic.info}; color: ${p => p.theme.colors.neutral[0]};`,
};

const sizeStyles: Record<IndicatorSize, ReturnType<typeof css>> = {
  sm: css<IndicatorBadgeProps>`
      min-width: ${p => p.$dot ? '8px' : '16px'}; 
      height: ${p => p.$dot ? '8px' : '16px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[1]}px`}; 
      font-size: ${p => p.theme.typography.fontSize.xs}; 
  `,
  md: css<IndicatorBadgeProps>`
      min-width: ${p => p.$dot ? '10px' : '20px'}; 
      height: ${p => p.$dot ? '10px' : '20px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[1]}px`}; 
      font-size: ${p => p.theme.typography.fontSize.xs}; 
    `,
  lg: css<IndicatorBadgeProps>`
      min-width: ${p => p.$dot ? '12px' : '24px'}; 
      height: ${p => p.$dot ? '12px' : '24px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[2]}px`}; 
      font-size: ${p => p.theme.typography.fontSize.sm}; 
    `,
};

const positionStyles: Record<IndicatorPosition, ReturnType<typeof css>> = {
  'top-right': css`top: 0; right: 0; transform: translate(50%, -50%);`,
  'top-left': css`top: 0; left: 0; transform: translate(-50%, -50%);`,
  'bottom-right': css`bottom: 0; right: 0; transform: translate(50%, 50%);`,
  'bottom-left': css`bottom: 0; left: 0; transform: translate(-50%, 50%);`,
};

export const IndicatorBadge = styled.span<IndicatorBadgeProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.full};
  font-weight: ${p => p.theme.typography.fontWeight.bold};
  line-height: 1;
  border: 2px solid ${p => p.theme.colors.neutral[0]};
  opacity: ${p => p.$show ? 1 : 0};
  visibility: ${p => p.$show ? 'visible' : 'hidden'};
  transition: all ${p => p.theme.transitions.duration.base};

  ${p => variantStyles[p.$variant]}
  ${p => sizeStyles[p.$size]}
  ${p => positionStyles[p.$position]}
`;