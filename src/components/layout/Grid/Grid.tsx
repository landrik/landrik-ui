import React, { FC } from 'react';
import { StyledGrid } from './Grid.styled';
import { GridProps } from './Grid.types';

export const Grid:FC<GridProps> = ({
  children,
  columns = 3,
  minColumnWidth,
  gap = 4,
  rowGap,
  columnGap,
  ...props
}) => {
  return (
    <StyledGrid
      $columns={columns}
      $minColumnWidth={minColumnWidth}
      $gap={gap}
      $rowGap={rowGap}
      $columnGap={columnGap}
    >
      {children}
    </StyledGrid>
  );
};