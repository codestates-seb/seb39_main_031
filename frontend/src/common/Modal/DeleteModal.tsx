import styled, { css } from "styled-components";

import { DeleteModalType } from "../../types/Modal";
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

const DeleteModal = ({ visible, onDelete, onCancel }: DeleteModalType) => {
  return (
    <Modal visible={visible} customModalStyle={customModalStyle}>
      <div>작성하신 글을 삭제하시겠습니까?</div>
      <ButtonBox>
        <BlueButton onClick={onDelete}>삭제</BlueButton>
        <GrayButton onClick={onCancel}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default DeleteModal;
