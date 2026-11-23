import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  describe('Rendering & Ellipsis Range Calculation', () => {
    it('renders all page numbers without ellipsis when totalPages is small', () => {
      render(<Pagination currentPage={2} totalPages={5} onPageChange={jest.fn()} />);

      for (let page = 1; page <= 5; page++) {
        expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument();
      }
      expect(screen.queryByText('…')).not.toBeInTheDocument();
    });

    it('marks the active page with aria-current="page"', () => {
      render(<Pagination currentPage={3} totalPages={5} onPageChange={jest.fn()} />);

      expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute(
        'aria-current',
        'page'
      );
      expect(screen.getByRole('button', { name: 'Page 2' })).not.toHaveAttribute('aria-current');
    });

    it('renders right ellipsis only when near the beginning of many pages', () => {
      render(<Pagination currentPage={1} totalPages={10} onPageChange={jest.fn()} />);

      expect(screen.getAllByText('…')).toHaveLength(1);
      expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 10' })).toBeInTheDocument();
    });

    it('renders left ellipsis only when near the end of many pages', () => {
      render(<Pagination currentPage={10} totalPages={10} onPageChange={jest.fn()} />);

      expect(screen.getAllByText('…')).toHaveLength(1);
      expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 10' })).toBeInTheDocument();
    });

    it('renders both left and right ellipses when currentPage is in the middle', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={jest.fn()} />);

      expect(screen.getAllByText('…')).toHaveLength(2);
      expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 6' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 10' })).toBeInTheDocument();
    });

    it('hides First/Last and Previous/Next buttons when showFirstLast={false} and showPrevNext={false}', () => {
      render(
        <Pagination
          currentPage={2}
          totalPages={5}
          showFirstLast={false}
          showPrevNext={false}
          onPageChange={jest.fn()}
        />
      );

      expect(screen.queryByRole('button', { name: 'First page' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Previous page' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Next page' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Last page' })).not.toBeInTheDocument();
    });
  });

  describe('Navigation & Boundary Disabling', () => {
    it('calls onPageChange when page numbers and navigation buttons are clicked', async () => {
      const user = userEvent.setup();
      const handlePageChange = jest.fn();

      render(<Pagination currentPage={3} totalPages={6} onPageChange={handlePageChange} />);

      await user.click(screen.getByRole('button', { name: 'Page 4' }));
      expect(handlePageChange).toHaveBeenLastCalledWith(4);

      await user.click(screen.getByRole('button', { name: 'First page' }));
      expect(handlePageChange).toHaveBeenLastCalledWith(1);

      await user.click(screen.getByRole('button', { name: 'Previous page' }));
      expect(handlePageChange).toHaveBeenLastCalledWith(2);

      await user.click(screen.getByRole('button', { name: 'Next page' }));
      expect(handlePageChange).toHaveBeenLastCalledWith(4);

      await user.click(screen.getByRole('button', { name: 'Last page' }));
      expect(handlePageChange).toHaveBeenLastCalledWith(6);
    });

    it('disables First and Previous buttons on page 1', () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />);

      expect(screen.getByRole('button', { name: 'First page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Last page' })).not.toBeDisabled();
    });

    it('disables Next and Last buttons on the final page', () => {
      render(<Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />);

      expect(screen.getByRole('button', { name: 'First page' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Last page' })).toBeDisabled();
    });

    it('disables all buttons and blocks onPageChange when disabled={true}', async () => {
      const user = userEvent.setup();
      const handlePageChange = jest.fn();

      render(
        <Pagination
          currentPage={3}
          totalPages={5}
          disabled
          onPageChange={handlePageChange}
        />
      );

      const allButtons = screen.getAllByRole('button');
      allButtons.forEach((btn) => expect(btn).toBeDisabled());

      await user.click(screen.getByRole('button', { name: 'Page 4' }));
      expect(handlePageChange).not.toHaveBeenCalled();
    });
  });
});
