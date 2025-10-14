import React, { ReactNode } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import { icons } from '../../assets/shared/icons';
export type IconType = keyof typeof icons;


interface BadgeProps {
  label: ReactNode;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  variant: "primary"
    | "danger"
    | "warning"
    | "success"
    | "dark";
}

const Badge = ({label="default", icon, size, variant, ...props}: BadgeProps)=> {
  
  const badgeClasses = classNames('lk-badge', {
    [`lk-badge--${size}`]: !!size,
    [`lk-badge--${variant}`]: !!variant,
  });
  

  return(
    <div className={badgeClasses} {...props}>
      {icon && (
        <div className="lk-badge__icon-slot">
          <span className='lk-icon'>
            <Icon name={icon} />
          </span>
        </div>
      )}
     <span className='lk-badge__text'> {label}</span>
    </div>
  );
}

Badge.defaultProps = {
  variant: "primary",
  size : "md"
};

export default Badge;