/* eslint-disable prettier/prettier */
import styled from "styled-components";

import { Data } from "../../MSW/data";
import CurrentItem from "./CurrentItem";

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.black300};
  border-bottom: transparent;
`;

const CurrentList = () => {
  const data = Data.slice(3, 6);
  const quantity = 1;

  return (
    <Container>
      {data.map(el => {
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
            state_price={el.state_price}
            quantity={quantity}
          />
        );
      })}
    </Container>
  );
};

export default CurrentList;
