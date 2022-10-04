import styled from "styled-components";

import { useAppDispatch } from "../../hooks/Redux";
import { Data } from "../../mocks/data";
import { closeModal } from "../../redux/modalSlice";
import CurrentItem from "./CurrentItem";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-bottom: transparent;
`;

const CurrentList = () => {
  const data = Data.slice(3, 6);
  const dispatch = useAppDispatch();

  //TODO: 모달 내용 핸들러
  const endButtonHandler = () => {
    console.log("공구 종료");
    dispatch(closeModal());
  };

  const cancelButtonHandler = () => {
    console.log("공구 취소");
    dispatch(closeModal());
  };

  const ratingButtonHandler = () => {
    console.log("공구 평점 남기기");
    dispatch(closeModal());
  };

  return (
    <Container>
      {/* <ProductModal
        modalTitle="해당 공동 구매 참여를 취소하시겠습니까?"
        visible={isCancelModalVisible}
        onCheck={cancelButtonHandler}
        onCancel={closeButtonHandler}
        image_uri={image_uri}
        title={title}
        state_price={state_price}
        userNickname={userNickname}
        quantity={quantity}
      /> */}
      {data.map((el) => {
        return (
          <CurrentItem
            key={el.product_id}
            image_uri={el.image_uri}
            ended_time={el.ended_time}
            title={el.title}
            category={el.category}
            user_name={el.user_name}
            town={el.town}
            status={el.status}
          />
        );
      })}
    </Container>
  );
};

export default CurrentList;
