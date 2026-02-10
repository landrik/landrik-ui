import React, { useState } from 'react';
import { RatingProps } from './Rating.types';
import {
  RatingContainer,
  StarsContainer,
  StarButton,
  StarIcon,
  RatingValue,
} from './Rating.styled';

const StarSVG: React.FC<{ filled: number; color: string }> = ({ filled, color }) => (
  <StarIcon viewBox="0 0 20 20" $filled={filled} $color={color}>
    <path
    className="star-bg"
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
    <path
    className="star-fill"
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </StarIcon>
);

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  readOnly = false,
  size = 'md',
  allowHalf = false,
  color = '#f59e0b',
  showValue = false,
}) => {
  
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const handleClick = (starIndex: number, isHalf: boolean) => {
    if (readOnly || !onChange) return;
    const newValue = isHalf ? starIndex + 0.5 : starIndex + 1;
    onChange(newValue);
  };

  const handleMouseMove = (starIndex: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (readOnly || !allowHalf) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const isLeftHalf = event.clientX - rect.left < rect.width / 2;
    setHoverValue(isLeftHalf ? starIndex + 0.5 : starIndex + 1);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <RatingContainer>
      <StarsContainer onMouseLeave={handleMouseLeave}>
        {Array.from({ length: max }, (_, i) => {

          const starValue = i + 1;
          const fillPercentage = Math.min(Math.max((displayValue - i) * 100, 0), 100);
          return (
            <StarButton
              key={i}
              $size={size}
              $readOnly={readOnly}
              onClick={(e) => {
                if (!allowHalf) {
                  handleClick(i, false);
                  return;
                }
                const rect = e.currentTarget.getBoundingClientRect();
                const isLeftHalf = e.clientX - rect.left < rect.width / 2;
                handleClick(i, isLeftHalf);
              }}
              onMouseMove={(e) => handleMouseMove(i, e)}
              disabled={readOnly}
              aria-label={`Rate ${starValue} out of ${max}`}
            >
              <StarSVG filled={fillPercentage} color={color} />
            </StarButton>
          );

        })}
      </StarsContainer>
      {showValue && (
        <RatingValue>
          {value.toFixed(1)} / {max}
        </RatingValue>
      )}
    </RatingContainer>
  );
};