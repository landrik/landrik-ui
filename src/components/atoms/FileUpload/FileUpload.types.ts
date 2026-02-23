// export interface UploadedFile {
//   id: string;
//   file: File;
//   preview?: string;
//   progress?: number;
//   error?: string;
//   status: 'pending' | 'uploading' | 'done' | 'error';
// }
// export interface FileUploadProps {
//   /** Accept file types */
//   accept?: string;
//   /** Maximum file size in bytes */
//   maxSize?: number;
//   /** Maximum number of files */
//   maxFiles?: number;
//   /** Allow multiple files */
//   multiple?: boolean;
//   /** Callback when files are selected */
//   onChange?: (files: File[]) => void;
//   /** Callback for upload progress */
//   onUpload?: (files: File[]) => Promise<void>;
//   /** Label text */
//   label?: string;
//   /** Helper text */
//   helperText?: string;
//   /** Error message */
//   error?: string;
//   /** Disabled state */
//   disabled?: boolean;
//   /** Show image previews */
//   showPreview?: boolean;
// }


export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'error';
  progress?: number;
  error?: string;
  url?: string;
  file?: File;
}

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  maxFiles?: number;
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
  onUpload?: (file: File) => Promise<void>;
  disabled?: boolean;
  error?: string;
  color?: string;
  variant?: 'default' | 'compact' | 'avatar';
  showPreview?: boolean;
}
