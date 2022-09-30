import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  padding: 90px 0 40px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const CategoryContent = styled.div``;

const ProductListContent = styled.div``;

const Category = () => {
  return (
    <PageContainer>
      <Container>
        <CategoryContent></CategoryContent>
        <ProductListContent></ProductListContent>
      </Container>
    </PageContainer>
  );
};

export default Category;
