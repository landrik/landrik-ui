import { HTMLAttributes } from 'react';
import { IconName } from '../../../assets/svgs';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: IconSize;
  color?: string;
  title?: string;
}
