/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import styled from "styled-components";

import { Data } from "../../mocks/data";
import PreviewItem from "./PreviewItem";

const Container = styled.div`
  display: flex;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-row-gap: 40px;
  grid-column-gap: 5%;
`;

const PreviewList = () => {
  const [data, setData] = useState(Data);

  return (
    <Container>
      <Grid>
        {data.map(el => (
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
