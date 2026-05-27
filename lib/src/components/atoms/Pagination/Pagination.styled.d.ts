import { PaginationSize, PaginationVariant } from './Pagination.types';
export declare const PaginationContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
interface PageButtonProps {
    $size: PaginationSize;
    $variant: PaginationVariant;
    $active?: boolean;
    $disabled?: boolean;
}
export declare const PageButton: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, PageButtonProps>> & string;
export declare const Ellipsis: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $size: PaginationSize;
}>> & string;
export {};
//# sourceMappingURL=Pagination.styled.d.ts.map