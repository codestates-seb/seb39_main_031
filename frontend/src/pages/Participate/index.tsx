/* eslint-disable prettier/prettier */
import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import ParticipateInfo from "../../components/Participate/ParticipateInfo";
import ProductDetail from "../../components/Participate/ProductDetail";
import { detailProduct } from "../../config/API/api";
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
  const { user_id, product_id } = useParams();

  const { data } = useQuery(
    [product_id],
    () =>
      product_id &&
      detailProduct(product_id).then(({ data }) => {
        console.log({
          returnedData: data,
        });
        return data;
      })
  );

  console.log(data);

  return (
    <Container>
      <ParticipateContainer>
        {data && (
          <ProductDetail
            ended_time={data.endedTime}
            goal_num={data.goalQuantity}
            state_num={data.stateQuantity}
            title={data.title}
            image_uri={data.productImg[0]}
            unit={data.unit}
          />
        )}
        {data && (
          <ParticipateInfo
            base_price={data.unitPerPrice}
            goal_num={data.goalQuantity}
          />
        )}
      </ParticipateContainer>
    </Container>
  );
};

export default Participate;
