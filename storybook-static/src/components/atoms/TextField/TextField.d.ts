import { FC } from 'react';
import { InputShape } from './TextField.styled';
import { IconName } from '../../../assets/svgs';
export type TextFieldProps = {
    type?: 'text' | 'number' | 'email' | 'password';
    shape?: InputShape;
    size?: string;
    labelText: string;
    placeholder: string;
    className?: string;
    id?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    warnText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    color?: string;
    success?: boolean;
    value?: string;
    onChangeInput: (value: string) => void;
    showPasswordToggle?: boolean;
};
/**
* @author
* @function @TextField
**/
export declare const TextField: FC<TextFieldProps>;
//# sourceMappingURL=TextField.d.ts.map