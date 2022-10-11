import { useNavigate } from "react-router-dom";
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
  padding: 2rem 2rem;
  text-align: left;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: 700;
`;

const Main = styled.main`
  margin-bottom: 1em;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.red500};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: flex-end;
  column-gap: 1em;
`;

const DeleteModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteButtonHandler = () => {
    console.log("삭제 버튼");
    dispatch(closeModal());
    navigate("/");
  };

  const cancelButtonHandler = () => {
    console.log("삭제 취소 버튼");
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <Header>작성하신 글을 삭제하시겠습니까?</Header>
      <Main>삭제한 글은 복구할 수 없습니다.</Main>
      <ButtonBox>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
        <BlueButton onClick={deleteButtonHandler}>삭제</BlueButton>
      </ButtonBox>
    </Modal>
  );
};

export default DeleteModal;
