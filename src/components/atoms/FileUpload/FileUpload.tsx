import React, { useState, useRef, FC, DragEvent } from 'react';
import { FileUploadProps, UploadedFile } from './FileUpload.types';
import { Upload, File, X, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';

import {
  DropZone,
  HiddenInput,
  UploadIcon,
  UploadText,
  UploadHint,
  FileList,
  FileItem,
  FileInfo,
  FileIcon,
  FileName,
  FileSize,
  ProgressBar,
  RemoveButton,
  UploadContainer,
  AvatarPreview,
  AvatarOverlay,
  ImagePreviewContainer,
  ImagePreview,
  PreviewImage,
  PreviewRemoveButton,
  ErrorMessage,
  Progress,
} from './FileUpload.styled';
import { Icon } from '../Icons';

const UploadCloudIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M16 16l-4-4-4 4"></path>
  <path d="M12 12v9"></path>
  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
  <polyline points="16 16 12 12 8 16"></polyline>
  </svg>
);

// const FileIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//   <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
//   <polyline points="13 2 13 9 20 9"></polyline>
//   </svg>
// );

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export const FileUpload: FC<FileUploadProps> = ({
  accept,
  multiple = true,
  maxSize = 5 * 1024 * 1024, // 5MB
  maxFiles,
  files,
  onFilesChange,
  onUpload,
  disabled = false,
  error,
  color = '#3b82f6',
  variant = 'default',
  showPreview = false,
}) => {

  const [isDragging, setIsDragging] = useState(false);
  //const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map(t => t.trim());
      const fileType = file.type;
      const fileExt = '.' + file.name.split('.').pop();
      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return fileExt === type;
        }
        if (type.endsWith('/*')) {
          return fileType.startsWith(type.replace('/*', ''));
        }
        return fileType === type;
      });

      if (!isAccepted) {
        return `File type not accepted. Allowed: ${accept}`;
      }
    }
    return null;
  };

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList || disabled) return;
    const newFiles: UploadedFile[] = [];
    const filesToProcess = Array.from(fileList);

    if (maxFiles && files.length + filesToProcess.length > maxFiles) {
      onFilesChange([...files]);
      return;
    }

    for (const file of filesToProcess) {
      const validationError = validateFile(file);
      const uploadedFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: validationError ? 'error' : 'uploading',
        progress: 0,
        error: validationError || undefined,
        file: file,
      };

      if (file.type.startsWith('image/')) {
        uploadedFile.url = URL.createObjectURL(file);
      }

      newFiles.push(uploadedFile);
    }

    onFilesChange([...files, ...newFiles]);

    // Simulate upload for files without errors
    for (const uploadedFile of newFiles) {
      if (!uploadedFile.error && onUpload) {
        try {
          await onUpload(uploadedFile.file!);
          updateFileStatus(uploadedFile.id, 'success', 100);
        } catch (err) {
          updateFileStatus(uploadedFile.id, 'error', 0, 'Upload failed');
        }
      } else if (!uploadedFile.error) {
        // Simulate progress
        simulateProgress(uploadedFile.id);
      }
    }

  };

  const simulateProgress = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        updateFileStatus(fileId, 'success', 100);
      } else {
        updateFileProgress(fileId, progress);
      }
    }, 200);
  };

  const updateFileProgress = (fileId: string, progress: number) => {
    onFilesChange(
      files.map(f => f.id === fileId ? { ...f, progress } : f)
    );
  };

  const updateFileStatus = (
    fileId: string,
    status: 'uploading' | 'success' | 'error',
    progress?: number,
    error?: string
  ) => {
    onFilesChange(
      files.map(f =>
        f.id === fileId ? { ...f, status, progress, error } : f
      )
    );
  };

  const removeFile = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file?.url) {
      URL.revokeObjectURL(file.url);
    }
    onFilesChange(files.filter(f => f.id !== fileId));
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const avatarFile = files[0];
  const isImage = accept?.includes('image/');
  const imageFiles = files.filter(f => f.type.startsWith('image/') && f.url);

  return (
    <UploadContainer $variant={variant}>
    <DropZone
      $isDragging={isDragging}
      $hasError={!!error}
      $color={color}
      $variant={variant}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
    <HiddenInput
      ref={inputRef}
      type="file"
      accept={accept}
      multiple={multiple && variant !== 'avatar'}
      onChange={(e) => handleFiles(e.target.files)}
      disabled={disabled}
    />


      {variant === 'avatar' && avatarFile?.url ? (
        <>
          <AvatarPreview src={avatarFile.url} alt="Avatar" />
          <AvatarOverlay>
            <UploadIcon $color="white">
              <UploadCloudIcon />
            </UploadIcon>
          </AvatarOverlay>
        </>
      ) : (
        <>
          <UploadIcon $color={color}>
            {variant === 'compact' ? (
              <Upload size={20} />
            ) : (
              <Upload size={variant === 'avatar' ? 32 : 40} />
            )}
          </UploadIcon>
          {variant !== 'avatar' && (
            <>
              <UploadText>
                {variant === 'compact' ? 'Choose file' : 'Drop files here or click to upload'}
              </UploadText>
              <UploadHint>
                {accept ? `Accepted: ${accept}` : 'All file types accepted'}
                {maxSize && ` • Max ${formatFileSize(maxSize)}`}
              </UploadHint>
            </>
          )}
        </>
      )}

    </DropZone>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {showPreview && isImage && imageFiles.length > 0 && (
        <ImagePreviewContainer>
          {imageFiles.map((file) => (
            <ImagePreview key={file.id}>
              <PreviewImage src={file.url} alt={file.name} />
              <PreviewRemoveButton onClick={() => removeFile(file.id)}>
                <CloseIcon />
              </PreviewRemoveButton>
            </ImagePreview>
          ))}
        </ImagePreviewContainer>
      )}

      {variant !== 'avatar' && !showPreview && files.length > 0 && (
        <FileList>
          {files.map((file) => (
            <FileItem key={file.id} $status={file.status}>
              <FileIcon $color={
                file.status === 'error' ? '#ef4444' :
                file.status === 'success' ? '#10b981' : color
              }>
                {file.status === 'error' && <AlertCircle size={20} />}
                {file.status === 'success' && <CheckCircle size={20} />}
                {file.status === 'uploading' && (
                  file.type.startsWith('image/') ? <ImageIcon size={20} /> : <File size={20} />
                )}
              </FileIcon>

              <FileInfo>
                <FileName>{file.name}</FileName>
                <FileSize>{formatFileSize(file.size)}</FileSize>
                {file.status === 'uploading' && (
                  <ProgressBar>
                    <Progress $progress={file.progress || 0} $color={color} />
                  </ProgressBar>
                )}
                {file.error && <ErrorMessage>{file.error}</ErrorMessage>}
              </FileInfo>

              <RemoveButton onClick={() => removeFile(file.id)}>
                <CloseIcon />
              </RemoveButton>

            </FileItem>
          ))}
        </FileList>
      )}
    </UploadContainer>
  );
  
};