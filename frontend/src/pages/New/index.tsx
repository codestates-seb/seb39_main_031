import styled from "styled-components";

import WriteForm from "../../components/New/WriteForm";

const PageContainer = styled.div`
  width: 100%;
  padding: 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewProductContainer = styled.div`
  width: 700px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
  margin: 0 auto;
`;

const PageTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const New = () => {
  return (
    <PageContainer>
      <NewProductContainer>
        <PageTitle>
          <h1>새 공동구매</h1>
        </PageTitle>
        <WriteForm />
      </NewProductContainer>
    </PageContainer>
  );
};

export default New;
