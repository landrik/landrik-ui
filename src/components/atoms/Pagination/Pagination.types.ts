export type PaginationSize = 'sm' | 'md' | 'lg';
export type PaginationVariant = 'default' | 'outlined' | 'minimal';


export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: PaginationSize;
  variant?: PaginationVariant;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  disabled?: boolean;
}