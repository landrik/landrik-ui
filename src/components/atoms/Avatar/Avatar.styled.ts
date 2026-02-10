import styled, { css } from "styled-components";

import { AvatarProps, AvatarSize, AvatarShape, AvatarStatus } from './Avatar.types';

const sizeStyles: Record<AvatarSize, ReturnType<typeof css>> = {
  xs: css`width: 24px; height: 24px; font-size: ${p => p.theme.typography.fontSize.xs};`,
  sm: css`width: 32px; height: 32px; font-size: ${p => p.theme.typography.fontSize.sm};`,
  md: css`width: 40px; height: 40px; font-size: ${p => p.theme.typography.fontSize.base};`,
  lg: css`width: 48px; height: 48px; font-size: ${p => p.theme.typography.fontSize.lg};`,
  xl: css`width: 64px; height: 64px; font-size: ${p => p.theme.typography.fontSize.xl};`,
  '2xl': css`width: 96px; height: 96px; font-size: ${p => p.theme.typography.fontSize['2xl']};`,
};

const shapeStyles: Record<AvatarShape, ReturnType<typeof css>> = {
  circle: css`border-radius: ${p => p.theme.radii.full};`,
  rounded: css`border-radius: ${p => p.theme.radii.lg};`,
  square: css`border-radius: ${p => p.theme.radii.none};`,
};

export const AvatarContainer = styled.div<{
  $size: AvatarSize;
  $shape: AvatarShape;
}>`
  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${p => sizeStyles[p.$size]} 
  ${p => shapeStyles[p.$shape]} 
  overflow: hidden;
`;

export const AvatarImage = styled.img`width: 100%; height: 100%; object-fit: cover;`;

export const AvatarFallback = styled.div`
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: ${p => p.theme.colors.primary[100]}; 
  color: ${p => p.theme.colors.primary[700]}; 
  font-weight: ${p => p.theme.typography.fontWeight.semibold}; 
  user-select: none;
`;

const statusColors: Record<AvatarStatus, string> = {
  online: '#10b981',
  offline: '#6b7280',
  away: '#f59e0b',
  busy: '#ef4444',
};

export const StatusIndicator = styled.div<{
  $status: AvatarStatus;
  $size: AvatarSize;
}>`
  position: absolute; 
  bottom: 0; 
  right: 0; 
  width: ${p =>  p.$size === 'xs' ? '6px' : p.$size === 'sm' ? '8px' : p.$size === 'md' ? '10px' : p.$size === 'lg' ? '12px' : p.$size === 'xl' ? '14px' : '18px' }; 
  height: ${p =>  p.$size === 'xs' ? '6px' : p.$size === 'sm' ? '8px' : p.$size === 'md' ? '10px' : p.$size === 'lg' ? '12px' : p.$size === 'xl' ? '14px' : '18px' }; 
  border-radius: ${p => p.theme.radii.full}; 
  background-color: ${p => statusColors[p.$status]}; 
  border: 2px solid ${p => p.theme.colors.neutral[0]};
`;