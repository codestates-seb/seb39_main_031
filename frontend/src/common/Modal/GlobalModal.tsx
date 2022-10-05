import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import DeleteModal from "./DeleteModal";
import EndModal from "./EndModal";
import JoinModal from "./JoinModal";
import NotjoinModal from "./NotJoinModal/NotjoinModal";
import PasswordModal from "./PasswordModal";
import RatingModal from "./RatingModal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MODAL_COMPONENTS = [
  { type: "passwordModal", component: <PasswordModal /> },
  { type: "notjoinModal", component: <NotjoinModal /> },
  { type: "endModal", component: <EndModal /> },
  { type: "deleteModal", component: <DeleteModal /> },
  { type: "ratingModal", component: <RatingModal /> },
  { type: "joinModal", component: <JoinModal /> },
];

const GlobalModal = () => {
  const { modalType, isVisible } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  if (!isVisible) return null;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal?.component;
  };

  return (
    <Container>
      <Overlay onClick={() => dispatch(closeModal())} />
      {renderModal()}
    </Container>
  );
};

export default GlobalModal;
