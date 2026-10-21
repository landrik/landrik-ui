import React from 'react';
export interface RadioOptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface RadioButtonProps {
    name: string;
    options: RadioOptionProps[];
    value: string;
    onChange: (value: string) => void;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare const RadioButton: React.FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map