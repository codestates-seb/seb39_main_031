import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled, { css } from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { closeModal } from "../../redux/modalSlice";
import { BlueButton, GrayButton } from "../Button/ColorButton";
import Modal from "./Modal";

const customModalStyle = css`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1em;
  padding: 2rem;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: 700;
`;

const StarContainer = styled.main`
  display: flex;
  column-gap: 5px;
  padding: 1em 0 2em 0;
  color: ${(props) => props.theme.colors.black300};

  .click {
    color: #ffd800;
  }
`;

const ButtonBox = styled.section`
  display: flex;
  column-gap: 1em;
`;

const STAR = [0, 1, 2, 3, 4];

const RatingModal = () => {
  const dispatch = useAppDispatch();

  const ratingButtonHandler = () => {
    console.log("공구 평점 남기기");
    dispatch(closeModal());
  };

  const closeButtonHandler = () => {
    dispatch(closeModal());
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const starClickHandler = (index: number) => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  console.log("평점: ", clicked.filter((el) => el).length);

  return (
    <Modal customModalStyle={customModalStyle}>
      <Header>진행된 공구에 대한 평점을 남겨주세요</Header>
      <StarContainer>
        {STAR.map((el, index) => {
          return (
            <FaStar
              key={index}
              size="30"
              onClick={() => starClickHandler(el)}
              className={clicked[index] ? "click" : ""}
            />
          );
        })}
      </StarContainer>
      <footer>
        <ButtonBox>
          <GrayButton onClick={closeButtonHandler}>취소</GrayButton>
          <BlueButton onClick={ratingButtonHandler}>확인</BlueButton>
        </ButtonBox>
      </footer>
    </Modal>
  );
};

export default RatingModal;
