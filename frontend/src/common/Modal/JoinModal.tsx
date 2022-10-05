import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/BorderButton";
import Modal from "./Modal";

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

const JoinModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const JoinButtonHandler = () => {
    console.log("공구 참여하기");
    dispatch(closeModal());
    navigate(-1);
  };

  const cancelButtonHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <header>
        <h3>해당 공동 구매에 참여하시겠습니까?</h3>
      </header>
      <ButtonBox>
        <BlueButton onClick={JoinButtonHandler}>확인</BlueButton>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default JoinModal;
