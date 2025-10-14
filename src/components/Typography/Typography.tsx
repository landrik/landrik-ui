import React, { FC, ReactNode, CSSProperties  } from 'react'
import classNames from 'classnames';

/**
* @author
* @function @Typography
**/

export type VariantType =
  | 'default'
  | 'display1'
  | 'display2'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body'
  | 'bodysmall'
  | 'bodyxsmall'
  | 'tag'
  | 'label'
  | 'button'
  | 'buttonLarge';

export type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'blockquote' | 'inlineCode'
export type AlignType = 'center' | 'right' | 'start' | 'end';
export type ColorType = 'primary' | 'secondary' | 'white' | 'black';
export type FontWeightType =
  | 'light'
  | 'regular'
  | 'bold'
  | 'black'
  | '300'
  | '400'
  | '500'
  | '700'
  | '900';

export const variantsMapping = {
  display1: 'h1',
  display2: 'h2',
  heading1: 'h3',
  heading2: 'h4',
  heading3: 'h5',
  heading4: 'h6',
  body: 'p',
  bodysmall: 'p',
  bodyxsmall: 'p',
  default: 'p',
  tag: 'p',
  label: 'p',
  button: 'p',
  buttonLarge: 'p',
};


export interface TypographyProps {
  className?: string;
  children: ReactNode;
  //tag?: TagVariants;
  variant?: VariantType;
  align?: AlignType;
  weight?: FontWeightType;
  color?: ColorType;
  as?: AsType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  italic?: boolean;
}

const Typography = (props: TypographyProps): JSX.Element => {
  const {
    variant,
    align,
    children,
    className,
    weight,
    italic,
    color = 'primary',
    as,
    ...restProps
  } = props;

  const cxClassName = classNames(
    'typography', 
    {
      [`typography--variant-${variant}`]: !!variant,
      [`typography--weight-${weight}`]: !!weight,
      'alignCenter': align === 'center',
      'alignRight': align === 'right',
      'alignStart': align === 'start',
      'alignEnd': align === 'end',
      'black': color === 'black',
      'secondary': color === 'secondary',
      'italic': italic,
      'white': color === 'white',
    },
    className
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TypographyComponent: any = variant ? variantsMapping[variant] : variantsMapping.body;
  const Component: any = as ? as : TypographyComponent;

  return (
    <Component className={cxClassName} {...restProps}>
      {children}
    </Component>
  );
};


 export default Typography;


// <div>
    //   <table>
    //     <thead>
    //       <td>Size</td>
    //       <td>Category</td>
    //       <td>size difference</td>
    //       <td>size token</td>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>36px (2.25rem)</td>
    //         <td>H1. Big headline are big and bold</td>
    //         <td>+12px</td>
    //         <td>Book</td>
    //       </tr>
    //       <tr>
    //         <td>24px (1.5rem)</td>
    //         <td>H2. In excpetional cases, a headline can run across two or three lines</td>
    //         <td>+4px</td>
    //         <td>Book</td>
    //       </tr>
    //       <tr>
    //         <td>20px (1.25rem)</td>
    //         <td>H3. But if your headline is longer than two or three lines, with approx. 72 or more characters, perhaps it should be shortened or treated like a small headline or an ingress.</td>
    //         <td>+6px</td>
    //         <td>Bold (SHORT HEADLINE / INGRESS REGULAR)</td>
    //       </tr>
    //       <tr>
    //         <td>14px (0.875rem)</td>
    //         <td>Body text. This is a paragraph used to describe things more in detail. It could be used in one, two or three columns layouts. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    //         </td>
    //         <td>0</td>
    //         <td>Regular</td>
    //       </tr>
    //       <tr>
    //         <td>12px (0.75rem)</td>
    //         <td>Body text small. This is a paragraph used to describe things more in detail. It could be used in one, two or three columns layouts Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    //         </td>
    //         <td>-2px</td>
    //         <td>light</td>
    //       </tr>
    //     </tbody>
    //   </table>
// </div>