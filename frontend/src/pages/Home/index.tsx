/* eslint-disable prettier/prettier */
import styled from "styled-components";

import EndedProduct from "../../components/Home/EndedProduct";

const Container = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const ListBlock = styled.div`
  padding: 3em 0 5em 0;

  &.favorite {
    border-bottom: 1px solid ${props => props.theme.colors.black300};
  }
`;

const Title = styled.h2`
  width: 100%;
  font-weight: 700;
`;

const Home = () => {
  return (
    <Container>
      <ListBlock className="favorite">
        <Title>인기 공구</Title>
        <EndedProduct />
      </ListBlock>
      <ListBlock>
        <Title>마감임박 공구</Title>
        <EndedProduct />
      </ListBlock>
    </Container>
  );
};

export default Home;
