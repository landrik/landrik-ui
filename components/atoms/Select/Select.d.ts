import React from 'react';
export interface SelectOptionProps {
    value: string;
    label: string;
}
export interface SelectProps {
    options: SelectOptionProps[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    color?: string;
    shape?: 'rounded' | 'square' | 'pill';
}
export declare const Select: React.FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map