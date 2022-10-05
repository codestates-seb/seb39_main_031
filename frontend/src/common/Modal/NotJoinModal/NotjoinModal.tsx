import styled, { css } from "styled-components";

import { useAppDispatch } from "../../../hooks/Redux";
import { closeModal } from "../../../redux/modalSlice";
import { BlueButton, GrayButton } from "../../Button/BorderButton";
import Modal from "../Modal";
import ProductInfo from "./ProductInfo";

const customModalStyle = css`
  width: auto;
  height: auto;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 2em;
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
      <header>
        <h3>해당 공동 구매 참여를 취소하시겠습니까?</h3>해당 공동 구매 참여를
        취소하시겠습니까?
      </header>
      <ProductInfo />
      <ButtonBox>
        <BlueButton onClick={checkButtonHandler}>확인</BlueButton>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default NotJoinModal;
