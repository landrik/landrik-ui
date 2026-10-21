import React from 'react';
export interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    indeterminate?: boolean;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare const CheckBox: React.FC<CheckboxProps>;
//# sourceMappingURL=CheckBox.d.ts.map