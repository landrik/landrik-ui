import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[1] ?? 4}px`};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  font-weight: ${({ theme }) => theme?.typography?.weight?.medium || 500};
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#6b7280'};
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
`;

