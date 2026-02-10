import React, { useState, useRef, useEffect, FC } from 'react';
import { TooltipProps } from './Tooltip.types';
import { TooltipWrapper, TooltipContent } from './Tooltip.styled';

export const Tooltip:FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  delay = 200,
}) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TooltipWrapper
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <TooltipContent $placement={placement} $visible={visible} role="tooltip">
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};