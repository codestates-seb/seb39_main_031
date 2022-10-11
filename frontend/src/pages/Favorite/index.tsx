import styled from "styled-components";

import PreviewList from "../../components/Preview/PreviewList";

const Page = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 70%;
    max-width: 900px;
    padding: 0;
  }
`;

const Title = styled.h1`
  padding: 0 0.5em;
  margin: 2em 0;
  text-decoration: underline ${(props) => props.theme.colors.cyan400} 10px;
  text-underline-offset: -3px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding: 0;
  }
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
