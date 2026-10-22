import { HeaderVariant, HeadingSize, HeadingWeight, HeadingAlign } from "./Header.types";
interface StyledHeaderProps {
    $size: HeadingSize;
    $weight: HeadingWeight;
    $variant: HeaderVariant;
    $align: HeadingAlign;
}
export declare const StyledHeader: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, StyledHeaderProps>> & string;
export {};
//# sourceMappingURL=Header.styled.d.ts.map