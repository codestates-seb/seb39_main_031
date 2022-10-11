import styled, { css } from "styled-components";

import { useAppDispatch } from "../../../hooks/Redux";
import { closeModal } from "../../../redux/modalSlice";
import { BlueButton, GrayButton } from "../../Button/ColorButton";
import Modal from "../Modal";
import ProductInfo from "./ProductInfo";

const customModalStyle = css`
  width: 80%;
  max-width: 600px;
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
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 1em;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black500};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: flex-end;
  column-gap: 1em;
`;

const NotJoinModal = () => {
  const dispatch = useAppDispatch();

  const checkButtonHandler = () => {
    console.log("공구 참여 취소");
    dispatch(closeModal());
  };

  const cancelButtonHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <Header>공동 구매 참여를 취소하시겠습니까?</Header>
      <Main>
        취소 후 해당 공동 구매에 다시 참여할 수 있습니다.
        <ProductInfo />
      </Main>
      <ButtonBox>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
        <BlueButton onClick={checkButtonHandler}>확인</BlueButton>
      </ButtonBox>
    </Modal>
  );
};

export default NotJoinModal;
