import styled from "styled-components";

import GroupPageHeader from "../../components/GroupBuying/GroupPageHeader";
import ProductList from "../../components/GroupBuying/ProductList";

const PageContainer = styled.div`
  width: 100%;
  padding: 70px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  border: 1px solid red;
  width: 65%;
`;

const GroupBuying = () => {
  return (
    <PageContainer>
      <Container>
        <GroupPageHeader />
        <ProductList />
      </Container>
    </PageContainer>
  );
};

export default GroupBuying;
