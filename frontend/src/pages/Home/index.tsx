import styled from "styled-components";

import PreviewList from "../../components/Preview/PreviewList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ListBlock = styled.div`
  padding: 3em 0 5em 0;

  &.favorite {
    border-bottom: 1px solid ${(props) => props.theme.colors.black300};
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
        <PreviewList />
      </ListBlock>
      <ListBlock>
        <Title>마감임박 공구</Title>
        <PreviewList />
      </ListBlock>
    </Container>
  );
};

export default Home;
