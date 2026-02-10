import React from 'react';
import {TabsContainer, TabList, TabPanel, Tab} from './Tabs.styles'


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

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  color = '#3b82f6',
  variant = 'line'
}) => {
  
  const activeTabContent = tabs.find(tab => tab.value === activeTab)?.content;

  return (
    <TabsContainer>
      <TabList role="tablist" $variant={variant}>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
            $active={activeTab === tab.value}
            $color={color}
            $variant={variant}
            onClick={() => onChange(tab.value)}
            disabled={tab.disabled}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {activeTabContent && (
        <TabPanel role="tabpanel">
          {activeTabContent}
        </TabPanel>
      )}
    </TabsContainer>
  );
};