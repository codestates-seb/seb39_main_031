import styled from "styled-components";

import { ContentsType, TabProps, TabType } from "../../types/tabs";

const TabBox = styled.div<TabType>`
  display: flex;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ({ theme }) => theme.colors.white000};
`;

const Tab = styled.div<TabType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "50px")};
  cursor: pointer;
  border-right: 1px solid
    ${({ borderColor }) =>
      borderColor ? borderColor : ({ theme }) => theme.colors.black300};
  border-bottom: 1px solid
    ${({ borderColor }) =>
      borderColor ? borderColor : ({ theme }) => theme.colors.black300};

  &:hover {
    background: ${({ hoverBackground }) =>
      hoverBackground ? hoverBackground : ({ theme }) => theme.colors.black100};
  }

  &.active {
    font-weight: bold;
  }
`;

const ContentBox = styled.div<ContentsType>`
  width: ${({ contentWidth }) => (contentWidth ? contentWidth : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid
    ${({ contentBorder }) =>
      contentBorder ? contentBorder : ({ theme }) => theme.colors.black300};
  border-radius: 0 0 4px 4px;
`;

const Tabs = ({
  tabs = [],
  selectedTab = 0,
  onClick,
  width,
  height,
  borderColor,
  hoverBackground,
  backgroundColor,
  contentWidth,
  contentBorder,
}: TabProps) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <>
      <TabBox backgroundColor={backgroundColor}>
        {tabs.map((tab) => (
          <Tab
            className={selectedTab === tab.index ? "active" : ""}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            width={width}
            height={height}
            borderColor={borderColor}
            hoverBackground={hoverBackground}
          >
            {tab.label}
          </Tab>
        ))}
      </TabBox>
      <ContentBox contentWidth={contentWidth} contentBorder={contentBorder}>
        {Panel && <Panel.Component index={selectedTab} />}
      </ContentBox>
    </>
  );
};

export default Tabs;
