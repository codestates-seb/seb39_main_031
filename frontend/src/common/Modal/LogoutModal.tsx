import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { removeCookie } from "../../config/Cookie";
import { useAppDispatch } from "../../hooks/Redux";
import { loginActions } from "../../redux/loginSlice";
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

const Title = styled.header`
  font-size: 18px;
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 2em;
`;

const LogoutModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutButtonHandler = () => {
    console.log("로그아웃");
    dispatch(closeModal());
    dispatch(loginActions.logout());
    removeCookie("userInfo");
    // window.location.replace("/");
    navigate(-1);
  };

  const cancelButtonHandler = () => {
    console.log("로그아웃 취소 버튼");
    dispatch(closeModal());
  };

  return (
    <Modal customModalStyle={customModalStyle}>
      <Title>로그아웃 하시겠습니까?</Title>
      <ButtonBox>
        <BlueButton onClick={logoutButtonHandler}>로그아웃</BlueButton>
        <GrayButton onClick={cancelButtonHandler}>취소</GrayButton>
      </ButtonBox>
    </Modal>
  );
};

export default LogoutModal;
