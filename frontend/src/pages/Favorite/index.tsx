import styled from "styled-components";

import PreviewList from "../../components/Preview/PreviewList";

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

const Title = styled.h1`
  margin: 2em 0;
`;

const Favorite = () => {
  return (
    <Page>
      <Container>
        <Title>관심목록</Title>
        <PreviewList />
      </Container>
    </Page>
  );
};

export default Favorite;
