

export type RadioButtonShape = 'sm' | 'md' | 'lg';
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
  size?: RadioButtonShape;
}