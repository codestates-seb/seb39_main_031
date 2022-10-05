import styled from "styled-components";

import { ModalType, StyledModalProps } from "../../types/Modal";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`;

const ModalContainer = styled.div<StyledModalProps>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;

  ${({ customModalStyle }) => customModalStyle && customModalStyle};

  > div {
    cursor: pointer;
  }
`;

const Modal = ({ children, customModalStyle }: ModalType) => {
  return (
    <ModalWrapper>
      <ModalContainer customModalStyle={customModalStyle}>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
