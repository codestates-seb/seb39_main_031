import { useState } from "react";
import styled from "styled-components";

import Notice from "./Notice/Notice";
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
  background-color: ${(props) => props.theme.colors.black300};
`;

const Tab = styled.div`
  width: 20%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.black400};
  }

  &.active {
    font-weight: 900;
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

const DetailContent = ({ body }: Props) => {
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
      {selectedTab === 0 ? <ProductInfo body={body} /> : <Notice />}
    </Container>
  );
};

export default DetailContent;
