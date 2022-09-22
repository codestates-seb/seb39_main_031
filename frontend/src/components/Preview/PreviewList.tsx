import { useState } from "react";
import styled from "styled-components";

import { Data } from "./data";
import PreviewItem from "./PreviewItem";

const Container = styled.div`
  display: flex;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-row-gap: 40px;
  grid-column-gap: 50px;
`;

const PreviewList = () => {
  const [data, setData] = useState(Data);

  return (
    <Container>
      <Grid>
        {data.map((el) => (
          <PreviewItem
            key={el.product_id}
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
