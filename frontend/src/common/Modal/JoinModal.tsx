import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/ColorButton";
import Modal from "./Modal";

const customModalStyle = css`
  width: 400px;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
`;

const Header = styled.header`
  font-size: 18px;
  font-weight: 700;
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 1em;
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
      <Header>해당 공동 구매에 참여하시겠습니까?</Header>
      <ButtonBox>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
        <BlueButton onClick={JoinButtonHandler}>참여</BlueButton>
      </ButtonBox>
    </Modal>
  );
};

export default JoinModal;
