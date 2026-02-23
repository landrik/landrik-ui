import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { useState } from 'react';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
  layout: 'padded',
},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload 
        files={files} 
        onFilesChange={setFiles} 
      />
    )  
  },
};

export const ImageOnly: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        accept="image/*"
      />
    );
  },
};

export const SingleFile: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        multiple={false}
      />
    );
  },
};

export const WithMaxSize: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        maxSize={2 * 1024 * 1024} // 2MB
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        error="Please upload at least one file"
      />
    );
  },
};

export const Compact: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        variant="compact"
      />
    );
  },
};

export const Avatar: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        variant="avatar"
        accept="image/*"
        multiple={false}
      />
    );
  },
};

export const ImagePreview: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        accept="image/*"
        showPreview
      />
    );
  },
};

export const PDFOnly: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        accept=".pdf,application/pdf"
      />
    );
  },
};

export const MaxFiles: Story = {
  render: () => {
    const [files, setFiles] = useState<any | null>([]);
    return (
      <FileUpload
        files={files}
        onFilesChange={setFiles}
        maxFiles={3}
      />
    );
  },
};