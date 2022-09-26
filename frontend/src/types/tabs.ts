export interface TabType {
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBackground?: string;
}

export interface ContentsType {
  contentWidth?: string;
  contentBorder?: string;
}

export interface TabProps {
  tabs: {
    label: string;
    index: number;
    Component: React.FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  contentWidth?: string;
  contentHeight?: string;
  contentBorder?: string;
}
