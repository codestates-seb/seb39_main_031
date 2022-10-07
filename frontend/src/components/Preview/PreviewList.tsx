/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import styled from "styled-components";

import { Data } from "../../mocks/data";
import PreviewItem from "./PreviewItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 20px;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
  }
`;

const PreviewList = () => {
  const [data, setData] = useState(Data);

  return (
    <Container>
      <Grid>
        {data.map((el) => (
          <PreviewItem
            key={el.product_id}
            product_id={el.product_id}
            user_id={el.user_id}
            image_uri={el.image_uri}
            title={el.title}
            user_name={el.user_name}
            town={el.town}
            goal_num={el.goal_num}
            state_num={el.state_num}
            ended_time={el.ended_time}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default PreviewList;
