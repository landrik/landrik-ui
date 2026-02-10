import { ImgHTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'rounded' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  initials?: string;
  fallback?: React.ReactNode;
}