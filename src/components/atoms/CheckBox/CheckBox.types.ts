export type CheckBoxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  color?: string;
  size?: CheckBoxSize;
}