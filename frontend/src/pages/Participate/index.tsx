/* eslint-disable prettier/prettier */
import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import ParticipateInfo from "../../components/Participate/ParticipateInfo";
import ProductDetail from "../../components/Participate/ProductDetail";
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
  // const { user_id, product_id } = useParams();

  // const { data } = useQuery(
  //   ["participate", user_id, product_id],
  //   async () =>
  //     await axios
  //       .get(`/participate/${user_id}/${product_id}`)
  //       .then(({ data }) => data)
  // );

  // console.log(data);

  const location = useLocation();
  const state = location.state as DetailType;
  const {
    image_uri,
    title,
    goal_num,
    state_num,
    ended_time,
    unit,
    base_price,
  } = state;

  console.log(state);

  return (
    <Container>
      <ParticipateContainer>
        {/* {data && (
          <ProductDetail
            ended_time={data.ended_time}
            goal_num={data.goal_num}
            state_num={data.state_num}
            title={data.title}
            image_uri={data.image_uri}
          />
        )}
        {data && (
          <ParticipateInfo
            base_price={data.base_price}
            goal_num={data.goal_num}
          />
        )} */}
        <ProductDetail
          image_uri={image_uri}
          title={title}
          goal_num={goal_num}
          state_num={state_num}
          base_price={base_price}
          ended_time={ended_time}
          unit={unit}
        />
        <ParticipateInfo base_price={base_price} goal_num={goal_num} />
      </ParticipateContainer>
    </Container>
  );
};

export default Participate;
