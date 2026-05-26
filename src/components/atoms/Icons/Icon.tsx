import React, { FC } from 'react';
import type { IconProps } from './Icon.types';
import { StyledIcon } from './Icon.styled';
// import { colors as tokenColor } from '../../../assets/core/tokens';
// import { ICON_REGISTRY } from '../../../assets/svgs/icons';
import { icons } from '../../../assets/svgs';




export const Icon:FC<IconProps> = ({ 
  name, 
  size='md', 
  color, 
  title,
  className,
  onClick
}) => {
  const SvgComponent = icons[name]
  return (
    <>
      <StyledIcon
        //viewBox="0 0 20 20"
        $size={size}
        $color={color}
        $clickable={!!onClick}
        // className={className}
        // data-icon={icons[name]}
        // focusable="false"
        // role="img"
        // onClick={onClick}
        // aria-hidden="true"
        // xmlns="http://www.w3.org/2000/svg"
      >
        {/* <path fillRule="evenodd" d={icons[name]} clipRule="evenodd" /> */}
        <SvgComponent 
          aria-hidden={!title}
          //role={title ? 'img' : undefined}
          aria-label={title}
        />
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
