import styled from "styled-components";

import TopButton from "../../common/Button/TopButton";
import GroupPageHeader from "../../components/GroupBuying/GroupPageHeader";
import ProductDatas from "../../components/GroupBuying/ProductDatas";
// import ProductList from "../../components/GroupBuying/ProductList";

const PageContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 70%;
    max-width: 900px;
  }
`;

const GroupBuying = () => {
  return (
    <PageContainer>
      <Container>
        <GroupPageHeader />
        <ProductDatas />
        <TopButton />
      </Container>
    </PageContainer>
  );
};

export default GroupBuying;
