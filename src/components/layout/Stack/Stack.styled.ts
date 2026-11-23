import styled from 'styled-components';
import { StackDirection, StackAlign, StackJustify } from './Stack.types';
import type { SpacingIndex } from '../../../theme/primitives';

interface StyledStackProps {
  $direction: StackDirection;
  $gap: SpacingIndex;
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
  flex-direction: ${(p) => p.$direction};
  gap: ${({ theme, $gap = 0 }) => theme.spacing[$gap]}px;
  align-items: ${(p) => alignMap[p.$align]};
  justify-content: ${(p) => justifyMap[p.$justify]};
  flex-wrap: ${(p) => (p.$wrap ? 'wrap' : 'nowrap')};
`;
