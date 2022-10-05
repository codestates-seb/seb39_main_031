import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/BorderButton";
import Modal from "./Modal";

const customModalStyle = css`
  width: 400px;
  height: 200px;
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

const DeleteModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteButtonHandler = () => {
    console.log("삭제 버튼");
    dispatch(closeModal());
    navigate(-1);
  };

  const cancelButtonHandler = () => {
    console.log("삭제 취소 버튼");
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <div>작성하신 글을 삭제하시겠습니까?</div>
      <ButtonBox>
        <BlueButton onClick={deleteButtonHandler}>삭제</BlueButton>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default DeleteModal;
