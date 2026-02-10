
//import { colors as tokenColor } from '../../../assets/core/tokens';
import { SVGAttributes } from 'react';
import { icons } from '../../../assets/svgs/icons';

export type IconName = keyof typeof icons;
//export type IconColor = keyof typeof tokenColor;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGPathElement>{
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  onClick?: () => void;

}
