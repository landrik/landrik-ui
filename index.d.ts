import * as node_modules__types_react from 'node_modules/@types/react';
import * as styled_components from 'styled-components';
import React$1, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, SVGAttributes, HTMLAttributes, ImgHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ColorShades {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}
interface NeutralColors extends ColorShades {
    0: string;
}
interface SemanticColors {
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface Colors {
    primary: ColorShades;
    neutral: NeutralColors;
    semantic: SemanticColors;
}
interface Typography {
    fontFamily: {
        sans: string;
        mono: string;
    };
    fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
    };
    fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
    };
    lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
    };
    letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
}
interface Radii {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
}
interface Shadows {
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
}
interface Spacing {
}
interface Transitions {
    duration: {
        shortest: number;
        shorter: number;
        short: number;
        base: number;
        complex: number;
        enteringScreen: number;
        leavingScreen: number;
    };
    easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
        sharp: string;
    };
    timing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
        sharp: string;
    };
    fast: string;
    base: string;
    slow: string;
}
interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}
interface ZIndices {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
}
interface Theme {
    colors: Colors;
    typography: Typography;
    radii: Radii;
    shadows: Shadows;
    spacing: number[];
    transitions: Transitions;
    breakpoints: Breakpoints;
    zIndices: ZIndices;
}
type ThemeConfig = Theme | undefined;

declare const theme: Theme;

declare const GlobalStyles: node_modules__types_react.NamedExoticComponent<styled_components.ExecutionProps & object>;

interface ThemeProviderProps {
    children: ReactNode;
    theme?: Theme;
}
declare const ThemeProvider: FC<ThemeProviderProps>;

type StepsDirection = 'horizontal' | 'vertical';
type StepStatus = 'wait' | 'process' | 'finish' | 'error';
interface Step {
    /** Step title */
    title: string;
    /** Step description */
    description?: string;
    /** Custom icon */
    icon?: ReactNode;
}
interface StepsProps {
    /** Current active step (0-indexed) */
    current: number;
    /** Array of steps */
    steps: Step[];
    /** Direction of steps */
    direction?: StepsDirection;
    /** Callback when step is clicked */
    onChange?: (step: number) => void;
    /** Allow clicking on steps */
    clickable?: boolean;
}

interface DatePickerProps {
    /** Currently selected date */
    value?: Date;
    /** Callback when date is selected */
    onChange?: (date: Date | undefined) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Disabled dates */
    disabledDates?: Date[];
    /** Disabled state */
    disabled?: boolean;
    /** Error state */
    error?: string;
    /** Label */
    label?: string;
    /** Show clear button */
    clearable?: boolean;
    /** Date format for display */
    dateFormat?: 'short' | 'medium' | 'long';
}

declare const DatePicker: React$1.FC<DatePickerProps>;

interface CalendarProps {
    /** Currently selected date */
    value?: Date;
    /** Callback when date is selected */
    onChange?: (date: Date) => void;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Disabled dates */
    disabledDates?: Date[];
    /** Show week numbers */
    showWeekNumbers?: boolean;
    /** First day of week (0 = Sunday, 1 = Monday) */
    firstDayOfWeek?: 0 | 1;
}

declare const Calendar: React$1.FC<CalendarProps>;

type RatingSize = 'sm' | 'md' | 'lg';
interface RatingProps {
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

declare const Rating: React$1.FC<RatingProps>;

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
interface TooltipProps {
    /** Content to show in tooltip */
    content: ReactNode;
    /** Element that triggers tooltip */
    children: ReactNode;
    /** Placement of tooltip */
    placement?: TooltipPlacement;
    /** Delay before showing (ms) */
    delay?: number;
}

declare const Tooltip: FC<TooltipProps>;

type SliderSize = 'sm' | 'md' | 'lg';
interface SliderProps {
    /** Current value */
    value: number;
    /** Callback when value changes */
    onChange: (value: number) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** Size variant */
    size?: SliderSize;
    /** Disabled state */
    disabled?: boolean;
    /** Show value label */
    showValue?: boolean;
    /** Show min/max labels */
    showMinMax?: boolean;
    /** Custom label */
    label?: string;
    /** Value formatter function */
    formatValue?: (value: number) => string;
}

declare const Slider: React$1.FC<SliderProps>;

interface CollapseProps {
    title: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    disabled?: boolean;
    showIcon?: boolean;
    icon?: ReactNode;
    bordered?: boolean;
}

declare const Collapse: FC<CollapseProps>;

declare const ICON_REGISTRY: {
    readonly user: react_jsx_runtime.JSX.Element;
    readonly useralt: react_jsx_runtime.JSX.Element;
    readonly useradd: react_jsx_runtime.JSX.Element;
    readonly users: react_jsx_runtime.JSX.Element;
    readonly profile: react_jsx_runtime.JSX.Element;
    readonly facehappy: react_jsx_runtime.JSX.Element;
    readonly faceneutral: react_jsx_runtime.JSX.Element;
    readonly facesad: react_jsx_runtime.JSX.Element;
    readonly accessibility: react_jsx_runtime.JSX.Element;
    readonly accessibilityalt: react_jsx_runtime.JSX.Element;
    readonly arrowup: react_jsx_runtime.JSX.Element;
    readonly arrowdown: react_jsx_runtime.JSX.Element;
    readonly arrowleft: react_jsx_runtime.JSX.Element;
    readonly arrowright: react_jsx_runtime.JSX.Element;
    readonly arrowupalt: react_jsx_runtime.JSX.Element;
    readonly arrowdownalt: react_jsx_runtime.JSX.Element;
    readonly arrowleftalt: react_jsx_runtime.JSX.Element;
    readonly arrowrightalt: react_jsx_runtime.JSX.Element;
    readonly expandalt: react_jsx_runtime.JSX.Element;
    readonly collapse: react_jsx_runtime.JSX.Element;
    readonly expand: react_jsx_runtime.JSX.Element;
    readonly unfold: react_jsx_runtime.JSX.Element;
    readonly transfer: react_jsx_runtime.JSX.Element;
    readonly redirect: react_jsx_runtime.JSX.Element;
    readonly undo: react_jsx_runtime.JSX.Element;
    readonly reply: react_jsx_runtime.JSX.Element;
    readonly sync: react_jsx_runtime.JSX.Element;
    readonly upload: react_jsx_runtime.JSX.Element;
    readonly download: react_jsx_runtime.JSX.Element;
    readonly back: react_jsx_runtime.JSX.Element;
    readonly proceed: react_jsx_runtime.JSX.Element;
    readonly refresh: react_jsx_runtime.JSX.Element;
    readonly globe: react_jsx_runtime.JSX.Element;
    readonly compass: react_jsx_runtime.JSX.Element;
    readonly location: react_jsx_runtime.JSX.Element;
    readonly pin: react_jsx_runtime.JSX.Element;
    readonly time: react_jsx_runtime.JSX.Element;
    readonly dashboard: react_jsx_runtime.JSX.Element;
    readonly timer: react_jsx_runtime.JSX.Element;
    readonly home: react_jsx_runtime.JSX.Element;
    readonly admin: react_jsx_runtime.JSX.Element;
    readonly info: react_jsx_runtime.JSX.Element;
    readonly question: react_jsx_runtime.JSX.Element;
    readonly support: react_jsx_runtime.JSX.Element;
    readonly alert: react_jsx_runtime.JSX.Element;
    readonly email: react_jsx_runtime.JSX.Element;
    readonly phone: react_jsx_runtime.JSX.Element;
    readonly link: react_jsx_runtime.JSX.Element;
    readonly unlink: react_jsx_runtime.JSX.Element;
    readonly bell: react_jsx_runtime.JSX.Element;
    readonly rss: react_jsx_runtime.JSX.Element;
    readonly sharealt: react_jsx_runtime.JSX.Element;
    readonly share: react_jsx_runtime.JSX.Element;
    readonly circlehollow: react_jsx_runtime.JSX.Element;
    readonly circle: react_jsx_runtime.JSX.Element;
    readonly bookmarkhollow: react_jsx_runtime.JSX.Element;
    readonly bookmark: react_jsx_runtime.JSX.Element;
    readonly diamond: react_jsx_runtime.JSX.Element;
    readonly hearthollow: react_jsx_runtime.JSX.Element;
    readonly heart: react_jsx_runtime.JSX.Element;
    readonly starhollow: react_jsx_runtime.JSX.Element;
    readonly star: react_jsx_runtime.JSX.Element;
    readonly certificate: react_jsx_runtime.JSX.Element;
    readonly verified: react_jsx_runtime.JSX.Element;
    readonly thumbsup: react_jsx_runtime.JSX.Element;
    readonly shield: react_jsx_runtime.JSX.Element;
    readonly basket: react_jsx_runtime.JSX.Element;
    readonly beaker: react_jsx_runtime.JSX.Element;
    readonly hourglass: react_jsx_runtime.JSX.Element;
    readonly flag: react_jsx_runtime.JSX.Element;
    readonly cloudhollow: react_jsx_runtime.JSX.Element;
    readonly cloud: react_jsx_runtime.JSX.Element;
    readonly edit: react_jsx_runtime.JSX.Element;
    readonly cog: react_jsx_runtime.JSX.Element;
    readonly nut: react_jsx_runtime.JSX.Element;
    readonly wrench: react_jsx_runtime.JSX.Element;
    readonly ellipsis: react_jsx_runtime.JSX.Element;
    readonly check: react_jsx_runtime.JSX.Element;
    readonly form: react_jsx_runtime.JSX.Element;
    readonly batchdeny: react_jsx_runtime.JSX.Element;
    readonly batchaccept: react_jsx_runtime.JSX.Element;
    readonly controls: react_jsx_runtime.JSX.Element;
    readonly plus: react_jsx_runtime.JSX.Element;
    readonly closeAlt: react_jsx_runtime.JSX.Element;
    readonly cross: react_jsx_runtime.JSX.Element;
    readonly trash: react_jsx_runtime.JSX.Element;
    readonly pinalt: react_jsx_runtime.JSX.Element;
    readonly unpin: react_jsx_runtime.JSX.Element;
    readonly add: react_jsx_runtime.JSX.Element;
    readonly subtract: react_jsx_runtime.JSX.Element;
    readonly close: react_jsx_runtime.JSX.Element;
    readonly delete: react_jsx_runtime.JSX.Element;
    readonly passed: react_jsx_runtime.JSX.Element;
    readonly changed: react_jsx_runtime.JSX.Element;
    readonly failed: react_jsx_runtime.JSX.Element;
    readonly clear: react_jsx_runtime.JSX.Element;
    readonly comment: react_jsx_runtime.JSX.Element;
    readonly commentadd: react_jsx_runtime.JSX.Element;
    readonly requestchange: react_jsx_runtime.JSX.Element;
    readonly comments: react_jsx_runtime.JSX.Element;
    readonly lock: react_jsx_runtime.JSX.Element;
    readonly unlock: react_jsx_runtime.JSX.Element;
    readonly key: react_jsx_runtime.JSX.Element;
    readonly outbox: react_jsx_runtime.JSX.Element;
    readonly credit: react_jsx_runtime.JSX.Element;
    readonly button: react_jsx_runtime.JSX.Element;
    readonly type: react_jsx_runtime.JSX.Element;
    readonly pointerdefault: react_jsx_runtime.JSX.Element;
    readonly pointerhand: react_jsx_runtime.JSX.Element;
    readonly browser: react_jsx_runtime.JSX.Element;
    readonly tablet: react_jsx_runtime.JSX.Element;
    readonly mobile: react_jsx_runtime.JSX.Element;
    readonly watch: react_jsx_runtime.JSX.Element;
    readonly sidebar: react_jsx_runtime.JSX.Element;
    readonly sidebaralt: react_jsx_runtime.JSX.Element;
    readonly sidebaralttoggle: react_jsx_runtime.JSX.Element;
    readonly sidebartoggle: react_jsx_runtime.JSX.Element;
    readonly bottombar: react_jsx_runtime.JSX.Element;
    readonly bottombartoggle: react_jsx_runtime.JSX.Element;
    readonly cpu: react_jsx_runtime.JSX.Element;
    readonly database: react_jsx_runtime.JSX.Element;
    readonly memory: react_jsx_runtime.JSX.Element;
    readonly structure: react_jsx_runtime.JSX.Element;
    readonly box: react_jsx_runtime.JSX.Element;
    readonly power: react_jsx_runtime.JSX.Element;
    readonly photo: react_jsx_runtime.JSX.Element;
    readonly component: react_jsx_runtime.JSX.Element;
    readonly grid: react_jsx_runtime.JSX.Element;
    readonly outline: react_jsx_runtime.JSX.Element;
    readonly photodrag: react_jsx_runtime.JSX.Element;
    readonly search: react_jsx_runtime.JSX.Element;
    readonly zoom: react_jsx_runtime.JSX.Element;
    readonly zoomout: react_jsx_runtime.JSX.Element;
    readonly zoomreset: react_jsx_runtime.JSX.Element;
    readonly eye: react_jsx_runtime.JSX.Element;
    readonly eyeclose: react_jsx_runtime.JSX.Element;
    readonly lightning: react_jsx_runtime.JSX.Element;
    readonly lightningoff: react_jsx_runtime.JSX.Element;
    readonly contrast: react_jsx_runtime.JSX.Element;
    readonly switchalt: react_jsx_runtime.JSX.Element;
    readonly mirror: react_jsx_runtime.JSX.Element;
    readonly grow: react_jsx_runtime.JSX.Element;
    readonly paintbrush: react_jsx_runtime.JSX.Element;
    readonly ruler: react_jsx_runtime.JSX.Element;
    readonly stop: react_jsx_runtime.JSX.Element;
    readonly camera: react_jsx_runtime.JSX.Element;
    readonly video: react_jsx_runtime.JSX.Element;
    readonly speaker: react_jsx_runtime.JSX.Element;
    readonly play: react_jsx_runtime.JSX.Element;
    readonly playback: react_jsx_runtime.JSX.Element;
    readonly playnext: react_jsx_runtime.JSX.Element;
    readonly rewind: react_jsx_runtime.JSX.Element;
    readonly fastforward: react_jsx_runtime.JSX.Element;
    readonly stopalt: react_jsx_runtime.JSX.Element;
    readonly sidebyside: react_jsx_runtime.JSX.Element;
    readonly stacked: react_jsx_runtime.JSX.Element;
    readonly sun: react_jsx_runtime.JSX.Element;
    readonly moon: react_jsx_runtime.JSX.Element;
    readonly book: react_jsx_runtime.JSX.Element;
    readonly document: react_jsx_runtime.JSX.Element;
    readonly copy: react_jsx_runtime.JSX.Element;
    readonly category: react_jsx_runtime.JSX.Element;
    readonly folder: react_jsx_runtime.JSX.Element;
    readonly print: react_jsx_runtime.JSX.Element;
    readonly graphline: react_jsx_runtime.JSX.Element;
    readonly calendar: react_jsx_runtime.JSX.Element;
    readonly graphbar: react_jsx_runtime.JSX.Element;
    readonly menu: react_jsx_runtime.JSX.Element;
    readonly menualt: react_jsx_runtime.JSX.Element;
    readonly filter: react_jsx_runtime.JSX.Element;
    readonly docchart: react_jsx_runtime.JSX.Element;
    readonly doclist: react_jsx_runtime.JSX.Element;
    readonly markup: react_jsx_runtime.JSX.Element;
    readonly bold: react_jsx_runtime.JSX.Element;
    readonly italic: react_jsx_runtime.JSX.Element;
    readonly paperclip: react_jsx_runtime.JSX.Element;
    readonly listordered: react_jsx_runtime.JSX.Element;
    readonly listunordered: react_jsx_runtime.JSX.Element;
    readonly paragraph: react_jsx_runtime.JSX.Element;
    readonly markdown: react_jsx_runtime.JSX.Element;
    readonly repository: react_jsx_runtime.JSX.Element;
    readonly commit: react_jsx_runtime.JSX.Element;
    readonly branch: react_jsx_runtime.JSX.Element;
    readonly pullrequest: react_jsx_runtime.JSX.Element;
    readonly merge: react_jsx_runtime.JSX.Element;
    readonly apple: react_jsx_runtime.JSX.Element;
    readonly linux: react_jsx_runtime.JSX.Element;
    readonly ubuntu: react_jsx_runtime.JSX.Element;
    readonly windows: react_jsx_runtime.JSX.Element;
    readonly storybook: react_jsx_runtime.JSX.Element;
    readonly azuredevops: react_jsx_runtime.JSX.Element;
    readonly bitbucket: react_jsx_runtime.JSX.Element;
    readonly chrome: react_jsx_runtime.JSX.Element;
    readonly chromatic: react_jsx_runtime.JSX.Element;
    readonly componentdriven: react_jsx_runtime.JSX.Element;
    readonly discord: react_jsx_runtime.JSX.Element;
    readonly facebook: react_jsx_runtime.JSX.Element;
    readonly figma: react_jsx_runtime.JSX.Element;
    readonly gdrive: react_jsx_runtime.JSX.Element;
    readonly github: react_jsx_runtime.JSX.Element;
    readonly gitlab: react_jsx_runtime.JSX.Element;
    readonly google: react_jsx_runtime.JSX.Element;
    readonly graphql: react_jsx_runtime.JSX.Element;
    readonly medium: react_jsx_runtime.JSX.Element;
    readonly redux: react_jsx_runtime.JSX.Element;
    readonly twitter: react_jsx_runtime.JSX.Element;
    readonly youtube: react_jsx_runtime.JSX.Element;
    readonly linkedin: react_jsx_runtime.JSX.Element;
    readonly vscode: react_jsx_runtime.JSX.Element;
};
type IconName = keyof typeof ICON_REGISTRY;

type ButtonVariant$1 = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize$1 = 'sm' | 'md' | 'lg';
type ButtonShape$1 = 'rounded' | 'square' | 'pill';
interface ButtonProps$1 {
    size?: ButtonSize$1;
    variant?: ButtonVariant$1;
    shape?: ButtonShape$1;
    textColor?: 'default' | 'white' | 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
    icon?: IconName;
    iconOnly?: boolean;
    iconPosition?: 'left' | 'right';
    backgroundColor?: string;
    children?: ReactNode;
    fullWidth?: boolean;
    onClick?: () => void;
}
/**
* @author landry.karege
* @function @Button
**/
declare const Button: FC<ButtonProps$1>;

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonShape = 'rounded' | 'square' | 'pill';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    children: ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
    textColor?: 'default' | 'white' | 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    icon?: IconName;
    iconOnly?: boolean;
    iconPosition?: 'left' | 'right';
    backgroundColor?: string;
    onClick?: () => void;
}

type InputShape$1 = 'rounded' | 'square' | 'pill';

type TextFieldProps$1 = {
    type?: 'text' | 'number' | 'email' | 'password';
    shape?: InputShape$1;
    size?: string;
    labelText: string;
    placeholder: string;
    className?: string;
    id?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    warnText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    color?: string;
    success?: boolean;
    value?: string;
    onChangeInput: (value: string) => void;
    showPasswordToggle?: boolean;
};
/**
* @author
* @function @TextField
**/
declare const TextField: FC<TextFieldProps$1>;

type InputShape = 'rounded' | 'square' | 'pill';
type InputFieldType = 'text' | 'number' | 'email' | 'password';
type TextFieldProps = {
    type?: InputFieldType;
    shape?: InputShape;
    size?: string;
    labelText: string;
    placeholder: string;
    className?: string;
    id?: string;
    helperText?: string;
    errorText?: string;
    error?: boolean;
    warnText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    color?: string;
    success?: boolean;
    value?: string;
    onChangeInput: (value: string) => void;
    showPasswordToggle?: boolean;
};

interface SelectOptionProps$1 {
    value: string;
    label: string;
}
interface SelectProps$1 {
    options: SelectOptionProps$1[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    color?: string;
    shape?: 'rounded' | 'square' | 'pill';
}
declare const Select: React$1.FC<SelectProps$1>;

type SelectShape = 'rounded' | 'square' | 'pill';
interface SelectOptionProps {
    value: string;
    label: string;
}
interface SelectProps {
    options: SelectOptionProps[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    color?: string;
    shape?: SelectShape;
}

interface RadioOptionProps$1 {
    value: string;
    label: string;
    disabled?: boolean;
}
interface RadioButtonProps$1 {
    name: string;
    options: RadioOptionProps$1[];
    value: string;
    onChange: (value: string) => void;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const RadioButton: React$1.FC<RadioButtonProps$1>;

type RadioButtonShape = 'sm' | 'md' | 'lg';
interface RadioOptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}
interface RadioButtonProps {
    name: string;
    options: RadioOptionProps[];
    value: string;
    onChange: (value: string) => void;
    color?: string;
    size?: RadioButtonShape;
}

interface CheckboxProps$1 {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    indeterminate?: boolean;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const CheckBox: React$1.FC<CheckboxProps$1>;

type CheckBoxSize = 'sm' | 'md' | 'lg';
interface CheckboxProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    indeterminate?: boolean;
    color?: string;
    size?: CheckBoxSize;
}

type LinkVariant = 'primary' | 'secondary' | 'subtle' | 'danger';
type LinkSize = 'sm' | 'md' | 'lg';
type IconPosition = 'left' | 'right';
interface BaseProps {
    children: ReactNode;
    variant?: LinkVariant;
    size?: LinkSize;
    underline?: boolean;
    disabled?: boolean;
    isExternal?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    iconPosition?: IconPosition;
    icon?: IconName;
    isButton?: boolean;
}
type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
    isButton?: false;
};
type ButtonModeProps = BaseProps & Omit<ButtonProps, 'children'> & {
    isButton: true;
};
type LinkProps = AnchorProps | ButtonModeProps;

declare const Link: React$1.FC<LinkProps>;

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface IconProps extends SVGAttributes<SVGPathElement> {
    name: IconName;
    size?: IconSize;
    color?: string;
    className?: string;
    onClick?: () => void;
}

declare const Icon: FC<IconProps>;

type TextVariant = 'default' | 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'subtle' | 'warning';
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right' | 'justify';
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    as?: 'p' | 'span' | 'div' | 'label';
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    variant?: TextVariant;
    truncate?: boolean;
    lineClamp?: number;
    italic?: boolean;
}

declare const Text: FC<TextProps>;

interface TabItemProps$1 {
    label: string;
    value: string;
    disabled?: boolean;
    content?: React$1.ReactNode;
}
interface TabsProps$1 {
    tabs: [TabItemProps$1];
    activeTab: string;
    onChange: (value: string) => void;
    color?: string;
    variant?: 'line' | 'enclosed' | 'pills';
}
declare const Tabs: React$1.FC<TabsProps$1>;

type TabsShape = 'line' | 'enclosed' | 'pills';
interface TabItemProps {
    label: string;
    value: string;
    disabled?: boolean;
    content?: React.ReactNode;
}
interface TabsProps {
    tabs: [TabItemProps];
    activeTab: string;
    onChange: (value: string) => void;
    color?: string;
    variant?: TabsShape;
}

type HeaderVariant = 'default' | 'primary' | 'secondary' | 'muted';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type HeadingAlign = 'left' | 'center' | 'right';
interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    as?: HeadingLevel;
    size?: HeadingSize;
    weight?: HeadingWeight;
    variant?: HeaderVariant;
    align?: HeadingAlign;
}

declare const Header: FC<HeaderProps>;

type PaginationSize = 'sm' | 'md' | 'lg';
type PaginationVariant = 'default' | 'outlined' | 'minimal';
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: PaginationSize;
    variant?: PaginationVariant;
    siblingCount?: number;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    disabled?: boolean;
}

declare const Pagination: React$1.FC<PaginationProps>;

type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
interface DrawerProps {
    /** Whether drawer is visible */
    open: boolean;
    /** Callback when drawer should close */
    onClose: () => void;
    /** Drawer content */
    children: ReactNode;
    /** Side from which drawer appears */
    placement?: DrawerPlacement;
    /** Drawer size */
    size?: DrawerSize;
    /** Drawer title */
    title?: ReactNode;
    /** Footer content */
    footer?: ReactNode;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Show close button */
    showCloseButton?: boolean;
}

declare const Drawer: React$1.FC<DrawerProps>;

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarShape = 'circle' | 'rounded' | 'square';
type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';
interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    status?: AvatarStatus;
    initials?: string;
    fallback?: React.ReactNode;
}

declare const Avatar: React$1.FC<AvatarProps>;

type IndicatorVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
type IndicatorSize = 'sm' | 'md' | 'lg';
type IndicatorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface IndicatorProps {
    /** Content to show in indicator */
    content?: ReactNode;
    /** Element to attach indicator to */
    children: ReactNode;
    /** Visual variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: IndicatorSize;
    /** Position relative to child */
    position?: IndicatorPosition;
    /** Show as dot (no content) */
    dot?: boolean;
    /** Show indicator */
    show?: boolean;
}

declare const Indicator: React$1.FC<IndicatorProps>;

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main';
    p?: number;
    px?: number;
    py?: number;
    m?: number;
    mx?: number;
    my?: number;
    bg?: string;
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

declare const Box: React$1.FC<BoxProps>;

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    size?: ContainerSize;
    center?: boolean;
    px?: number;
}

declare const Container: React$1.FC<ContainerProps>;

interface GridProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    columns?: number | 'auto-fit' | 'auto-fill';
    minColumnWidth?: string;
    gap?: number;
    rowGap?: number;
    columnGap?: number;
}

declare const Grid: FC<GridProps>;

type StackDirection = 'row' | 'column';
type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
interface StackProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: StackDirection;
    spacing?: number;
    gap?: number;
    align?: StackAlign;
    justify?: StackJustify;
    wrap?: boolean;
}

declare const Stack: FC<StackProps>;

export { Avatar, Box, Button, Calendar, CheckBox, Collapse, Container, DatePicker, Drawer, GlobalStyles, Grid, Header, Icon, Indicator, Link, Pagination, RadioButton, Rating, Select, Slider, Stack, Tabs, Text, TextField, ThemeProvider, Tooltip, theme as defaultTheme, theme };
export type { AvatarProps, AvatarShape, AvatarSize, AvatarStatus, BoxProps, Breakpoints, ButtonProps, ButtonShape, ButtonSize, ButtonVariant, CalendarProps, CheckBoxSize, CheckboxProps, CollapseProps, ColorShades, ContainerProps, DatePickerProps, DrawerPlacement, DrawerProps, DrawerSize, GridProps, HeaderProps, HeaderVariant, HeadingLevel, HeadingSize, HeadingWeight, IconProps, IndicatorPosition, IndicatorProps, IndicatorSize, IndicatorVariant, LinkProps, LinkSize, LinkVariant, NeutralColors, PaginationProps, PaginationSize, PaginationVariant, RadioButtonProps, RadioButtonShape, RatingProps, RatingSize, SelectOptionProps, SelectProps, SelectShape, SemanticColors, Shadows, SliderProps, SliderSize, Spacing, StackProps, Step, StepStatus, StepsDirection, StepsProps, TabItemProps, TabsProps, TabsShape, TextAlign, TextFieldProps, TextProps, TextSize, TextVariant, TextWeight, Theme, ThemeConfig, TooltipPlacement, TooltipProps, Transitions, Typography, ZIndices };
