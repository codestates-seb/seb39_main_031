import { useQuery } from "react-query";
import styled from "styled-components";

import { endedProductList } from "../../config/API/api";
import PreviewItem from "../Preview/PreviewItem";

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 40px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
`;

const EndedProduct = () => {
  const { data } = useQuery(
    ["endedList"],
    async () => await endedProductList().then(({ data }) => data)
  );

  console.log(data);
  return (
    <Container>
      <Grid>
        {data &&
          data.data.map((el: any) => {
            return (
              <PreviewItem
                key={el.productId}
                product_id={el.productId}
                user_id={el.userId}
                image_uri={el.productImg[0]}
                title={el.title}
                user_name={el.username}
                town={el.town}
                goal_num={el.goalQuantity}
                state_num={el.stateQuantity}
                ended_time={el.endedTime}
              />
            );
          })}
      </Grid>
    </Container>
  );
};

export default EndedProduct;
