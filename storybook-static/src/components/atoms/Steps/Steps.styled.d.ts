import { StepsDirection, StepStatus } from './Steps.types';
interface StepsContainerProps {
    $direction: StepsDirection;
}
export declare const StepsContainer: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepsContainerProps>> & string;
interface StepItemProps {
    $direction: StepsDirection;
    $isLast: boolean;
    $clickable: boolean;
}
export declare const StepItem: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepItemProps>> & string;
interface StepIconWrapperProps {
    $direction: StepsDirection;
}
export declare const StepIconWrapper: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepIconWrapperProps>> & string;
interface StepIconProps {
    $status: StepStatus;
}
export declare const StepIcon: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepIconProps>> & string;
interface StepLineProps {
    $status: StepStatus;
    $direction: StepsDirection;
}
export declare const StepLine: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepLineProps>> & string;
export declare const StepContent: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
interface StepTitleProps {
    $status: StepStatus;
}
export declare const StepTitle: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StepTitleProps>> & string;
export declare const StepDescription: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
//# sourceMappingURL=Steps.styled.d.ts.map