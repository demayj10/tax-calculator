import React, { FC } from 'react';

interface TabPanelProps {
    children: React.ReactNode,
    index: number,
    value: number,
}

const TabPanel: FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
      <>{children}</>
      )}
    </div>
  );
};

export default TabPanel;
