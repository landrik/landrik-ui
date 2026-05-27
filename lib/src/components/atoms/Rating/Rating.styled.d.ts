import { RatingSize } from "./Rating.types";
export declare const RatingContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StarsContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
interface StarButtonProps {
    $size: RatingSize;
    $readOnly: boolean;
}
export declare const StarButton: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StarButtonProps>> & string;
interface StarIconProps {
    $filled: number;
    $color: string;
}
export declare const StarIcon: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").SVGProps<SVGSVGElement>, StarIconProps>> & string;
export declare const RatingValue: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
export {};
//# sourceMappingURL=Rating.styled.d.ts.map