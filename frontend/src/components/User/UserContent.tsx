import { useState } from "react";
import styled from "styled-components";

import JoinedList from "./JoinedList";
import Keyword from "./Keword/Keyword";
import ProceedList from "./ProceedList";

const TabTitleBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  column-gap: 3em;
  margin-bottom: 3em;
`;

const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.size18};

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.cyan400};
  }

  &.active {
    font-weight: 900;
    border-bottom: 3px solid ${(props) => props.theme.colors.cyan400};
  }
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

interface TabsType {
  label: string;
}

const tabs: Array<TabsType> = [
  { label: "키워드" },
  { label: "진행한 공구" },
  { label: "참여한 공구" },
];

const UserContent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  let displayComponent = <Keyword />;
  if (selectedTab === 1) {
    displayComponent = <ProceedList />;
  }
  if (selectedTab === 2) {
    displayComponent = <JoinedList />;
  }

  return (
    <>
      <TabTitleBox>
        {tabs.map((el, index) => (
          <Tab
            key={index}
            className={selectedTab === index ? "active" : ""}
            onClick={() => setSelectedTab(index)}
          >
            {el.label}
          </Tab>
        ))}
      </TabTitleBox>
      <ContentBox>{displayComponent}</ContentBox>
    </>
  );
};

export default UserContent;
