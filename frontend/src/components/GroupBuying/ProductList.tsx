import styled from "styled-components";

import ProductDatas from "./ProductDatas";

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 70%;
    max-width: 900px;
  }
`;

const ProductList = () => {
  return (
    <ListContainer>
      <ProductDatas />
    </ListContainer>
  );
};

export default ProductList;
