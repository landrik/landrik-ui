import React, { FC } from 'react';

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// Home Icon
export const HomeIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
<polyline points="9 22 9 12 15 12 15 22" />
</svg>
);

// User Icon
export const UserIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
<circle cx="12" cy="7" r="4" />
</svg>
);

// Settings Icon
export const SettingsIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<circle cx="12" cy="12" r="3" />
<path d="M12 1v6m0 6v6m5.2-13.2l-3 3m-4.4 4.4l-3 3m13.2 2.2l-3-3m-4.4-4.4l-3-3m13.2 5.2h-6m-6 0H1" />
</svg>
);

// Mail Icon
export const MailIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
<polyline points="22,6 12,13 2,6" />
</svg>
);

// Heart Icon
export const HeartIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
</svg>
);

// Star Icon
export const StarIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
);

// Bell Icon
export const BellIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
<path d="M13.73 21a2 2 0 0 1-3.46 0" />
</svg>
);

// Search Icon
export const SearchIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<circle cx="11" cy="11" r="8" />
<path d="m21 21-4.35-4.35" />
</svg>
);

// Plus Icon
export const PlusIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<line x1="12" y1="5" x2="12" y2="19" />
<line x1="5" y1="12" x2="19" y2="12" />
</svg>
);

// X Icon
export const XIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<line x1="18" y1="6" x2="6" y2="18" />
<line x1="6" y1="6" x2="18" y2="18" />
</svg>
);

// Check Icon
export const CheckIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<polyline points="20 6 9 17 4 12" />
</svg>
);

// Loader Icon
export const LoaderIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<line x1="12" y1="2" x2="12" y2="6" />
<line x1="12" y1="18" x2="12" y2="22" />
<line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
<line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
<line x1="2" y1="12" x2="6" y2="12" />
<line x1="18" y1="12" x2="22" y2="12" />
<line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
<line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
</svg>
);

// Arrow Up Icon
export const ArrowUpIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<line x1="12" y1="19" x2="12" y2="5" />
<polyline points="5 12 12 5 19 12" />
</svg>
);

// Arrow Right Icon
export const ArrowRightIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<line x1="5" y1="12" x2="19" y2="12" />
<polyline points="12 5 19 12 12 19" />
</svg>
);

// Thumbs Up Icon
export const ThumbsUpIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
</svg>
);

// Shopping Cart Icon
export const ShoppingCartIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<circle cx="9" cy="21" r="1" />
<circle cx="20" cy="21" r="1" />
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
</svg>
);

// Message Circle Icon
export const MessageCircleIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
</svg>
);

// Info Icon
export const InfoIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<circle cx="12" cy="12" r="10" />
<line x1="12" y1="16" x2="12" y2="12" />
<line x1="12" y1="8" x2="12.01" y2="8" />
</svg>
);

// Share Icon
export const ShareIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<circle cx="18" cy="5" r="3" />
<circle cx="6" cy="12" r="3" />
<circle cx="18" cy="19" r="3" />
<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
</svg>
);

// Bookmark Icon
export const BookmarkIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
</svg>
);

// Download Icon
export const DownloadIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
<polyline points="7 10 12 15 17 10" />
<line x1="12" y1="15" x2="12" y2="3" />
</svg>
);

// Upload Icon
export const UploadIcon: FC<SVGIconProps> = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
<polyline points="17 8 12 3 7 8" />
<line x1="12" y1="3" x2="12" y2="15" />
</svg>
);

// Icon Registry
export const ICON_REGISTRY = {
  Home: HomeIcon,
  User: UserIcon,
  Settings: SettingsIcon,
  Mail: MailIcon,
  Heart: HeartIcon,
  Star: StarIcon,
  Bell: BellIcon,
  Search: SearchIcon,
  Plus: PlusIcon,
  X: XIcon,
  Check: CheckIcon,
  Loader: LoaderIcon,
  ArrowUp: ArrowUpIcon,
  ArrowRight: ArrowRightIcon,
  ThumbsUp: ThumbsUpIcon,
  ShoppingCart: ShoppingCartIcon,
  MessageCircle: MessageCircleIcon,
  Info: InfoIcon,
  Share: ShareIcon,
  Bookmark: BookmarkIcon,
  Download: DownloadIcon,
  Upload: UploadIcon,
} as const;

export type IconName = keyof typeof ICON_REGISTRY;