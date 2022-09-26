import styled from "styled-components";

import UserFormHeader from "../../components/layout/Header/userFormHeader";
import LoginForm from "../../components/Login/LoginForm";
import UsefulForm from "../../components/Login/UsefulForm";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  padding: 105px 0;
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 25%;
  margin: auto 0;
  padding: 34px 28px 32px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
`;

const LoginContent = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  max-width: 330px;
  max-height: 550px;
`;

const UsefulContent = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <PageContainer>
      <UserFormHeader />
      <Container>
        <LoginContainer>
          <LoginContent>
            <LoginForm />
          </LoginContent>
          <UsefulContent>
            <UsefulForm />
          </UsefulContent>
        </LoginContainer>
      </Container>
    </PageContainer>
  );
};

export default Login;
