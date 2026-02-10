import React, { FC, useState, useRef, useEffect } from 'react';
import {
  CollapseContainer,
  CollapseHeader,
  CollapseTitle,
  CollapseIcon,
  CollapseContent,
  CollapseInner,
} from './Collapse.styled';
import { CollapseProps } from './Collapse.types';


const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Collapse:FC<CollapseProps> = ({
  title,
  children,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  disabled = false,
  showIcon = true,
  icon,
  bordered = true,
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(1000);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  const handleToggle = () => {
    if (disabled) return;

    const newIsOpen = !isOpen;

    if (!isControlled) {
      setUncontrolledIsOpen(newIsOpen);
    }

    onToggle?.(newIsOpen);

  };

  return (
    <CollapseContainer $bordered={bordered}>
      <CollapseHeader
        onClick={handleToggle}
        disabled={disabled}
        $disabled={disabled}
        $bordered={bordered}
        aria-expanded={isOpen}
      >
        <CollapseTitle>{title}</CollapseTitle>
        {showIcon && (
          <CollapseIcon $isOpen={isOpen}>
          {icon || <ChevronDownIcon />}
          </CollapseIcon>
        )}
      </CollapseHeader>
      <CollapseContent $isOpen={isOpen} $maxHeight={maxHeight}>
        <CollapseInner ref={contentRef}>
          {children}
        </CollapseInner>
      </CollapseContent>
    </CollapseContainer>
  );
};

