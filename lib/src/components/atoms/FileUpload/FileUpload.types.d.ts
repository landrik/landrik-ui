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
    maxSize?: number;
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
//# sourceMappingURL=FileUpload.types.d.ts.map