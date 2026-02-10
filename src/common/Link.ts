

import React, { AnchorHTMLAttributes, FormEvent, ReactElement } from 'react'
import { ComponentWithClass } from './ComponentWithClass';

export interface NextLinkProps extends ComponentWithClass {
  href: string,
  as?: string
}

export interface RouterLinkProps extends ComponentWithClass {
  to: string
}

export interface FormLinkProps extends ComponentWithClass {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{}

export type LinkProps = NextLinkProps | RouterLinkProps | AnchorLinkProps | FormLinkProps

export type LinkType = ReactElement<LinkProps>
export type LinkTypes = LinkProps