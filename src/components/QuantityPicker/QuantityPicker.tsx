import React from 'react';
import Icon from '../Icon';

export interface QuantityPickerProps {
  shape?: "rounded" | "basic";
  max: number;
  count: number;
  allowNegative?: boolean;
  disabled?: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}


export const QuantityPicker = ({shape, max, count, allowNegative, disabled, onDecrease, onIncrease }: QuantityPickerProps) => {

  const quantityClass = disabled 
    ? `lk-quantity--picker lk-quantity--${shape} lk-quantity-disabled` 
    : `lk-quantity--picker lk-quantity--${shape}`;

  const handleIncrease = () => {
    if(count < max ){
      onIncrease()
    }
  }
  const handleDecrease = () => {
    if(count <= 0 && !allowNegative ){
      return
    }
    onDecrease();
  }

  return (
    <div className={quantityClass}>
      <button className="lk-quantity--action" onClick={handleIncrease}>
        <Icon name='add' />
      </button>
      <div className="lk-quantity--count">{count}</div>
      <button className="lk-quantity--action" onClick={handleDecrease}>
        <Icon name='subtract' />
      </button>
    </div>
  );
}

QuantityPicker.defaultProps = {
  allowNegative: false,
  disabled: false,
};
