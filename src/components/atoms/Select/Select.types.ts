export type SelectShape = 'rounded' | 'square' | 'pill';
export interface SelectOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  id?: string;
  options: SelectOptionProps[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  color?: string;
  shape?: SelectShape;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}