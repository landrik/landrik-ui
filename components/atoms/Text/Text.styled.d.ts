import { TextSize, TextWeight, TextAlign, TextVariant } from './Text.types';
interface StyledTextProps {
    $size: TextSize;
    $weight: TextWeight;
    $align: TextAlign;
    $variant: TextVariant;
    $truncate: boolean;
    $lineClamp?: number;
}
export declare const StyledText: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, StyledTextProps>> & string;
export {};
//# sourceMappingURL=Text.styled.d.ts.map