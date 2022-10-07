/* eslint-disable prettier/prettier */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import CloseDisplay from "../../../components/Detail/CloseDisplay";
import { ParticipantContent } from "../../../components/Detail/DetailContent";
import DetailStats from "../../../components/Detail/DetailStat";
import DetailUserInfo from "../../../components/Detail/DetailUserInfo";
import JoinButton from "../../../components/Detail/Participant/JoinButton";
import SubButtons from "../../../components/Detail/Participant/SubButtons";
import { useAppSelector } from "../../../hooks/Redux";
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

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 3em;
`;

const TitleImg = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.div<Image>`
  width: 300px;
  height: 400px;

  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.2s linear;
`;

const Participant = ({
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
}: DetailType) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLogin } = useAppSelector(state => state.login);
  const goal_price = goal_num * base_price;

  const onClickHandler = () => {
    // TODO: 단위, 단위 가격(임의로 state_price 사용) 필요
    console.log(user_id, product_id);
    isLogin
      ? navigate(`/participate/${user_id}/${product_id}`, {
          state: {
            profileImage_uri,
            title,
            goal_num,
            state_num,
            status,
            ended_time,
            base_price,
          },
        })
      : navigate("/login", { state: { from: pathname } });
  };
  console.log(status);
  return (
    <>
      <Title>{title}</Title>
      <Main>
        <Aside>
          <DetailStats
            ended_time={ended_time}
            goal_num={goal_num}
            state_num={state_num}
            goal_price={goal_price}
            generated_time={generated_time}
          />
          {status === "PROCEED" ? (
            <JoinButton onClick={onClickHandler} />
          ) : (
            <CloseDisplay />
          )}
          <SubButtons />
          <DetailUserInfo
            profileImage_uri={image_uri}
            user_name={user_name}
            town={town}
            score={score}
          />
        </Aside>
        <Section>
          <TitleImg>
            <ImageBox image={profileImage_uri} />
          </TitleImg>
          <ParticipantContent body={body} />
        </Section>
      </Main>
    </>
  );
};

export default Participant;
