import styled, { css, keyframes } from 'styled-components';
import { TooltipPlacement } from './Tooltip.types';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const TooltipWrapper = styled.div`position: relative; display: inline-flex;`;

interface TooltipContentProps {
  $placement: TooltipPlacement;
  $visible: boolean;
}

const placementStyles: Record<TooltipPlacement, ReturnType<typeof css>> = {

top: css`
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);


  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.color.neutral[900]};
  }
`, 

bottom: css`
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);


  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-bottom-color: ${({ theme }) => theme.color.neutral[900]};
  }


`, 

left: css`
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);


  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-left-color: ${({ theme }) => theme.color.neutral[900]};
  }
`, 

right: css`
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);


  &::after {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: ${({ theme }) => theme.color.neutral[900]};
  }
`,
};

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  padding: ${({ theme }) => theme.spacing[12]}px ${({ theme }) => theme.spacing[3]}px;
  background-color: ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.neutral[0]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${p => p.$visible ? 1 : 0};
  visibility: ${p => p.$visible ? 'visible' : 'hidden'};
  transition: opacity ${({ theme }) => theme.transitions.preset.fast},
  visibility ${({ theme }) => theme.transitions.preset.fast};
  animation: ${p => p.$visible ? fadeIn : 'none'} ${({ theme }) => theme.transitions.preset.fast};

  ${p => placementStyles[p.$placement]}

`;