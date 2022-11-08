import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/ColorButton";
import Modal from "./Modal";

const customModalStyle = css`
  width: 80%;
  max-width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 2rem;
  text-align: left;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: 700;
`;

const Main = styled.main`
  margin-bottom: 1em;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black500};
  line-height: 1.5rem;
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: flex-end;
  column-gap: 1em;
`;

const EndModal = () => {
  const dispatch = useAppDispatch();

  const endButtonHandler = () => {
    dispatch(closeModal());
  };

  const closeButtonHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <Header>상품을 받으셨다면 공구를 종료해주세요.</Header>
      <Main>
        공구 종료 시, 참여현황에서 해당 공구를 확인할 수 없습니다. <br />
        공구를 종료하시겠습니까?
      </Main>
      <ButtonBox>
        <GrayButton onClick={closeButtonHandler}>취소</GrayButton>
        <BlueButton onClick={endButtonHandler}>종료</BlueButton>
      </ButtonBox>
    </Modal>
  );
};

export default EndModal;
