import React, { FC, useState } from 'react';
import { AvatarProps } from './Avatar.types';
import {
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
    <AvatarContainer $size={size} $shape={shape}>
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
      {status && <StatusIndicator $status={status} $size={size} />}
    </AvatarContainer>
  );
};

