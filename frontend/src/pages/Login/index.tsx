import styled from "styled-components";

import LoginForm from "../../components/Login/LoginForm";
import UsefulForm from "../../components/Login/UsefulForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 25%;
  height: 70%;
  padding: 34px 28px 32px;
  border: 1px solid ${({ theme }) => theme.colors.black500};
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
`;

const LoginContent = styled.div`
  width: 100%;
  height: 60%;
`;

const UsefulContent = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
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
  );
};

export default Login;
