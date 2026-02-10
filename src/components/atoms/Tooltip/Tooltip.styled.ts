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
    border-top-color: ${p => p.theme.colors.neutral[900]};
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
    border-bottom-color: ${p => p.theme.colors.neutral[900]};
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
    border-left-color: ${p => p.theme.colors.neutral[900]};
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
    border-right-color: ${p => p.theme.colors.neutral[900]};
  }
`,
};

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  z-index: ${p => p.theme.zIndices.tooltip};
  padding: ${p => p.theme.spacing[2]}px ${p => p.theme.spacing[3]}px;
  background-color: ${p => p.theme.colors.neutral[900]};
  color: ${p => p.theme.colors.neutral[0]};
  font-size: ${p => p.theme.typography.fontSize.sm};
  border-radius: ${p => p.theme.radii.md};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${p => p.$visible ? 1 : 0};
  visibility: ${p => p.$visible ? 'visible' : 'hidden'};
  transition: opacity ${p => p.theme.transitions.fast},
  visibility ${p => p.theme.transitions.fast};
  animation: ${p => p.$visible ? fadeIn : 'none'} ${p => p.theme.transitions.fast};

  ${p => placementStyles[p.$placement]}

`;