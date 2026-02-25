import { SVGAttributes } from 'react';
import { IconName } from '../../../assets/svgs/icons';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface IconProps extends SVGAttributes<SVGPathElement> {
    name: IconName;
    size?: IconSize;
    color?: string;
    className?: string;
    onClick?: () => void;
}
//# sourceMappingURL=Icon.types.d.ts.map