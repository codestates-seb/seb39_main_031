import styled from "styled-components";

import UserContent from "../../components/User/UserContent";
import UserInfo from "../../components/User/UserInfo";

const Page = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`;

const User = () => {
  return (
    <Page>
      <Container>
        <UserInfo />
        <UserContent />
      </Container>
    </Page>
  );
};

export default User;
