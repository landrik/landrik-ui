import React, { useRef, useState, useEffect } from 'react';
import { SliderProps } from './Slider.types';
import {
SliderContainer,
SliderLabel,
SliderWrapper,
SliderTrack,
SliderFill,
SliderThumb,
SliderLabels,
SliderLabelText,
SliderValue,
} from './Slider.styled';

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  disabled = false,
  showValue = false,
  showMinMax = false,
  label,
  formatValue,
}) => {
const trackRef = useRef<HTMLDivElement>(null);
const [isDragging, setIsDragging] = useState(false);

const percentage = ((value - min) / (max - min)) * 100;

const updateValue = (clientX: number) => {
if (!trackRef.current || disabled) return;


const rect = trackRef.current.getBoundingClientRect();
const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
const newValue = min + percent * (max - min);
const steppedValue = Math.round(newValue / step) * step;
const clampedValue = Math.max(min, Math.min(max, steppedValue));

if (clampedValue !== value) {
  onChange(clampedValue);
}


};

const handleMouseDown = (e: React.MouseEvent) => {
if (disabled) return;
setIsDragging(true);
updateValue(e.clientX);
};

const handleTouchStart = (e: React.TouchEvent) => {
if (disabled) return;
setIsDragging(true);
updateValue(e.touches[0].clientX);
};

useEffect(() => {
if (!isDragging) return;


const handleMouseMove = (e: MouseEvent) => {
  updateValue(e.clientX);
};

const handleTouchMove = (e: TouchEvent) => {
  updateValue(e.touches[0].clientX);
};

const handleEnd = () => {
  setIsDragging(false);
};

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);

return () => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('mouseup', handleEnd);
  document.removeEventListener('touchend', handleEnd);
};


}, [isDragging, disabled, min, max, step]);

const handleKeyDown = (e: React.KeyboardEvent) => {
if (disabled) return;


let newValue = value;

switch (e.key) {
  case 'ArrowLeft':
  case 'ArrowDown':
    e.preventDefault();
    newValue = Math.max(min, value - step);
    break;
  case 'ArrowRight':
  case 'ArrowUp':
    e.preventDefault();
    newValue = Math.min(max, value + step);
    break;
  case 'Home':
    e.preventDefault();
    newValue = min;
    break;
  case 'End':
    e.preventDefault();
    newValue = max;
    break;
  default:
    return;
}

onChange(newValue);


};

const displayValue = formatValue ? formatValue(value) : value.toString();

return (
<SliderContainer>
{label && <SliderLabel>{label}</SliderLabel>}


  <SliderWrapper>
    {showMinMax && <SliderLabelText>{min}</SliderLabelText>}

    <SliderTrack
      ref={trackRef}
      $size={size}
      $disabled={disabled}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
    >
      <SliderFill $percentage={percentage} />
      <SliderThumb
        $percentage={percentage}
        $size={size}
        $disabled={disabled}
        $isDragging={isDragging}
      />
    </SliderTrack>

    {showMinMax && <SliderLabelText>{max}</SliderLabelText>}
    {showValue && <SliderValue>{displayValue}</SliderValue>}
  </SliderWrapper>
</SliderContainer>


);
};