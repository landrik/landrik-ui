import React from 'react';
import { styled } from '@storybook/theming';
import { icons } from '../../assets/shared/icons';
import { color as tokenColor } from '../../core/tokens/tokens';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: number;
  color?: keyof typeof tokenColor;
  //icon: IconType;
  //scale: "small" | "medium" | "large";
}


const Icon = ({ name, size=14, color, ...props}: IconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={color ? tokenColor[color] : 'currentColor'}
      {...props}
    >
      <>{icons[name]}</>
    </svg>
  )
}

Icon.defaultProps = {
  name: "watch"
};

export default Icon;