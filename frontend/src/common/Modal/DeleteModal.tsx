import styled from "styled-components";

import { DeleteModalType } from "../../types/Modal";
import { BlueButton, GrayButton } from "../Button/BorderButton";

const ModalWrapper = styled.div<{ visible?: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`;

const ModalContainer = styled.main<{ width?: string; height?: string }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => (width ? width : "400px")};
  height: ${({ height }) => (height ? height : "200px")};
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
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

const DeleteModal = ({
  visible,
  onDelete,
  onCancel,
  ...props
}: DeleteModalType) => {
  return (
    <ModalWrapper visible={visible}>
      <ModalContainer>
        <div>작성하신 글을 삭제하시겠습니까?</div>
        <ButtonBox>
          <BlueButton onClick={onDelete}>삭제</BlueButton>
          <GrayButton onClick={onCancel}>취소</GrayButton>
        </ButtonBox>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default DeleteModal;
