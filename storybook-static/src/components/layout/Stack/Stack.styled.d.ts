import { StackDirection, StackAlign, StackJustify } from "./Stack.types";
import type { SpacingIndex } from "@/theme";
interface StyledStackProps {
    $direction: StackDirection;
    $gap: SpacingIndex;
    $align: StackAlign;
    $justify: StackJustify;
    $wrap: boolean;
}
export declare const StyledStack: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledStackProps>> & string;
export {};
//# sourceMappingURL=Stack.styled.d.ts.map