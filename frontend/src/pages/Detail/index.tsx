/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getCookie } from "../../config/Cookie";
import { DetailType } from "../../types/post";
import Participant from "./Participant";
import Publisher from "./Publisher";

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
  const { user_id, product_id } = useParams();

  //TODO Detail page Data 받아오기

  // const axiosData = async (user_id: string, product_id: string) => {
  //   return await axios.get(`/product/${user_id}/${product_id}`);
  // };

  const { data } = useQuery(["productInfo", user_id, product_id], () =>
    axios
      .get<DetailType>(`/product/${user_id}/${product_id}`)
      .then(({ data }) => data)
  );

  const user = getCookie("userInfo");

  if (!user) {
    return (
      <Page>
        <Container>
          {data && (
            <Participant
              user_id={data.user_id}
              user_name={data.user_name}
              score={data.score}
              profileImage_uri={data.profileImage_uri}
              product_id={data.product_id}
              region={data.region}
              unit={data.unit}
              town={data.town}
              goal_num={data.goal_num}
              category={data.category}
              state_num={data.state_num}
              image_uri={data.image_uri}
              goal_price={data.goal_price}
              state_price={data.state_price}
              title={data.title}
              body={data.body}
              generated_time={data.generated_time}
              ended_time={data.ended_time}
              status={data.status}
              base_price={data.base_price}
            />
          )}
        </Container>
      </Page>
    );
  }

  data && data.user_id === parseInt(user.userId)
    ? console.log("good")
    : console.log("fasle");

  return (
    //TODO: 쿠키의 user_id === user_id ? <게시자 페이지 /> : <참여자 페이지 />

    <Page>
      <Container>
        {data && parseInt(user.userId) === data.user_id ? (
          <Publisher
            user_id={data.user_id}
            user_name={data.user_name}
            score={data.score}
            profileImage_uri={data.profileImage_uri}
            product_id={data.product_id}
            region={data.region}
            town={data.town}
            goal_num={data.goal_num}
            state_num={data.state_num}
            category={data.category}
            image_uri={data.image_uri}
            goal_price={data.goal_price}
            state_price={data.state_price}
            title={data.title}
            body={data.body}
            generated_time={data.generated_time}
            ended_time={data.ended_time}
            status={data.status}
            base_price={data.base_price}
            unit={data.unit}
          />
        ) : (
          data && (
            <Participant
              user_id={data.user_id}
              user_name={data.user_name}
              score={data.score}
              profileImage_uri={data.profileImage_uri}
              product_id={data.product_id}
              region={data.region}
              unit={data.unit}
              town={data.town}
              goal_num={data.goal_num}
              category={data.category}
              state_num={data.state_num}
              image_uri={data.image_uri}
              goal_price={data.goal_price}
              state_price={data.state_price}
              title={data.title}
              body={data.body}
              generated_time={data.generated_time}
              ended_time={data.ended_time}
              status={data.status}
              base_price={data.base_price}
            />
          )
        )}
      </Container>
    </Page>
  );
};

export default Detail;
