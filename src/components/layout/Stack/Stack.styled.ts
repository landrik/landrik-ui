import styled from 'styled-components';
import { StyledBox } from '../Box/Box.styled';
import { StackProps, StackAlign, StackJustify } from './Stack.types';
import { resolveResponsive, resolveSpace } from '@/components/utils/responsive';


const alignMap: Record<StackAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<StackJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  "space-between": 'space-between',
  "space-around": 'space-around',
  "space-evenly": 'space-evenly',
};

const blockedStackProps = new Set([
  "direction",
  "gap",
  "align",
  "justify",
  "wrap"
]);

export const StyledStack = styled(StyledBox).withConfig({
  shouldForwardProp: (prop) => !blockedStackProps.has(prop)
})<StackProps>`
  display: flex;
  flex-direction: column;

  ${(p) =>
    resolveResponsive(p.direction, p.theme, (dir) =>
      `flex-direction: ${dir === "horizontal" || dir === "row" ? "row" : "column"};`
    )}
  
    ${(p) => resolveResponsive(
    p.gap, 
    p.theme, 
    (val) => `gap: ${resolveSpace(val, p.theme.spacing)};`
  )}

  ${(p) => p.align && `align-items: ${alignMap[p.align]};`}
  ${(p) => p.justify && `justify-content: ${justifyMap[p.justify]};`}
  ${(p) => p.wrap && `flex-wrap: wrap;`}
`;
