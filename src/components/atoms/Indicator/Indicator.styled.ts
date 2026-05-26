import styled, { css } from 'styled-components';
import { IndicatorVariant, IndicatorSize, IndicatorPosition } from './Indicator.types';

export const IndicatorWrapper = styled.div`position: relative; display: inline-flex;`;

export interface IndicatorBadgeProps {
  $variant: IndicatorVariant;
  $size: IndicatorSize;
  $position: IndicatorPosition;
  $dot: boolean;
  $show: boolean;
}

const variantStyles: Record<IndicatorVariant, ReturnType<typeof css>> = {
  default: css`background-color: ${({ theme }) => theme.color.neutral.bgDefault}; color: ${({ theme }) => theme.color.neutral.bgSubtle};`,
  success: css`background-color: ${({ theme }) => theme.color.success.bgDefault}; color: ${({ theme }) => theme.color.neutral.bgSubtle};`,
  warning: css`background-color: ${({ theme }) => theme.color.warning.bgDefault}; color: ${({ theme }) => theme.color.neutral.bgSubtle};`,
  error: css`background-color: ${({ theme }) => theme.color.danger.bgDefault}; color: ${({ theme }) => theme.color.neutral.bgSubtle};`,
  info: css`background-color: ${({ theme }) => theme.color.info.bgDefault}; color: ${({ theme }) => theme.color.neutral.bgSubtle};`,
};

const sizeStyles: Record<IndicatorSize, any> = {
  sm: css<{$dot: boolean}>`
      min-width: ${p => p.$dot ? '8px' : '16px'}; 
      height: ${p => p.$dot ? '8px' : '16px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[1]}px`}; 
      font-size: ${({ theme }) => theme.typography.size.xs}; 
  `,
  md: css<IndicatorBadgeProps>`
      min-width: ${p => p.$dot ? '10px' : '20px'}; 
      height: ${p => p.$dot ? '10px' : '20px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[1]}px`}; 
      font-size: ${({ theme }) => theme.typography.size.xs}; 
    `,
  lg: css<IndicatorBadgeProps>`
      min-width: ${p => p.$dot ? '12px' : '24px'}; 
      height: ${p => p.$dot ? '12px' : '24px'}; 
      padding: ${p => p.$dot ? '0' :`0 ${p.theme.spacing[2]}px`}; 
      font-size: ${({ theme }) => theme.typography.size.sm}; 
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
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;
  border: 2px solid ${({ theme }) => theme.color.neutral.bgSubtle};
  opacity: ${p => p.$show ? 1 : 0};
  visibility: ${p => p.$show ? 'visible' : 'hidden'};
  transition: all ${({ theme }) => theme.transitions.duration.base};

  ${p => variantStyles[p.$variant]}
  ${p => sizeStyles[p.$size]}
  ${p => positionStyles[p.$position]}
`;