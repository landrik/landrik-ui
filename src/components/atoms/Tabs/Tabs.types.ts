export type TabsShape = 'line' | 'enclosed' | 'pills';

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
  variant?: TabsShape;
}