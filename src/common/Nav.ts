import { ReactElement } from "react";
import { ComponentWithClass } from "./ComponentWithClass";
import { LinkProps } from "./Link";


export interface Nav<T> extends ComponentWithClass {
  children?: ReactElement<T> | ReactElement<T>[]
}

export interface NavItem {
  isActive?:boolean;
  link: ReactElement<LinkProps>
}