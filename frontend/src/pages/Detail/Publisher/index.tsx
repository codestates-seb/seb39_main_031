/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CloseDisplay from "../../../components/Detail/CloseDisplay";
import { PublisherContent } from "../../../components/Detail/DetailContent";
import DetailStats from "../../../components/Detail/DetailStat";
import DetailUserInfo from "../../../components/Detail/DetailUserInfo";
import CloseButton from "../../../components/Detail/Publisher/CloseButton";
import DeleteButton from "../../../components/Detail/Publisher/DeleteButton";
import ModifyButton from "../../../components/Detail/Publisher/ModifyButton";
import ParticipantList from "../../../components/Detail/Publisher/ParticipantList";
import { useAppDispatch } from "../../../hooks/Redux";
import { deleteModal } from "../../../redux/modalSlice";
import { DetailType, Image } from "../../../types/post";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
`;

const Title = styled.h1`
  padding-bottom: 1em;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  column-gap: 3em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    flex-direction: row-reverse;
  }
`;

const Aside = styled.aside`
  width: 100%;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 30%;
    padding: 0;
  }
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
  width: 100%;
  margin-top: 2em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 3em;
    margin-top: 0;
  }
`;

const ImageBox = styled.div<Image>`
  width: 100%;
  height: 400px;

  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s linear;

  &.desktop {
    @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
      display: none;
    }
  }

  &.tablet {
    @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
      display: none;
    }
  }
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
  title,
  body,
  generated_time,
  ended_time,
  status,
  base_price,
  enteredUser,
}: DetailType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const goal_price = goal_num * base_price;

  const deleteModalHandler = () => {
    dispatch(deleteModal({ modalType: "deleteModal", isVisible: true }));
  };

  return (
    <Container>
      <Title>{title}</Title>
      <ImageBox image={image_uri} className="tablet" />
      <Main>
        <Aside>
          <DetailStats
            ended_time={ended_time}
            goal_num={goal_num}
            state_num={state_num}
            goal_price={goal_price}
            generated_time={generated_time}
          />
          <ButtonBlock>
            {status === "PROCEED" ? (
              <CloseButton product_id={product_id} />
            ) : (
              <CloseDisplay />
            )}
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
          <ImageBox image={image_uri} className="desktop" />
          {enteredUser && <ParticipantList enteredUser={enteredUser} />}
          <PublisherContent body={body} />
        </Section>
      </Main>
    </Container>
  );
};

export default Publisher;
