import styled from "styled-components";
import { StyledBox } from "../Box/Box.styled";
import { GridProps, GridColumnsValue } from "./Grid.types";
import { resolveResponsive, resolveSpace } from "@/components/utils/responsive";

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


const formatColumns = (cols: GridColumnsValue, minColumnWidth = "250px"): string => {
  if (typeof cols === "number") {
    return `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;
  }
  if (cols === "auto-fit" || cols === "auto-fill") {
    return `grid-template-columns: repeat(${cols}, minmax(${minColumnWidth}, 1fr));`;
  }
  return `grid-template-columns: ${cols};`;
};


export const StyledGrid = styled(StyledBox).withConfig({
  shouldForwardProp: (prop) => !blockedGridProps.has(prop),
})<GridProps>`
  display: grid;

  ${(p) => resolveResponsive( p.areas, p.theme, (rows)=> `grid-template-areas: ${rows.map((r) => `"${r}"`).join(" ")};`)}

  ${(p) => {
    const isGridItem = Boolean(p.gridArea || p.colSpan || p.rowSpan);
    const cols = p.columns ?? (isGridItem ? undefined : p.theme.grid?.columns);
    return resolveResponsive(cols, p.theme, (val) => formatColumns(val, p.minColumnWidth) );
  }}

  ${(p) => p.rows !== undefined &&
    `grid-template-rows: ${
      typeof p.rows === "number" ? `repeat(${p.rows}, minmax(0, 1fr))` : p.rows
    };`}

  ${(p) => p.gridArea && `grid-area: ${p.gridArea};`}

  ${(p) => resolveResponsive(p.colSpan, p.theme, (span) => `grid-column: span ${span} / span ${span};`)}
  ${(p) => resolveResponsive(p.rowSpan, p.theme, (span) => `grid-row: span ${span} / span ${span};`)}

  ${(p) =>
    resolveResponsive(
      p.gap,
      p.theme,
      (val) => `gap: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.rowGap,
      p.theme,
      (val) => `row-gap: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.columnGap,
      p.theme,
      (val) => `column-gap: ${resolveSpace(val, p.theme.spacing)};`
    )}
`;
