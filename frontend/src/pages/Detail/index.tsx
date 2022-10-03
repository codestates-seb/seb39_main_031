import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Data } from "../../mocks/data";
import Participant from "./Participant";

const Page = styled.div`
  width: 100%;
  padding: 70px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Detail = () => {
  const { product_id } = useParams();
  const data = Data[Number(product_id) - 1];

  return (
    //TODO: 쿠키의 user_id === user_id ? <게시자 페이지 /> : <참여자 페이지 />

    <Page>
      <Container>
        <Participant
          user_id={data.user_id}
          user_name={data.user_name}
          score={data.score}
          profileImage_uri={data.profileImage_uri}
          product_id={data.product_id}
          region={data.region}
          town={data.town}
          category={data.category}
          goal_num={data.goal_num}
          state_num={data.state_num}
          image_uri={data.image_uri}
          goal_price={data.goal_price}
          state_price={data.state_price}
          title={data.title}
          body={data.body}
          generated_time={data.generated_time}
          ended_time={data.ended_time}
          status={data.status}
        />
      </Container>
    </Page>
  );
};

export default Detail;
