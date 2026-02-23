import styled, { css, keyframes } from 'styled-components';


/////////////////////////!SECTION

export const UploadContainer = styled.div<{ $variant: 'default' | 'compact' | 'avatar' }>`
  width: 100%; ${props => props.$variant === 'avatar' &&`
    width: 120px;
    height: 120px;
  `} 
`;

export const DropZone = styled.div<{
  $isDragging: boolean;
  $hasError: boolean;
  $color: string;
  $variant: 'default' | 'compact' | 'avatar';
}>`
  border: 2px dashed ${props => { 
    if (props.$hasError) return '#ef4444'; 
    if (props.$isDragging) return props.$color; 
    return '#d1d5db'; }
  }; 
  border-radius: ${props => props.$variant === 'avatar' ? '50%' : '12px'}; 
  padding: ${props => props.$variant === 'compact' ? '20px' : props.$variant === 'avatar' ? '0' : '40px'}; 
  text-align: center; 
  background: ${props => props.$isDragging ?`${props.$color}10`: '#fafafa'}; 
  cursor: pointer; 
  transition: all 0.2s ease; ${props => props.$variant === 'avatar' &&`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  `}

  &:hover {
    border-color: ${props => props.$hasError ? '#ef4444' : props.$color};
    background: ${props => props.$isDragging ? `${props.$color}10` : '#f5f5f5'};
  }
`;



export const HiddenInput = styled.input`display: none;`;

export const UploadIcon = styled.div<{ $color: string }>`
  color: ${props => props.$color}; 
  margin: 0 auto 12px; 
  display: flex; 
  justify-content: center;
`;

export const UploadText = styled.p`color: #374151; font-size: 14px; margin: 0 0 4px; font-weight: 500;`;

export const UploadHint = styled.p`color: #6b7280; font-size: 12px; margin: 0;`;

export const FileList = styled.div`margin-top: 16px; display: flex; flex-direction: column; gap: 8px;`;

export const FileItem = styled.div<{ $status: 'uploading' | 'success' | 'error' }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
  ${props => props.$status === 'error' && `border-color: #ef4444; background: #fef2f2;`}
  ${props => props.$status === 'success' && `border-color: #10b981; background: #f0fdf4;`}
`;

export const FileIcon = styled.div<{ $color: string }>`
  color: ${props => props.$color}; 
  display: flex; 
  align-items: center; 
  flex-shrink: 0;
`;

export const FileInfo = styled.div`flex: 1; min-width: 0;`;

export const FileName = styled.div`
  font-size: 14px; 
  font-weight: 500; 
  color: #1a1a1a; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const FileSize = styled.div`font-size: 12px; color: #6b7280; margin-top: 2px;`;

export const ProgressBar = styled.div`width: 100%; height: 4px; background: #e5e7eb; border-radius: 2px; margin-top: 8px; overflow: hidden;`;

export const Progress = styled.div<{ $progress: number; $color: string }>`
  height: 100%; 
  width: ${props => props.$progress}%; 
  background: ${props => props.$color}; 
  transition: width 0.3s ease;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #ef4444;
  }
`;

export const ErrorMessage = styled.div`color: #ef4444; font-size: 12px; margin-top: 8px;`;

export const AvatarPreview = styled.img`width: 100%; height: 100%; object-fit: cover; border-radius: 50%;`;

export const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 50%;

  ${DropZone}:hover & {
    opacity: 1;
  }
`;

export const ImagePreviewContainer = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px;`;

export const ImagePreview = styled.div`
  position: relative; 
  width: 100px; 
  height: 100px; 
  border-radius: 8px; 
  overflow: hidden; 
  border: 2px solid #e5e7eb;
`;

export const PreviewImage = styled.img`width: 100%; height: 100%; object-fit: cover;`;

export const PreviewRemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ImagePreview}:hover & {
  opacity: 1;
  }

  &:hover {
  background: rgba(0, 0, 0, 0.9);
  }
`;