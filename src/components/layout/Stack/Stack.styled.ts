import styled, { css } from "styled-components";
import { StackDirection, StackAlign, StackJustify, StackProps } from "./Stack.types";


interface StyledStackProps {
  $direction: StackDirection;
  $gap: number;
  $align: StackAlign;
  $justify: StackJustify;
  $wrap: boolean;
}

const alignMap: Record<StackAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};

const justifyMap: Record<StackJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const StyledStack = styled.div<StyledStackProps>`
  display: flex; 
  flex-direction: ${p => p.$direction}; 
  gap: ${p => p.theme.spacing[p.$gap]}px; 
  align-items: ${p => alignMap[p.$align]}; 
  justify-content: ${p => justifyMap[p.$justify]}; 
  flex-wrap: ${p => p.$wrap ? 'wrap' : 'nowrap'};
`;
