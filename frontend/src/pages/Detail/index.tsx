/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import TopButton from "../../common/Button/TopButton";
import { detailProduct } from "../../config/API/api";
import { getCookie } from "../../config/Cookie";
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
  const { product_id } = useParams();

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

  const user = getCookie("userInfo");

  if (!user) {
    return (
      <Page>
        <Container>
          {data && (
            <Participant
              user_id={data.userId}
              user_name={data.username}
              score={data.score}
              profileImage_uri={data.productImg[0]}
              product_id={data.productId}
              region={data.region}
              unit={data.unit}
              town={data.town}
              goal_num={data.goalQuantity}
              category={data.category}
              state_num={data.stateQuantity}
              image_uri="https://source.unsplash.com/80x80/?cat"
              title={data.title}
              body={data.body}
              generated_time={data.generatedTime}
              ended_time={data.endedTime}
              status={data.state}
              base_price={data.unitPerPrice}
              enteredUser={data.enteredUser}
            />
          )}
          <TopButton />
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        {data && parseInt(user.userId) === data.userId ? (
          <Publisher
            user_id={data.userId}
            user_name={data.username}
            score={data.score}
            profileImage_uri="https://source.unsplash.com/80x80/?cat"
            product_id={data.productId}
            region={data.region}
            unit={data.unit}
            town={data.town}
            goal_num={data.goalQuantity}
            category={data.category}
            state_num={data.stateQuantity}
            image_uri={data.productImg[0]}
            title={data.title}
            body={data.body}
            generated_time={data.generatedTime}
            ended_time={data.endedTime}
            status={data.state}
            base_price={data.unitPerPrice}
            enteredUser={data.enteredUser}
          />
        ) : (
          data && (
            <Participant
              user_id={data.userId}
              user_name={data.username}
              score={data.score}
              profileImage_uri={data.productImg[0]}
              product_id={data.productId}
              region={data.region}
              unit={data.unit}
              town={data.town}
              goal_num={data.goalQuantity}
              category={data.category}
              state_num={data.stateQuantity}
              image_uri="https://source.unsplash.com/80x80/?cat"
              title={data.title}
              body={data.body}
              generated_time={data.generatedTime}
              ended_time={data.endedTime}
              status={data.state}
              base_price={data.unitPerPrice}
            />
          )
        )}
        <TopButton />
      </Container>
    </Page>
  );
};

export default Detail;
