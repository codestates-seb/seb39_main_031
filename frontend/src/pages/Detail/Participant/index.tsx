import styled from "styled-components";

import CloseDisplay from "../../../components/Detail/CloseDisplay";
import DetailContent from "../../../components/Detail/DetailContent";
import DetailStats from "../../../components/Detail/DetailStat";
import DetailUserInfo from "../../../components/Detail/DetailUserInfo";
import JoinButton from "../../../components/Detail/Participant/JoinButton";
import SubButtons from "../../../components/Detail/Participant/SubButtons";
import { DetailType, Image } from "../../../types/post";

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 1em 0;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 2em;
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

const ImageBox = styled.div<Image>`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s linear;
`;

const Participant = ({
  user_id,
  user_name,
  score,
  profileImage_uri,
  product_id,
  town,
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
  return (
    <Page>
      <Container>
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
            {status === "proceeding" ? <JoinButton /> : <CloseDisplay />}
            <SubButtons />
            <DetailUserInfo
              profileImage_uri={profileImage_uri}
              user_name={user_name}
              town={town}
              score={score}
            />
          </Aside>
          <Section>
            <ImageBox image={image_uri} />
            <DetailContent body={body} />
          </Section>
        </Main>
      </Container>
    </Page>
  );
};

export default Participant;
