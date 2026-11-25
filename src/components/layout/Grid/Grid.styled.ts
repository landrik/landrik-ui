import styled from "styled-components";
import { StyledBox } from "../Box/Box.styled";
import { GridProps } from "./Grid.types";

const blockedGridProps = new Set([
  "columns",
  "minColumnWidth",
  "rows",
  "gap",
  "columnGap",
  "rowGap",
  "areas",
  "gridArea",
  "colSpan",
  "rowSpan",
]);

export const StyledGrid = styled(StyledBox).withConfig({
  shouldForwardProp: (prop) => !blockedGridProps.has(prop),
})<GridProps>`
  display: grid;

  ${(p) =>
    p.areas &&
    `grid-template-areas: ${p.areas.map((row) => `"${row}"`).join(" ")};`}

  ${(p) => {
    if (p.columns === undefined) return "";

    if (typeof p.columns === "number") {
      return `grid-template-columns: repeat(${p.columns}, minmax(0, 1fr));`;
    }

    if (p.columns === "auto-fit" || p.columns === "auto-fill") {
      const minWidth = p.minColumnWidth || "250px";
      return `grid-template-columns: repeat(${p.columns}, minmax(${minWidth}, 1fr));`;
    }

    return `grid-template-columns: ${p.columns};`;
  }}

  ${(p) =>
    p.rows !== undefined &&
    `grid-template-rows: ${
      typeof p.rows === "number" ? `repeat(${p.rows}, minmax(0, 1fr))` : p.rows
    };`}

  ${(p) => p.gridArea && `grid-area: ${p.gridArea};`}
  ${(p) => p.colSpan && `grid-column: span ${p.colSpan} / span ${p.colSpan};`}
  ${(p) => p.rowSpan && `grid-row: span ${p.rowSpan} / span ${p.rowSpan};`}

  ${(p) => p.gap !== undefined && `gap: ${p.theme.spacing[p.gap]}px;`}
  ${(p) => p.rowGap !== undefined && `row-gap: ${p.theme.spacing[p.rowGap]}px;`}
  ${(p) =>
    p.columnGap !== undefined && `column-gap: ${p.theme.spacing[p.columnGap]}px;`}
`;
