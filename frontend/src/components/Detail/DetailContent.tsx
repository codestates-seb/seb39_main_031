import { useState } from "react";
import styled from "styled-components";

import { ParticipantNotice, PublisherNotice } from "./Notice/Notice";
import ProductInfo from "./ProductInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
`;

const TabTitleBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  column-gap: 30px;
  background-color: ${(props) => props.theme.colors.white000};
  border-bottom: 1px solid ${(props) => props.theme.colors.black200};
`;

const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  margin-left: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black400};
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.colors.black900};
  }

  &.active {
    color: ${(props) => props.theme.colors.black900};
    border-bottom: 4px solid ${(props) => props.theme.colors.cyan400};
  }
`;

interface TabsType {
  label: string;
  index: number;
}

const tabs: Array<TabsType> = [
  { label: "상품설명", index: 1 },
  { label: "공지사항", index: 2 },
];

interface Props {
  body: string;
}

//TODO: 게시자 상세 페이지 내용
export const PublisherContent = ({ body }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Container>
      <TabTitleBox>
        {tabs.map((el, index) => {
          return (
            <Tab
              key={index}
              className={selectedTab === index ? "active" : ""}
              onClick={() => setSelectedTab(index)}
            >
              {el.label}
            </Tab>
          );
        })}
      </TabTitleBox>
      {selectedTab === 0 ? <ProductInfo body={body} /> : <PublisherNotice />}
    </Container>
  );
};

//TODO: 참가자 상세 페이지 내용
export const ParticipantContent = ({ body }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Container>
      <TabTitleBox>
        {tabs.map((el, index) => {
          return (
            <Tab
              key={index}
              className={selectedTab === index ? "active" : ""}
              onClick={() => setSelectedTab(index)}
            >
              {el.label}
            </Tab>
          );
        })}
      </TabTitleBox>
      {selectedTab === 0 ? <ProductInfo body={body} /> : <ParticipantNotice />}
    </Container>
  );
};
