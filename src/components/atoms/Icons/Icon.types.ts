
//import { colors as tokenColor } from '../../../assets/core/tokens';
import { SVGAttributes } from 'react';
import { ICON_REGISTRY, IconName } from '../../../assets/svgs/icons';
//import { ICON_REGISTRY, IconName } from './icons/index';

//export type IconName = keyof typeof icons;
//export type IconColor = keyof typeof tokenColor;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGPathElement>{
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  onClick?: () => void;

}


// export interface IconProps {
//   /** Name of the icon */
//   name: IconName;
//   /** Size of the icon in pixels */
//   size?: number;
//   /** Color of the icon */
//   color?: string;
//   /** Hover color */
//   hoverColor?: string;
//   /** Background color */
//   backgroundColor?: string;
//   /** Hover background color */
//   hoverBackgroundColor?: string;
//   /** Padding around the icon */
//   padding?: string;
//   /** Border radius */
//   borderRadius?: string;
//   /** Rotation angle in degrees */
//   rotation?: number;
//   /** Whether the icon is clickable */
//   clickable?: boolean;
//   /** onClick handler */
//   onClick?: () => void;
//   /** Animation type */
//   animation?: 'spin' | 'pulse' | 'bounce' | 'shake' | 'none';
//   /** Add border around icon */
//   bordered?: boolean;
//   /** Border color */
//   borderColor?: string;
//   /** Badge content */
//   badge?: string | number;
//   /** Badge color */
//   badgeColor?: string;
//   /** Badge position */
//   badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
//   /** Stroke width */
//   strokeWidth?: number;
//   /** Additional CSS class */
//   className?: string;
//   /** ARIA label for accessibility */
//   ariaLabel?: string;
// }
