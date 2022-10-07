import styled from "styled-components";

import ProductDatas from "./\bProductDatas";

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductList = () => {
  return (
    <ListContainer>
      <ProductDatas />
    </ListContainer>
  );
};

export default ProductList;
