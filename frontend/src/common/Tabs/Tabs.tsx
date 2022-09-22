import styled from "styled-components";

const TabBox = styled.div`
  display: flex;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 50px;
  cursor: pointer;
  border-right: 1px solid ${(props) => props.theme.colors.black300};
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }
`;

const ContentBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 0 0 4px 4px;
`;

interface tabProps {
  tabs: {
    label: string;
    index: number;
    Component: React.FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
}

const Tabs = ({ tabs = [], selectedTab = 0, onClick }: tabProps) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <>
      <TabBox>
        {tabs.map((tab) => (
          <Tab
            className={selectedTab === tab.index ? "active" : ""}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            tabIndex={selectedTab === tab.index ? 0 : -1}
          >
            {tab.label}
          </Tab>
        ))}
      </TabBox>
      <ContentBox>
        {Panel && <Panel.Component index={selectedTab} />}
      </ContentBox>
    </>
  );
};

export default Tabs;
