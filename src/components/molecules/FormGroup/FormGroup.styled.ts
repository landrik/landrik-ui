import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[5] ?? 20}px`};
  width: 100%;
  max-width: 440px;
  padding: ${({ theme }) => `${theme?.spacing?.[6] ?? 24}px`};
  background: ${({ theme }) => theme?.color?.surface?.default || '#ffffff'};
  border: 1px solid ${({ theme }) => theme?.color?.border?.default || '#e5e7eb'};
  border-radius: ${({ theme }) => theme?.radius?.lg || '0.5rem'};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[1] ?? 4}px`};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme?.typography?.size?.xl || '1.25rem'};
  font-weight: ${({ theme }) => theme?.typography?.weight?.semibold || 600};
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
`;

export const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#6b7280'};
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[4] ?? 16}px`};
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[1] ?? 4}px`};
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

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => `${theme?.spacing?.[3] ?? 12}px`};
  margin-top: ${({ theme }) => `${theme?.spacing?.[2] ?? 8}px`};
`;

export const FooterWrapper = styled.div`
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#6b7280'};
  text-align: center;
`;
