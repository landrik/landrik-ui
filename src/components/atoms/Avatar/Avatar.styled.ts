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

export const AvatarWrap = styled.div<{
  $size: AvatarSize;
}>`

  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  ${p => sizeStyles[p.$size]} 
`

export const AvatarContainer = styled.div<{
  $shape: AvatarShape;
}>`
  width: 100%; 
  height: 100%; 
  position: relative; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
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
  background: ${p => p.theme.colors.primary[500]}; 
  color: ${p => p.theme.colors.neutral[100]}; 
  font-weight: ${p => p.theme.typography.fontWeight.semibold}; 
  user-select: none;
  
`;

const statusColors: Record<AvatarStatus, ReturnType<typeof css>> = {
  online: css`background-color: ${p => p.theme.colors.semantic.success}`,
  offline: css`background-color: #6b7280`,
  away: css`background-color: ${p => p.theme.colors.semantic.warning}`,
  busy: css`background-color: ${p => p.theme.colors.semantic.error}`,
};

export const StatusIndicator = styled.div<{
  $status: AvatarStatus;
  $size: AvatarSize;
  $statusColor:AvatarStatus; 
}>`
  position: absolute; 
  bottom: 0; 
  right: 0; 
  width: ${p =>  p.$size === 'xs' ? '6px' : p.$size === 'sm' ? '8px' : p.$size === 'md' ? '10px' : p.$size === 'lg' ? '12px' : p.$size === 'xl' ? '14px' : '18px' }; 
  height: ${p =>  p.$size === 'xs' ? '6px' : p.$size === 'sm' ? '8px' : p.$size === 'md' ? '10px' : p.$size === 'lg' ? '12px' : p.$size === 'xl' ? '14px' : '18px' }; 
  border-radius: ${p => p.theme.radii.full}; 
  ${p => statusColors[p.$status]}; 
  border: 2px solid ${p => p.theme.colors.neutral[0]};
`;