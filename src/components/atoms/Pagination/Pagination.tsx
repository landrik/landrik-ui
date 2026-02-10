import React, { FC, useMemo } from 'react';
import { PaginationContainer, PageButton, Ellipsis  } from './Pagination.styled';
import { PaginationProps } from './Pagination.types';


const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  variant = 'default',
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  disabled = false,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // first, last, current, 2 siblings, 2 ellipsis

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, 'dots', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, 'dots', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, 'dots', ...middleRange, 'dots', totalPages];
    }

    return [];

  }, [currentPage, totalPages, siblingCount]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && !disabled) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      {showFirstLast && (
        <PageButton
          $size={size}
          $variant={variant}
          onClick={() => handlePageChange(1)}
          disabled={disabled || currentPage === 1}
          aria-label='First page'
        >
        ««
        </PageButton>
      )}

      {showPrevNext && (
        <PageButton
          $size={size}
          $variant={variant}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={disabled || currentPage === 1}
          aria-label="Previous page"
        >
          ‹
        </PageButton>
      )}

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === 'dots') {
          return <Ellipsis key={`dots-${index}`} $size={size}>…</Ellipsis>;
        }

        return (
          <PageButton
            key={pageNumber}
            $size={size}
            $variant={variant}
            $active={pageNumber === currentPage}
            onClick={() => handlePageChange(Number(pageNumber))}
            disabled={disabled}
            aria-label={`Page ${pageNumber}`}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
          >
            {pageNumber}
          </PageButton>
        );
      })}

      {showPrevNext && (
        <PageButton
          $size={size}
          $variant={variant}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
          aria-label="Next page"
        >
          ›
        </PageButton>
      )}

      {showFirstLast && (
        <PageButton
          $size={size}
          $variant={variant}
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          aria-label="Last page"
        >
          »»
        </PageButton>
      )}
    </PaginationContainer>

  );
};
