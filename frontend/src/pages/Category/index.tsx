import { useState } from "react";
import styled from "styled-components";

import CategoryFilter from "../../components/Category/CategoryFilter";
import PreviewList from "../../components/Preview/PreviewList";

const Page = styled.div`
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

const Category = () => {
  const [selected, setSelected] = useState("");
  console.log(selected);

  return (
    <Page>
      <Container>
        <CategoryFilter selected={selected} setSelected={setSelected} />
        <PreviewList selected={selected} />
      </Container>
    </Page>
  );
};

export default Category;
