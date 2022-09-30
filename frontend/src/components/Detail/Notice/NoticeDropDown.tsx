import { useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const Container = styled.div`
  position: relative;
`;

const DropDownBtn = styled.button`
  border: 1px solid transparent;
  background: transparent;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: -5em;
  left: -2.4em;
  background-color: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-bottom: transparent;
  border-radius: 4px;
`;

const ButtonItem = styled(Button)`
  width: 70px;
  height: 30px;
  font-size: ${(props) => props.theme.fontSize.size15};
  background: ${(props) => props.theme.colors.white000};
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  color: ${(props) => props.theme.colors.cyan700};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

const NoticeDropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, btnRef, false);

  const navClickHandler = () => {
    setIsActive(!isActive);
  };

  const modifyHandler = () => {
    console.log("수정");
  };

  const deleteHandler = () => {
    console.log("삭제");
  };

  return (
    <Container>
      <DropDownBtn ref={btnRef} onClick={navClickHandler}>
        <BiDotsVerticalRounded />
      </DropDownBtn>
      {isActive && (
        <ButtonBox ref={dropDownRef}>
          <ButtonItem onClick={modifyHandler}>수정</ButtonItem>
          <ButtonItem onClick={deleteHandler}>삭제</ButtonItem>
        </ButtonBox>
      )}
    </Container>
  );
};

export default NoticeDropDown;
