import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FileUpload } from './FileUpload';
import { UploadedFile } from './FileUpload.types';

describe('FileUpload', () => {
  const mockCreateObjectURL = jest.fn(() => 'blob:http://localhost/mock-preview');
  const mockRevokeObjectURL = jest.fn();

  beforeAll(() => {
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering & Variants', () => {
    it('renders default dropzone copy and file hints', () => {
      render(
        <FileUpload
          files={[]}
          onFilesChange={jest.fn()}
          accept=".pdf,.png"
          maxSize={5 * 1024 * 1024}
        />
      );

      expect(screen.getByText('Drop files here or click to upload')).toBeInTheDocument();
      expect(screen.getByText(/Accepted: \.pdf,\.png/i)).toBeInTheDocument();
      expect(screen.getByText(/Max 5 MB/i)).toBeInTheDocument();
    });

    it('renders compact variant copy when variant="compact"', () => {
      render(<FileUpload files={[]} onFilesChange={jest.fn()} variant="compact" />);
      expect(screen.getByText('Choose file')).toBeInTheDocument();
    });

    it('renders avatar preview image when variant="avatar" and an image file exists', () => {
      const avatarFiles: UploadedFile[] = [
        {
          id: '1',
          name: 'avatar.png',
          size: 1024,
          type: 'image/png',
          status: 'success',
          progress: 100,
          url: 'blob:http://localhost/avatar',
        },
      ];

      render(<FileUpload files={avatarFiles} onFilesChange={jest.fn()} variant="avatar" />);
      const img = screen.getByRole('img', { name: 'Avatar' });
      expect(img).toHaveAttribute('src', 'blob:http://localhost/avatar');
    });

    it('displays external error message when error prop is passed', () => {
      render(
        <FileUpload
          files={[]}
          onFilesChange={jest.fn()}
          error="Please upload at least one document"
        />
      );

      expect(screen.getByText('Please upload at least one document')).toBeInTheDocument();
    });
  });

  describe('File Selection & Validation', () => {
    it('accepts valid files via hidden file input and calls onFilesChange', async () => {
      const user = userEvent.setup();
      const handleFilesChange = jest.fn();
      const { container } = render(
        <FileUpload files={[]} onFilesChange={handleFilesChange} accept="image/*" />
      );

      const file = new File(['hello'], 'photo.png', { type: 'image/png' });
      const input = container.querySelector('input[type="file"]') as HTMLInputElement;

      await user.upload(input, file);

      expect(handleFilesChange).toHaveBeenCalledTimes(1);
      const uploadedList: UploadedFile[] = handleFilesChange.mock.calls[0][0];
      expect(uploadedList).toHaveLength(1);
      expect(uploadedList[0]).toMatchObject({
        name: 'photo.png',
        type: 'image/png',
        status: 'uploading',
        url: 'blob:http://localhost/mock-preview',
      });
    });

    it('marks file with error status when file exceeds maxSize', async () => {
      const user = userEvent.setup();
      const handleFilesChange = jest.fn();
      const { container } = render(
        <FileUpload files={[]} onFilesChange={handleFilesChange} maxSize={100} />
      );

      const largeFile = new File(['x'.repeat(250)], 'large.txt', { type: 'text/plain' });
      const input = container.querySelector('input[type="file"]') as HTMLInputElement;

      await user.upload(input, largeFile);

      const uploadedList: UploadedFile[] = handleFilesChange.mock.calls[0][0];
      expect(uploadedList[0].status).toBe('error');
      expect(uploadedList[0].error).toMatch(/File size exceeds/i);
    });

    it('marks file with error status when file type is not in accept list', () => {
      const handleFilesChange = jest.fn();
      const { container } = render(
        <FileUpload files={[]} onFilesChange={handleFilesChange} accept=".pdf" />
      );

      const invalidFile = new File(['data'], 'notes.txt', { type: 'text/plain' });
      const input = container.querySelector('input[type="file"]') as HTMLInputElement;

      fireEvent.change(input, { target: { files: [invalidFile] } });

      const uploadedList: UploadedFile[] = handleFilesChange.mock.calls[0][0];
      expect(uploadedList[0].status).toBe('error');
      expect(uploadedList[0].error).toMatch(/File type not accepted/i);
    });

    it('enforces maxFiles limit and prevents exceeding maximum count', async () => {
      const user = userEvent.setup();
      const handleFilesChange = jest.fn();
      const existingFiles: UploadedFile[] = [
        { id: '1', name: 'doc1.pdf', size: 500, type: 'application/pdf', status: 'success' },
      ];

      const { container } = render(
        <FileUpload files={existingFiles} onFilesChange={handleFilesChange} maxFiles={1} />
      );

      const extraFile = new File(['pdf'], 'doc2.pdf', { type: 'application/pdf' });
      const input = container.querySelector('input[type="file"]') as HTMLInputElement;

      await user.upload(input, extraFile);

      expect(handleFilesChange).toHaveBeenCalledWith(existingFiles);
    });
  });

  describe('Drag & Drop, Async Upload & Removal', () => {
    it('handles drag-and-drop file uploads', () => {
      const handleFilesChange = jest.fn();
      render(<FileUpload files={[]} onFilesChange={handleFilesChange} />);

      const dropzone = screen.getByText('Drop files here or click to upload');
      const droppedFile = new File(['content'], 'report.pdf', { type: 'application/pdf' });

      fireEvent.dragEnter(dropzone);
      fireEvent.dragOver(dropzone);
      fireEvent.drop(dropzone, {
        dataTransfer: { files: [droppedFile] },
      });

      expect(handleFilesChange).toHaveBeenCalledTimes(1);
      //expect(handleFilesChange.mock.calls.name).toBe('report.pdf');
      const uploadedList: UploadedFile[] = handleFilesChange.mock.calls[0][0];
      expect(uploadedList[0].name).toBe('report.pdf');
    });

    it('calls custom onUpload handler when valid file is selected', async () => {
      const user = userEvent.setup();
      const handleUpload = jest.fn().mockResolvedValue(undefined);
      const { container } = render(
        <FileUpload files={[]} onFilesChange={jest.fn()} onUpload={handleUpload} />
      );

      const file = new File(['hello'], 'invoice.pdf', { type: 'application/pdf' });
      const input = container.querySelector('input[type="file"]') as HTMLInputElement;

      await user.upload(input, file);

      await waitFor(() => {
        expect(handleUpload).toHaveBeenCalledWith(file);
      });
    });

    it('removes file and revokes object URL when remove button is clicked in preview mode', async () => {
      const user = userEvent.setup();
      const handleFilesChange = jest.fn();
      const previewFiles: UploadedFile[] = [
        {
          id: 'img-1',
          name: 'banner.png',
          size: 2048,
          type: 'image/png',
          status: 'success',
          url: 'blob:http://localhost/banner',
        },
      ];

      render(
        <FileUpload
          files={previewFiles}
          onFilesChange={handleFilesChange}
          accept="image/*"
          showPreview
        />
      );

      const removeBtn = screen.getByRole('button');
      await user.click(removeBtn);

      expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:http://localhost/banner');
      expect(handleFilesChange).toHaveBeenCalledWith([]);
    });
  });
});
