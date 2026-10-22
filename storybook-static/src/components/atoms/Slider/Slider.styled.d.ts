import { SliderSize } from './Slider.types';
export declare const SliderContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export declare const SliderLabel: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export declare const SliderWrapper: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
interface SliderTrackProps {
    $size: SliderSize;
    $disabled: boolean;
}
export declare const SliderTrack: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, SliderTrackProps>> & string;
interface SliderFillProps {
    $percentage: number;
}
export declare const SliderFill: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, SliderFillProps>> & string;
interface SliderThumbProps {
    $percentage: number;
    $size: SliderSize;
    $disabled: boolean;
    $isDragging: boolean;
}
export declare const SliderThumb: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, SliderThumbProps>> & string;
export declare const SliderLabels: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export declare const SliderLabelText: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export declare const SliderValue: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
export {};
//# sourceMappingURL=Slider.styled.d.ts.map