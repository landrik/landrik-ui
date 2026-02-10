import styled, { css } from "styled-components";

interface StyledGridProps {
  $columns: number | 'auto-fit' | 'auto-fill';
  $minColumnWidth?: string;
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;
}

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;

  ${p => {
    if (typeof p.$columns === 'number') {
      return `grid-template-columns: repeat(${p.$columns}, 1fr);`;
    } else {
      const minWidth = p.$minColumnWidth || '250px';
    return `grid-template-columns: repeat(${p.$columns}, minmax(${minWidth}, 1fr));`;
    }
  }}

  ${p => p.$gap !== undefined && `gap: ${p.theme.spacing[p.$gap]}px;`}
  ${p => p.$rowGap !== undefined && `row-gap: ${p.theme.spacing[p.$rowGap]}px;`}
  ${p => p.$columnGap !== undefined && `column-gap: ${p.theme.spacing[p.$columnGap]}px;`}
`;
