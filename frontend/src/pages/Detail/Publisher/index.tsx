import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import DeleteModal from "../../../common/Modal/DeleteModal";
import CloseDisplay from "../../../components/Detail/CloseDisplay";
import { PublisherContent } from "../../../components/Detail/DetailContent";
import DetailStats from "../../../components/Detail/DetailStat";
import DetailUserInfo from "../../../components/Detail/DetailUserInfo";
import CloseButton from "../../../components/Detail/Publisher/CloseButton";
import DeleteButton from "../../../components/Detail/Publisher/DeleteButton";
import ModifyButton from "../../../components/Detail/Publisher/ModifyButton";
import ParticipantList from "../../../components/Detail/Publisher/ParticipantList";
import { useAppDispatch, useAppSelector } from "../../../hooks/Redux";
import { modalActions } from "../../../redux/modalSlice";
import { DetailType, Image } from "../../../types/post";

const Title = styled.h1`
  padding-bottom: 1em;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 60px;
`;

const Aside = styled.aside`
  width: 30%;
`;
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const DetailButton = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 3em;
`;

const ImageBox = styled.div<Image>`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s linear;
`;

const Publisher = ({
  user_id,
  user_name,
  score,
  profileImage_uri,
  product_id,
  region,
  town,
  category,
  goal_num,
  state_num,
  image_uri,
  goal_price,
  state_price,
  title,
  body,
  generated_time,
  ended_time,
  status,
}: DetailType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.modal.modalVisible);

  const deleteModalHandler = () => {
    console.log("삭제 모달");
    dispatch(modalActions.modal());
  };

  const deleteButtonHandler = () => {
    console.log("삭제 버튼");
  };

  const cancelButtonHandler = () => {
    console.log("삭제 취소 버튼");
    dispatch(modalActions.modal());
  };

  return (
    <>
      <DeleteModal
        visible={isVisible}
        onDelete={deleteButtonHandler}
        onCancel={cancelButtonHandler}
      />
      <Title>{title}</Title>
      <Main>
        <Aside>
          <DetailStats
            ended_time={ended_time}
            goal_num={goal_num}
            state_num={state_num}
            state_price={state_price}
            goal_price={goal_price}
            generated_time={generated_time}
          />
          <ButtonBlock>
            {status === "proceeding" ? <CloseButton /> : <CloseDisplay />}
            <DetailButton>
              <ModifyButton
                onClick={() =>
                  navigate("/edit", {
                    state: {
                      user_id,
                      product_id,
                      title,
                      category,
                      image_uri,
                      goal_num,
                      generated_time,
                      ended_time,
                      region,
                      town,
                      body,
                    },
                  })
                }
              />
              <DeleteButton onClick={deleteModalHandler} />
            </DetailButton>
          </ButtonBlock>
          <DetailUserInfo
            profileImage_uri={profileImage_uri}
            user_name={user_name}
            town={town}
            score={score}
          />
        </Aside>
        <Section>
          <ImageBox image={image_uri} />
          <ParticipantList />
          <PublisherContent body={body} />
        </Section>
      </Main>
    </>
  );
};

export default Publisher;
