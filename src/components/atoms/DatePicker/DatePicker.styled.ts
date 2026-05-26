import styled from 'styled-components';

export const DatePickerWrapper = styled.div`position: relative; width: 100%;`;

export const DatePickerLabel = styled.label`
  display: block; 
  font-size: ${({ theme }) => theme.typography.size.sm}; 
  font-weight: ${({ theme }) => theme.typography.weight.medium}; 
  color: ${({ theme }) => theme.color.neutral[700]}; 
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
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
  padding: ${({ theme }) => theme.spacing[3]}px;
  background-color: ${p => p.$disabled ? p.theme.color.neutral[50] : p.theme.color.neutral[0]};
  border: 1px solid ${p => p.$hasError ? p.theme.color.danger : p.theme.color.neutral[300]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-family: ${({ theme }) => theme.typography.family.sans};
  color: ${({ theme }) => theme.color.neutral[900]};
  cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
  transition: all ${({ theme }) => theme.transitions.duration.base};
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${p => p.$hasError ? p.theme.color.danger : p.theme.color.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${p => p.$hasError ? p.theme.color.danger : p.theme.color.accent[500]};
    box-shadow: 0 0 0 3px ${p => p.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(14, 165, 233, 0.1)'};
  }
`;

export const DatePickerPlaceholder = styled.span`color: ${({ theme }) => theme.color.neutral[400]};`;

export const DatePickerValue = styled.span`color: ${({ theme }) => theme.color.neutral[900]}; font-weight: ${({ theme }) => theme.typography.weight.medium};`;

export const DatePickerIcons = styled.div`display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[12]}px;`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.neutral[500]};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all ${({ theme }) => theme.transitions.preset.fast};

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.neutral[700]};
  }
`;

export const DatePickerDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute; 
  top: calc(100% + 8px); 
  left: 0; 
  z-index: ${({ theme }) => theme.zIndices.dropdown}; 
  opacity: ${p => p.$isOpen ? 1 : 0}; 
  visibility: ${p => p.$isOpen ? 'visible' : 'hidden'}; 
  transform: ${p => p.$isOpen ? 'translateY(0)' : 'translateY(-8px)'}; 
  transition: all ${({ theme }) => theme.transitions.duration.base};
`;

export const DatePickerError = styled.span`
  display: block; 
  margin-top: ${({ theme }) => theme.spacing[4]}px; 
  font-size: ${({ theme }) => theme.typography.size.sm}; 
  color: ${({ theme }) => theme.color.danger[600]};
`;