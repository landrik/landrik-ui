import styled, { css } from "styled-components";
import { BoxProps } from "./Box.types";

// export const StyledBox = styled.div<BoxProps>`
//   ${p => p.display &&`display: ${p.display};`} 
//   ${p => p.width && `width: ${p.width};`} 
//   ${p => p.maxWidth && `max-width: ${p.maxWidth};`} 
//   ${p => p.height && `height: ${p.height};`} 
//   ${p => p.backgroundColor && `background-color: ${p.backgroundColor};`} 
//   ${p => p.borderRadius && `border-radius: ${typeof p.borderRadius === 'number' ? p.theme.radii[p.borderRadius] : p.borderRadius};`} 

//   ${p => p.padding && `padding: ${typeof p.padding === 'number' ? `${p.theme.spacing[p.padding]}px` : p.padding};`} 

//   ${p => p.paddingX && `padding-left: ${typeof p.paddingX === 'number' ? `${p.theme.spacing[p.paddingX]}px` : p.paddingX}; 
//                         padding-right: ${typeof p.paddingX === 'number' ? `${p.theme.spacing[p.paddingX]}px` : p.paddingX};`} 
                        
//   ${p => p.paddingY && `padding-top: ${typeof p.paddingY === 'number' ? `${p.theme.spacing[p.paddingY]}px` : p.paddingY}; 
//                         padding-bottom: ${typeof p.paddingY === 'number' ? `${p.theme.spacing[p.paddingY]}px` : p.paddingY};`} 

//   ${p => p.margin && `margin: ${typeof p.margin === 'number' ? `${p.theme.spacing[p.margin]}px` : p.margin};`} 

//   ${p => p.marginX && `margin-left: ${typeof p.marginX === 'number' ? `${p.theme.spacing[p.marginX]}px` : p.marginX}; 
//                        margin-right: ${typeof p.marginX === 'number' ? `${p.theme.spacing[p.marginX]}px` : p.marginX};`} 

//   ${p => p.marginY && `margin-top: ${typeof p.marginY === 'number' ? `${p.theme.spacing[p.marginY]}px` : p.marginY}; 
//                        margin-bottom: ${typeof p.marginY === 'number' ? `${p.theme.spacing[p.marginY]}px` : p.marginY};`} 
// `;


interface StyledBoxProps {
  $p?: number;
  $px?: number;
  $py?: number;
  $m?: number;
  $mx?: number;
  $my?: number;
  $bg?: string;
  $radius?: string;
}

export const StyledBox = styled.div<StyledBoxProps>`

  ${p => p.$p !== undefined &&`padding: ${p.theme.spacing[p.$p]}px;`} 
  ${p => p.$px !== undefined && `padding-left: ${p.theme.spacing[p.$px]}px; padding-right: ${p.theme.spacing[p.$px]}px;`} 
  ${p => p.$py !== undefined && `padding-top: ${p.theme.spacing[p.$py]}px; padding-bottom: ${p.theme.spacing[p.$py]}px;`} 

  ${p => p.$m !== undefined && `margin: ${p.theme.spacing[p.$m]}px;`} 
  ${p => p.$mx !== undefined && `margin-left: ${p.theme.spacing[p.$mx]}px; margin-right: ${p.theme.spacing[p.$mx]}px;`} 
  ${p => p.$my !== undefined && `margin-top: ${p.theme.spacing[p.$my]}px; margin-bottom: ${p.theme.spacing[p.$my]}px;`} 

  ${p => p.$bg && `background-color: ${p.$bg};`} ${p => p.$radius && `border-radius: ${p.theme.radii[p.$radius as keyof typeof p.theme.radii]};`} 

`;