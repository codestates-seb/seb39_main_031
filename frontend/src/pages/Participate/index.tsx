import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import ProductModal from "../../common/Modal/ProductModal/ProductModal";
import ParticipateInfo from "../../components/Participate/ParticipateInfo";
import ProductDetail from "../../components/Participate/ProductDetail";
import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { modalActions } from "../../redux/modalSlice";
import { DetailType } from "../../types/post";

const Container = styled.div`
  width: 100%;
  padding: 90px 0 40px 0;
`;

const ParticipateContainer = styled.div`
  width: 40%;
  padding: 34px 32px 32px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
  margin: 0 auto;
`;

const Participate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.modal.modalVisible);

  const location = useLocation();
  const state = location.state as DetailType;
  const {
    image_uri,
    title,
    goal_num,
    state_num,
    state_price,
    status,
    ended_time,
  } = state;

  const [userNickname, setUserNickname] = useState("김박사");
  const [quantity, setQuantity] = useState(0);
  const unit = "1kg";

  const openModalHandler = () => {
    console.log("삭제 모달");
    dispatch(modalActions.modal());
  };

  const checkButtonHandler = () => {
    console.log("확인 버튼");
    navigate(-1);
  };

  const cancelButtonHandler = () => {
    console.log("취소 버튼");
    dispatch(modalActions.modal());
  };

  return (
    <Container>
      <ProductModal
        modalTitle="해당 공동 구매에 참여하시겠습니까?"
        visible={isVisible}
        onCheck={checkButtonHandler}
        onCancel={cancelButtonHandler}
        image_uri={image_uri}
        title={title}
        state_price={state_price}
        userNickname={userNickname}
        quantity={quantity}
      />
      <ParticipateContainer>
        <ProductDetail
          image_uri={image_uri}
          title={title}
          goal_num={goal_num}
          state_num={state_num}
          state_price={state_price}
          status={status}
          ended_time={ended_time}
        />
        <ParticipateInfo
          onOpenModal={openModalHandler}
          userNickname={userNickname}
          quantity={quantity}
          setUserNickname={setUserNickname}
          unit={unit}
          setQuantity={setQuantity}
        />
      </ParticipateContainer>
    </Container>
  );
};

export default Participate;
