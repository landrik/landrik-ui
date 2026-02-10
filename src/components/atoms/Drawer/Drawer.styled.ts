import styled, { css, keyframes } from 'styled-components';
import { DrawerPlacement, DrawerSize } from './Drawer.types';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

interface DrawerOverlayProps {
  $open: boolean;
}

export const DrawerOverlay = styled.div<DrawerOverlayProps>`position: fixed; inset: 0; background-color: rgba(0, 0, 0, 0.5); z-index: ${p => p.theme.zIndices.modal}; animation: ${fadeIn} ${p => p.theme.transitions.duration.base}; display: ${p => p.$open ? 'block' : 'none'};`;

const slideInLeft = keyframes`from { transform: translateX(-100%); } to { transform: translateX(0); }`;

const slideInRight = keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`;

const slideInTop = keyframes`from { transform: translateY(-100%); } to { transform: translateY(0); }`;

const slideInBottom = keyframes`from { transform: translateY(100%); } to { transform: translateY(0); }`;

interface DrawerContainerProps {
$open: boolean;
$placement: DrawerPlacement;
$size: DrawerSize;
}

const placementStyles: Record<DrawerPlacement, ReturnType<typeof css>> = {
left: css`top: 0; left: 0; bottom: 0; animation: ${slideInLeft} ${p => p.theme.transitions.duration.base} ${p => p.theme.transitions.timing.easeOut};`,
right: css`top: 0; right: 0; bottom: 0; animation: ${slideInRight} ${p => p.theme.transitions.duration.base} ${p => p.theme.transitions.timing.easeOut};`,
top: css`top: 0; left: 0; right: 0; animation: ${slideInTop} ${p => p.theme.transitions.duration.base} ${p => p.theme.transitions.timing.easeOut};`,
bottom: css`bottom: 0; left: 0; right: 0; animation: ${slideInBottom} ${p => p.theme.transitions.duration.base} ${p => p.theme.transitions.timing.easeOut};`,
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
return css`width: ${sizeMap[size]}; max-width: 100%;`;
} else {
return css`height: ${sizeMap[size]}; max-height: 100%;`;
}
};

export const DrawerContainer = styled.div<DrawerContainerProps>`
position: fixed;
z-index: ${p => p.theme.zIndices.modal + 1};
background-color: ${p => p.theme.colors.neutral[0]};
box-shadow: ${p => p.theme.shadows.xl};
display: ${p => p.$open ? 'flex' : 'none'};
flex-direction: column;

${p => placementStyles[p.$placement]}
${p => getSizeStyles(p.$placement, p.$size)}
`;

export const DrawerHeader = styled.div`display: flex; align-items: center; justify-content: space-between; padding: ${p => p.theme.spacing[6]}px; border-bottom: 1px solid ${p => p.theme.colors.neutral[200]}; flex-shrink: 0;`;

export const DrawerTitle = styled.h2`margin: 0; font-size: ${p => p.theme.typography.fontSize.xl}; font-weight: ${p => p.theme.typography.fontWeight.semibold}; color: ${p => p.theme.colors.neutral[900]};`;

export const DrawerCloseButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
padding: 0;
background-color: transparent;
border: none;
border-radius: ${p => p.theme.radii.md};
color: ${p => p.theme.colors.neutral[600]};
cursor: pointer;
transition: all ${p => p.theme.transitions.duration.base};

&:hover {
background-color: ${p => p.theme.colors.neutral[100]};
color: ${p => p.theme.colors.neutral[900]};
}

&:focus-visible {
outline: 2px solid ${p => p.theme.colors.primary[500]};
outline-offset: 2px;
}
`;

export const DrawerBody = styled.div`flex: 1; overflow-y: auto; padding: ${p => p.theme.spacing[6]}px;`;

export const DrawerFooter = styled.div`padding: ${p => p.theme.spacing[6]}px; border-top: 1px solid ${p => p.theme.colors.neutral[200]}; flex-shrink: 0;`;