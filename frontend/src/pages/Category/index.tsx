import { useState } from "react";
import styled from "styled-components";

import CategoryFilter from "../../components/Category/CategoryFilter";
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

const ProductListContent = styled.div``;

const Category = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Page>
      <Container>
        <CategoryFilter selected={selected} setSelected={setSelected} />
        <ProductListContent>
          <PreviewList />
        </ProductListContent>
      </Container>
    </Page>
  );
};

export default Category;
