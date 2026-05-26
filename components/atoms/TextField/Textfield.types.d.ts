import { IconName } from '../../../assets/svgs/icons';
export type InputShape = 'rounded' | 'square' | 'pill';
export type InputFieldType = 'text' | 'number' | 'email' | 'password';
export type TextFieldProps = {
    type?: InputFieldType;
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
//# sourceMappingURL=Textfield.types.d.ts.map