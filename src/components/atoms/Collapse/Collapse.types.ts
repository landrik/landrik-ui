import { ReactNode } from 'react';

export interface CollapseProps{
  
  title: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  disabled?: boolean;
  showIcon?: boolean;
  icon?: ReactNode;
  bordered?: boolean;

}