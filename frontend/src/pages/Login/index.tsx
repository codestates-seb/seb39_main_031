import styled from "styled-components";

import UserFormHeader from "../../components/layout/Header/userFormHeader";
import LoginForm from "../../components/Login/LoginForm";
import UsefulForm from "../../components/Login/UsefulForm";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4em;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 400px;
  margin: auto 0;
  padding: 34px 28px 32px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px 0px;
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
    <>
      <UserFormHeader />
      <PageContainer>
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
    </>
  );
};

export default Login;
