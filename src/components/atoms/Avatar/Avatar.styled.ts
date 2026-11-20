import styled, { css } from 'styled-components';
import { AvatarSize, AvatarShape, AvatarStatus } from './Avatar.types';

const sizeStyles: Record<AvatarSize, ReturnType<typeof css>> = {
  xs: css`
    width: 24px;
    height: 24px;
    font-size: ${({ theme }) => theme.typography.size.xs};
  `,
  sm: css`
    width: 32px;
    height: 32px;
    font-size: ${({ theme }) => theme.typography.size.sm};
  `,
  md: css`
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.typography.size.base};
  `,
  lg: css`
    width: 48px;
    height: 48px;
    font-size: ${({ theme }) => theme.typography.size.lg};
  `,
  xl: css`
    width: 64px;
    height: 64px;
    font-size: ${({ theme }) => theme.typography.size.xl};
  `,
  '2xl': css`
    width: 96px;
    height: 96px;
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  `,
};

const statusSizeMap: Record<AvatarSize, string> = {
  xs: '6px',
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '14px',
  '2xl': '18px',
};

const shapeStyles: Record<AvatarShape, ReturnType<typeof css>> = {
  circle: css`
    border-radius: ${({ theme }) => theme.radius.full};
  `,
  rounded: css`
    border-radius: ${({ theme }) => theme.radius.lg};
  `,
  square: css`
    border-radius: ${({ theme }) => theme.radius.none};
  `,
};

export const AvatarWrap = styled.div<{
  $size: AvatarSize;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${(p) => sizeStyles[p.$size]}
`;

export const AvatarContainer = styled.div<{
  $shape: AvatarShape;
}>`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(p) => shapeStyles[p.$shape]}
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.accent.bgDefault};
  color: ${({ theme }) => theme.color.accent.onFill};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  user-select: none;
`;

const statusColors: Record<AvatarStatus, ReturnType<typeof css>> = {
  online: css`
    background-color: ${({ theme }) => theme.color.success.bgDefault};
  `,
  offline: css`
    background-color: ${({ theme }) => theme.color.neutral.bgActive};
  `,
  away: css`
    background-color: ${({ theme }) => theme.color.warning.bgDefault};
  `,
  busy: css`
    background-color: ${({ theme }) => theme.color.danger.bgDefault};
  `,
};

export const StatusIndicator = styled.div<{
  $status: AvatarStatus;
  $size: AvatarSize;
}>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${(p) => statusSizeMap[p.$size]};
  height: ${(p) => statusSizeMap[p.$size]};
  border-radius: ${({ theme }) => theme.radius.full};
  ${(p) => statusColors[p.$status]}
  border: 2px solid ${({ theme }) => theme.color.surface.page};
`;
