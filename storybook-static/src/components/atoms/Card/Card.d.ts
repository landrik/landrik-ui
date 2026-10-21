import React from "react";
import { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, CardMediaProps, CardBadgeProps, CardTitleProps, CardDescriptionProps, CardDividerProps, CardSizeProp } from "./Card.types";
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & CardSizeProp & React.RefAttributes<HTMLDivElement>>;
declare const CardBody: React.ForwardRefExoticComponent<CardBodyProps & CardSizeProp & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & CardSizeProp & React.RefAttributes<HTMLDivElement>>;
declare const CardMedia: React.ForwardRefExoticComponent<CardMediaProps & CardSizeProp & React.RefAttributes<HTMLDivElement>>;
declare const CardDivider: React.ForwardRefExoticComponent<CardDividerProps & React.RefAttributes<HTMLHRElement>>;
declare const CardBadge: React.ForwardRefExoticComponent<CardBadgeProps & React.RefAttributes<HTMLSpanElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export { Card, CardHeader, CardBody, CardFooter, CardMedia, CardDivider, CardBadge, CardTitle, CardDescription, };
//# sourceMappingURL=Card.d.ts.map