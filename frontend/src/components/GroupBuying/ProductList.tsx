import styled from "styled-components";

import PreviewList from "../Preview/PreviewList";

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductList = () => {
  return (
    <ListContainer>
      <PreviewList />
    </ListContainer>
  );
};

export default ProductList;
