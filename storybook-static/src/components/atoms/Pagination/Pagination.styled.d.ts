import { PaginationSize, PaginationVariant } from './Pagination.types';
export declare const PaginationContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLElement>, HTMLElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}> & string;
interface PageButtonProps {
    $size: PaginationSize;
    $variant: PaginationVariant;
    $active?: boolean;
    $disabled?: boolean;
}
export declare const PageButton: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, PageButtonProps>> & string;
export declare const Ellipsis: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, {
    $size: PaginationSize;
}>> & string;
export {};
//# sourceMappingURL=Pagination.styled.d.ts.map