import styled from "styled-components";

import TopButton from "../../common/Button/TopButton";
import GroupPageHeader from "../../components/GroupBuying/GroupPageHeader";
import ProductList from "../../components/GroupBuying/ProductList";

const PageContainer = styled.div`
  width: 100%;
  padding: 70px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 900px;
`;

const GroupBuying = () => {
  return (
    <PageContainer>
      <Container>
        <GroupPageHeader />
        <ProductList />
        <TopButton />
      </Container>
    </PageContainer>
  );
};

export default GroupBuying;
