import styled from "styled-components";

import ParticipateInfo from "../../components/Participate/ParticipateInfo";
import ProductDetail from "../../components/Participate/ProductDetail";

const Container = styled.div`
  width: 100%;
  padding: 90px 0 40px 0;
`;

const ParticipateContainer = styled.div`
  width: 40%;
  padding: 34px 32px 32px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
  margin: 0 auto;
`;

const Participate = () => {
  return (
    <Container>
      <ParticipateContainer>
        <ProductDetail />
        <ParticipateInfo />
      </ParticipateContainer>
    </Container>
  );
};

export default Participate;
