/* eslint-disable prettier/prettier */
import styled from "styled-components";

import logo from "../../assets/Image/logo/smallLogo.PNG";
import EndedProduct from "../../components/Home/EndedProduct";

const Container = styled.main`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 70%;
    max-width: 900px;
  }
`;

const ListBlock = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  padding: 5em 0;

  &.favorite {
    border-bottom: 1px solid ${props => props.theme.colors.black300};
  }
`;

const TitleBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-weight: 900;
  font-size: 32px;
  text-decoration: underline ${props => props.theme.colors.cyan400} 10px;
  text-underline-offset: -3px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Home = () => {
  return (
    <Container>
      <ListBlock className="favorite">
        <TitleBox>
          <Image src={logo} alt="icon" />
          <Title>인기 공구</Title>
        </TitleBox>
        <EndedProduct />
      </ListBlock>
      <ListBlock>
        <TitleBox>
          <Image src={logo} alt="icon" />
          <Title>마감임박 공구</Title>
        </TitleBox>
        <EndedProduct />
      </ListBlock>
    </Container>
  );
};

export default Home;
