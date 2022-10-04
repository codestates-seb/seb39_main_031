import { useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";

import Tabs from "../../common/Tabs/Tabs";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Active from "./TabList/Active";
import Keyword from "./TabList/Keyword";

const Container = styled.div`
  position: relative;
`;

const NotifiBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
  padding: 0;
  margin-left: -0.5em;

  .icon {
    font-size: 28px;
    color: ${(props) => props.theme.colors.black900};
  }

  .main {
    color: ${(props) => props.theme.colors.white000};
  }
`;

const NotifiBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: -10.5em;
  top: 2.5em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-right: none;
  border-radius: 4px;
`;

interface TabsType {
  label: string;
  index: number;
  Component: React.FC;
}

const tabs: Array<TabsType> = [
  { label: "키워드", index: 1, Component: Keyword },
  { label: "활동", index: 2, Component: Active },
];

interface Props {
  className?: string;
}

const Notification = ({ className }: Props) => {
  const notifiRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useOutsideClick(notifiRef, btnRef, false);
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  const onClickNavBtn = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <NotifiBtn ref={btnRef} onClick={onClickNavBtn}>
        <FaBell className={className} />
      </NotifiBtn>
      {isActive && (
        <NotifiBox ref={notifiRef}>
          <Tabs
            selectedTab={selectedTab}
            onClick={setSelectedTab}
            tabs={tabs}
          />
        </NotifiBox>
      )}
    </Container>
  );
};

export default Notification;
