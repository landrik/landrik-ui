import React, { useEffect, useRef, useState } from 'react';
import {
  SelectWrapper,
  SelectButton,
  Dropdown,
  Option,
  ErrorMessage,
  ChevronIcon,
} from './Select.styles';

import { SelectOptionProps, SelectProps } from './Select.types';
import { Icon } from '../Icons';



export const Select: React.FC<SelectProps> = ({
  id,
  options,
  value,
  defaultValue = '',
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error,
  color, // Optional override — defaults to theme.color.accent in Select.styles.ts
  shape = 'rounded',
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === currentValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOptionProps) => {
    if (option.disabled) return;
    if (!isControlled) {
      setInternalValue(option.value);
    }
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          setHighlightedIndex((prev) => (prev + 1) % options.length);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(options.length - 1);
        } else {
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        }
        break;
      case 'Enter':
      case ' ':
        if (isOpen && highlightedIndex >= 0 && options[highlightedIndex]) {
          e.preventDefault();
          handleSelect(options[highlightedIndex]);
        }
        break;
    }
  };

  return (
    <>
      <SelectWrapper ref={wrapperRef} onKeyDown={handleKeyDown}>
        <SelectButton
          id={id}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-invalid={ariaInvalid ?? Boolean(error)}
          aria-describedby={ariaDescribedBy}
          $isOpen={isOpen}
          $color={color}
          $error={!!error}
          $shape={shape}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          disabled={disabled}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronIcon $isOpen={isOpen}>
            <Icon name="arrow-down" />
          </ChevronIcon>
        </SelectButton>

        <Dropdown role="listbox" $isOpen={isOpen}>
          {options.map((option, index) => {
            const isSelected = option.value === currentValue;
            return (
              <Option
                key={option.value}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled}
                $selected={isSelected}
                $highlighted={index === highlightedIndex}
                $color={color}
                onClick={() => handleSelect(option)}
              >
                {option.label}
                {isSelected && <Icon name="check" />}
              </Option>
            );
          })}
        </Dropdown>
      </SelectWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
