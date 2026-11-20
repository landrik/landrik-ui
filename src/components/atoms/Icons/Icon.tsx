import React, { FC } from 'react';
import type { IconProps } from './Icon.types';
import { StyledIcon } from './Icon.styled';
import { icons } from '../../../assets/svgs';

export const Icon: FC<IconProps> = ({
  name,
  size = 'md',
  color,
  title,
  className,
  onClick,
}) => {
  const SvgComponent = icons[name];

  if (!SvgComponent) {
    return null;
  }

  return (
    <StyledIcon
      $size={size}
      $color={color}
      $clickable={Boolean(onClick)}
      className={className}
      data-icon={name}
      onClick={onClick}
    >
      <SvgComponent
        aria-hidden={!title}
        role={title ? 'img' : undefined}
        aria-label={title}
        focusable="false"
      />
    </StyledIcon>
  );
};
