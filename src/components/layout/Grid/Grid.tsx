import React, { FC } from 'react';
import { StyledGrid } from './Grid.styled';
import { GridProps } from './Grid.types';

export const Grid:FC<GridProps> = ({
  children,
  columns,
  minColumnWidth,
  gap = 4,
  rowGap,
  columnGap,
  ...props
}) => {
  return (
    <StyledGrid
      columns={columns}
      minColumnWidth={minColumnWidth}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};