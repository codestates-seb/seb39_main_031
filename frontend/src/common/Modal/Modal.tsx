import styled from "styled-components";

import { ModalType } from "../../types/Modal";

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

const ModalContainer = styled.div<{ width?: string; height?: string }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => (width ? width : "60%")};
  height: ${({ height }) => (height ? height : "40%")};
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;

  > div {
    cursor: pointer;
  }
`;

const Modal = (props: ModalType) => {
  return (
    <ModalWrapper visible={props.visible}>
      <ModalContainer></ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
