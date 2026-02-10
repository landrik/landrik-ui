import React, { FC, useState } from 'react';
import { AvatarProps } from './Avatar.types';
import {
  AvatarWrap,
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  StatusIndicator
} from './Avatar.styled';


export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  shape = 'circle',
  status,
  initials,
  fallback,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const showFallback = !src || imageError;

  return (
    <AvatarWrap $size={size}>
      <AvatarContainer $shape={shape}>
        {!showFallback ? (
        <AvatarImage
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
        />
        ) : (
        <AvatarFallback>
          {fallback || initials || alt.charAt(0).toUpperCase()}
        </AvatarFallback>
        )}
        </AvatarContainer>
        {status && <StatusIndicator $status={status} $size={size} $statusColor={status} />}
    </AvatarWrap>
  );
};

