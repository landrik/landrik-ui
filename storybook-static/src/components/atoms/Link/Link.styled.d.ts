import { LinkVariant, LinkSize } from "./Link.types";
interface StyledProps {
    $variant: LinkVariant;
    $size: LinkSize;
    $underline: boolean;
    $disabled: boolean;
}
export declare const StyledLink: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, StyledProps>> & string;
export declare const IconWrapper: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export {};
//# sourceMappingURL=Link.styled.d.ts.map