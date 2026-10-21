import { AnchorHTMLAttributes, ReactNode } from 'react';
import { IconName } from '../../../assets/svgs';
import { ButtonProps } from "../Button";
export type LinkVariant = 'primary' | 'secondary' | 'subtle' | 'danger';
export type LinkSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';
interface BaseProps {
    children?: ReactNode;
    variant?: LinkVariant;
    size?: LinkSize;
    underline?: boolean;
    disabled?: boolean;
    isExternal?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    iconPosition?: IconPosition;
    icon?: IconName;
    isButton?: boolean;
}
type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
    isButton?: false;
};
type ButtonModeProps = BaseProps & Omit<ButtonProps, 'children'> & {
    isButton: true;
};
export type LinkProps = AnchorProps | ButtonModeProps;
export {};
//# sourceMappingURL=Link.types.d.ts.map