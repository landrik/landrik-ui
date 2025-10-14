import React, {ReactNode} from 'react'
import Icon from '../Icon';
import { icons } from '../../assets/shared/icons';
import classNames from 'classnames';
export type IconType = keyof typeof icons;



export interface ButtonProps {

  size?: 'sm' | 'md' | 'lg';
  type?: 'filled'| 'outline'| 'text';
  variant?: 'primary' | 'secondary' | 'danger'| 'success',
  shape?: 'rounded' | 'rectangular';
  textColor?: 'default'| 'white'| 'primary';
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
  onlyIcon?: IconType;
  backgroundColor?: string;
  label: ReactNode;
  shadow?: boolean;
  onClick?: () => void;

}

const Button = ({
  size = 'md',
  backgroundColor,
  textColor,
  label = 'Button component',
  shadow = false,
  disabled = false,
  type = 'filled',
  variant,
  htmlType = 'button',
  shape,
  startIcon,
  endIcon,
  onlyIcon,
  ...props
}: ButtonProps) => {



  const buttonClasses = classNames('lk-button', {
    [`lk-button--${size}`]: !!size,
    [`lk-button--${type}`]: !!type,
    [`lk-button--${variant}`]: !!variant,
    [`lk-button--${shadow}`]: !!shadow,
    [`lk-button--${shape}`]: !!shape,
    [`lk-button--${disabled}`]: !!disabled,
    [`lk-button--${backgroundColor}`]: !!backgroundColor,
    [`lk-button--${textColor}`]: !!textColor,
    'lk-button--startIcon': !!startIcon && !onlyIcon,
    'lk-button--endIcon': !!endIcon && !onlyIcon,
    'lk-button--onlyIcon': !!onlyIcon,
  });
  
  return (
    <button 
      type = {htmlType} 
      className={buttonClasses}
      {...props}
    >
      {startIcon && (
        <div className="lk-button__icon-slot">
          <span className='lk-icon startIcon'>
            <Icon name={startIcon} />
          </span>
        </div>
      )}
      <span className='lk-button__text'>{label}</span>
      {endIcon && (
        <div className="lk-button__icon-slot">
          <span className='lk-icon endIcon'>
            <Icon name={endIcon} />
          </span>
        </div>
      )}

      {onlyIcon && (
        <div className="lk-button__icon-slot">
        <span className='lk-icon onlyIcon'>
          <Icon name={onlyIcon} />
        </span>
      </div>
      )}
    </button>
  )
}

export default Button;