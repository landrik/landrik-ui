import React from 'react';
export interface TabItemProps {
    label: string;
    value: string;
    disabled?: boolean;
    content?: React.ReactNode;
}
export interface TabsProps {
    tabs: [TabItemProps];
    activeTab: string;
    onChange: (value: string) => void;
    color?: string;
    variant?: 'line' | 'enclosed' | 'pills';
}
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map