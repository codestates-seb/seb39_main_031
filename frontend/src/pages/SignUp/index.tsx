import { Link } from "react-router-dom";
import styled from "styled-components";

import SignOauthForm from "../../components/Signup/SignOauthForm";
import SignupForm from "../../components/Signup/SignupForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupContainer = styled.div`
  width: 35%;
  padding: 35px 35px 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
`;
const UsefulContent = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SignupContent = styled.div`
  width: 100%;
  height: 84%;
`;
const LinkContent = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: center;

  > span {
    font-size: ${({ theme }) => theme.fontSize.size15};
    color: ${({ theme }) => theme.colors.black400};
    margin-right: 4px;
  }

  > a {
    font-size: ${({ theme }) => theme.fontSize.size15};
    color: ${({ theme }) => theme.colors.cyan500} !important;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <SignupContainer>
        <UsefulContent>
          <SignOauthForm />
        </UsefulContent>
        <SignupContent>
          <SignupForm />
        </SignupContent>
        <LinkContent>
          <span>이미 계정이 있으신가요?</span>
          <Link to="/login">로그인</Link>
        </LinkContent>
      </SignupContainer>
    </Container>
  );
};

export default SignUp;
