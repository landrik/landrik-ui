import React from 'react';
import Icon from '../../Icon';
import { icons } from '../../../assets/shared/icons';
import classNames from 'classnames';
import { spacing } from '../../../core/tokens/tokens';

export type IconType = keyof typeof icons;

interface InputProps {
  label?: string;
  error?: string;
  success?: string;
  type: "number" | "password" | "text" | "email";
  shape?: "rounded" | "basic";
  variant?: "success" | "error";
  startIcon?: IconType;
  endIcon?: IconType;
  disabled?: boolean;
}

const Input = ({ error, success, disabled, variant, label, type, shape, startIcon, endIcon, ...props }: InputProps) => {
  
  const inputWrapClass = classNames('lk-input--container', {
    [`lk-input--${success}`]: !!success,
    [`lk-input--${error}`]: !!error,
    [`lk-input--${variant}`]: !!variant,
    [`lk-input--${disabled}`]: !!disabled,
    //[`lk-input--${shape}`]: !!shape,
  });

  // let className = "lk-input--container";
  // if (error && !success) {
  //   className = "lk-input--container lk-input--error";
  // }
  // if (success && !error) {
  //   className = "lk-input--container lk-input--success";
  // }
  // if (disabled) {
  //   className = "lk-input--container lk-input--disabled";
  // }
  
  let inputClass = classNames('lk-input', {[`lk-input--${shape}`]: !!shape});

  return (
    <div className={inputWrapClass}>
      {label && <label>{label}</label>}
      <div className={inputClass}>
        {startIcon && (
          <span className=''>
            <Icon name={startIcon} />
          </span>
        ) }
        <input {...props} type={type} />
        {endIcon && (
          <span className=''>
            <Icon name={endIcon} />
          </span>
        ) }
      </div>
      {error && !disabled && !success && <span className='lk-error-text'>{error}</span>}
      {success && !disabled && !error && <span className='lk-success-text'>{success}</span>}
    </div>
  )
}

export default Input
