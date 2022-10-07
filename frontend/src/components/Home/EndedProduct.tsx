import { useQuery } from "react-query";
import styled from "styled-components";

import { endedProductList } from "../../config/API/api";
import PreviewItem from "../Preview/PreviewItem";

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
