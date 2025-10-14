import classNames from 'classnames';
import React, { Children, ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
  error?: string;
  success?: string;
  variant: "success" | "error";
  disabled?: boolean;
}

interface OptionProps {
  children: ReactNode
}

/**
 * 
 */
export const Select = ({ children, variant, error, success, disabled, ...props}: SelectProps) => {
  const selectWrapClass = classNames('lk-select--container', {
    // [`lk-select--${success}`]: !!success,
    // [`lk-select--${error}`]: !!error,
    [`lk-select--${variant}`]: !!variant,
    [`lk-select--${disabled}`]: !!disabled,
  });

  return (
    <div className={selectWrapClass}>
      <div className="lk-select">
        <select {...props}>{children}</select>
      </div>
      {error && !disabled && !success && <span className='lk-error-text'>{error}</span>}
      {success && !disabled && !error && <span className='lk-success-text'>{success}</span>}
    </div>
  );
}

export const Option = ({children, ...props}: OptionProps) => {
  return (
    <option className="lk-select-item" {...props}>{children}</option>
  )
} 
