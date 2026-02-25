import { FC } from 'react';
import { ReactNode } from 'react';
import { IconName } from '../../../assets/svgs/icons';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'rounded' | 'square' | 'pill';
export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    shape?: ButtonShape;
    textColor?: 'default' | 'white' | 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
    icon?: IconName;
    iconOnly?: boolean;
    iconPosition?: 'left' | 'right';
    backgroundColor?: string;
    children?: ReactNode;
    fullWidth?: boolean;
    onClick?: () => void;
}
/**
* @author landry.karege
* @function @Button
**/
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map