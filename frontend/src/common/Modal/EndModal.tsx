import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/BorderButton";
import Modal from "./Modal";

const customModalStyle = css`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  background-color: white;
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 2em;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;

  div {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.black500};
  }
`;

const EndModal = () => {
  const dispatch = useAppDispatch();

  const endButtonHandler = () => {
    console.log("공구 종료");
    dispatch(closeModal());
  };

  const closeButtonHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <Header>
        <div>상품을 받았다면 공구를 종료해주세요.</div>
        <p>공구 종료 시, 참여현황에서 해당 공구를 확인할 수 없습니다.</p>
      </Header>
      <footer>
        <p>공구를 종료하시겠습니까?</p>
        <ButtonBox>
          <BlueButton onClick={endButtonHandler}>확인</BlueButton>
          <GrayButton onClick={closeButtonHandler}>취소</GrayButton>
        </ButtonBox>
      </footer>
    </Modal>
  );
};

export default EndModal;
