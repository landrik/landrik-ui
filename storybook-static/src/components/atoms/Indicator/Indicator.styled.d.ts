import { IndicatorVariant, IndicatorSize, IndicatorPosition } from './Indicator.types';
export declare const IndicatorWrapper: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export interface IndicatorBadgeProps {
    $variant: IndicatorVariant;
    $size: IndicatorSize;
    $position: IndicatorPosition;
    $dot: boolean;
    $show: boolean;
}
export declare const IndicatorBadge: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, IndicatorBadgeProps>> & string;
//# sourceMappingURL=Indicator.styled.d.ts.map