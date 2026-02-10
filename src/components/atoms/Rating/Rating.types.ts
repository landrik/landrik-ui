
export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
/** Current rating value */
value: number;
/** Maximum rating */
max?: number;
/** Callback when rating changes */
onChange?: (value: number) => void;
/** Read-only mode */
readOnly?: boolean;
/** Size variant */
size?: RatingSize;
/** Allow half stars */
allowHalf?: boolean;
/** Custom color for filled stars */
color?: string;
/** Show numeric value */
showValue?: boolean;
}