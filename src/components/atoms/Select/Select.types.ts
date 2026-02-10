export type SelectShape = 'rounded' | 'square' | 'pill';
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
  shape?: SelectShape;
}