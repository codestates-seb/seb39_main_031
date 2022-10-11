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
  width: 100%;
  padding: 0 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 70%;
    max-width: 900px;
    padding: 0;
  }
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
