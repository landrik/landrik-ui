import { StackDirection, StackAlign, StackJustify } from "./Stack.types";
import type { SpacingIndex } from "@/theme";
interface StyledStackProps {
    $direction: StackDirection;
    $gap: SpacingIndex;
    $align: StackAlign;
    $justify: StackJustify;
    $wrap: boolean;
}
export declare const StyledStack: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, StyledStackProps>> & string;
export {};
//# sourceMappingURL=Stack.styled.d.ts.map