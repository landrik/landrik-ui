import styled, { css, keyframes } from 'styled-components';
import { DrawerPlacement, DrawerSize } from './Drawer.types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

interface DrawerOverlayProps {
  $open: boolean;
}

export const DrawerOverlay = styled.div<DrawerOverlayProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices.modal};
  animation: ${fadeIn} ${({ theme }) => theme.transitions.duration.base}ms ease;
  display: ${(p) => (p.$open ? 'block' : 'none')};
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideInTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideInBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

interface DrawerContainerProps {
  $open: boolean;
  $placement: DrawerPlacement;
  $size: DrawerSize;
}

const placementStyles: Record<DrawerPlacement, ReturnType<typeof css>> = {
  left: css`
    top: 0;
    left: 0;
    bottom: 0;
    animation: ${slideInLeft} ${({ theme }) => theme.transitions.duration.base}ms cubic-bezier(0.4, 0, 0.2, 1);
  `,
  right: css`
    top: 0;
    right: 0;
    bottom: 0;
    animation: ${slideInRight} ${({ theme }) => theme.transitions.duration.base}ms cubic-bezier(0.4, 0, 0.2, 1);
  `,
  top: css`
    top: 0;
    left: 0;
    right: 0;
    animation: ${slideInTop} ${({ theme }) => theme.transitions.duration.base}ms cubic-bezier(0.4, 0, 0.2, 1);
  `,
  bottom: css`
    bottom: 0;
    left: 0;
    right: 0;
    animation: ${slideInBottom} ${({ theme }) => theme.transitions.duration.base}ms cubic-bezier(0.4, 0, 0.2, 1);
  `,
};

const getSizeStyles = (placement: DrawerPlacement, size: DrawerSize) => {
  const sizeMap: Record<DrawerSize, string> = {
    sm: '320px',
    md: '448px',
    lg: '640px',
    xl: '1024px',
    full: '100%',
  };

  if (placement === 'left' || placement === 'right') {
    return css`
      width: ${sizeMap[size]};
      max-width: 100%;
    `;
  }
  return css`
    height: ${sizeMap[size]};
    max-height: 100%;
  `;
};

export const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.modal + 1};
  background-color: ${({ theme }) => theme.color.surface.raised};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  display: ${(p) => (p.$open ? 'flex' : 'none')};
  flex-direction: column;

  ${(p) => placementStyles[p.$placement]}
  ${(p) => getSizeStyles(p.$placement, p.$size)}
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[6]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.default};
  flex-shrink: 0;
`;

export const DrawerTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.color.text.default};
`;

export const DrawerCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.neutral.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.preset.base};

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.bgSubtle};
    color: ${({ theme }) => theme.color.text.default};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: 2px;
  }
`;

export const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]}px;
  color: ${({ theme }) => theme.color.text.default};
`;

export const DrawerFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[6]}px;
  border-top: 1px solid ${({ theme }) => theme.color.border.default};
  flex-shrink: 0;
`;
