import styled from 'styled-components';

export const DatePickerWrapper = styled.div`position: relative; width: 100%;`;

export const DatePickerLabel = styled.label`
  display: block; 
  font-size: ${p => p.theme.typography.fontSize.sm}; 
  font-weight: ${p => p.theme.typography.fontWeight.medium}; 
  color: ${p => p.theme.colors.neutral[700]}; 
  margin-bottom: ${p => p.theme.spacing[1]}px;
`;

interface DatePickerInputProps {
  $hasError: boolean;
  $disabled: boolean;
}

export const DatePickerInput = styled.button<DatePickerInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing[3]}px;
  background-color: ${p => p.$disabled ? p.theme.colors.neutral[50] : p.theme.colors.neutral[0]};
  border: 1px solid ${p => p.$hasError ? p.theme.colors.semantic.error : p.theme.colors.neutral[300]};
  border-radius: ${p => p.theme.radii.lg};
  font-size: ${p => p.theme.typography.fontSize.base};
  font-family: ${p => p.theme.typography.fontFamily.sans};
  color: ${p => p.theme.colors.neutral[900]};
  cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
  transition: all ${p => p.theme.transitions.duration.base};
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${p => p.$hasError ? p.theme.colors.semantic.error : p.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${p => p.$hasError ? p.theme.colors.semantic.error : p.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${p => p.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(14, 165, 233, 0.1)'};
  }
`;

export const DatePickerPlaceholder = styled.span`color: ${p => p.theme.colors.neutral[400]};`;

export const DatePickerValue = styled.span`color: ${p => p.theme.colors.neutral[900]}; font-weight: ${p => p.theme.typography.fontWeight.medium};`;

export const DatePickerIcons = styled.div`display: flex; align-items: center; gap: ${p => p.theme.spacing[2]}px;`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: ${p => p.theme.colors.neutral[500]};
  cursor: pointer;
  border-radius: ${p => p.theme.radii.sm};
  transition: all ${p => p.theme.transitions.fast};

  &:hover {
    background-color: ${p => p.theme.colors.neutral[100]};
    color: ${p => p.theme.colors.neutral[700]};
  }
`;

export const DatePickerDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute; 
  top: calc(100% + 8px); 
  left: 0; 
  z-index: ${p => p.theme.zIndices.dropdown}; 
  opacity: ${p => p.$isOpen ? 1 : 0}; 
  visibility: ${p => p.$isOpen ? 'visible' : 'hidden'}; 
  transform: ${p => p.$isOpen ? 'translateY(0)' : 'translateY(-8px)'}; 
  transition: all ${p => p.theme.transitions.duration.base};
`;

export const DatePickerError = styled.span`
  display: block; 
  margin-top: ${p => p.theme.spacing[1]}px; 
  font-size: ${p => p.theme.typography.fontSize.sm}; 
  color: ${p => p.theme.colors.semantic.error};
`;