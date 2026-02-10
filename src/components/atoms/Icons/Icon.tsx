import React, { FC } from 'react';
import type { IconProps, IconSize, IconName } from './Icon.types';
import { StyledIcon } from './Icon.styled';
import { colors as tokenColor } from '../../../assets/core/tokens';
import { icons } from '../../../assets/svgs/icons';




export const Icon:FC<IconProps> = ({ 
  name, 
  size='md', 
  color, 
  className,
  onClick
}) => {
  return (
    <>
      <StyledIcon
        viewBox="0 0 20 20"
        $size={size}
        $color={color}
        $clickable={!!onClick}
        className={className}
        data-icon={name}
        focusable="false"
        role="img"
        onClick={onClick}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <path fillRule="evenodd" d={icons[name]} clipRule="evenodd" /> */}
        <>{icons[name]}</>
      </StyledIcon>



      {/* <svg 
        aria-hidden="true"
        className="icon-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 14 14"
        data-icon={name}
        focusable="false"
        role="img"      
        fill={color ? tokenColor[color] : 'currentColor'}
      >
        <>{icons[name]}</>
    </svg> */}
    </>
  )
}
