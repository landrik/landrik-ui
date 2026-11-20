export type RadioButtonSize = 'sm' | 'md' | 'lg';

export interface RadioOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonProps {
  name: string;
  options: RadioOptionProps[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
  color?: string;
  size?: RadioButtonSize;
  disabled?: boolean;
}
