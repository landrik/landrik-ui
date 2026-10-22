import { TextSize, TextWeight, TextAlign, TextVariant } from './Text.types';
interface StyledTextProps {
    $size: TextSize;
    $weight: TextWeight;
    $align: TextAlign;
    $variant: TextVariant;
    $truncate: boolean;
    $lineClamp?: number;
}
export declare const StyledText: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, StyledTextProps>> & string;
export {};
//# sourceMappingURL=Text.styled.d.ts.map