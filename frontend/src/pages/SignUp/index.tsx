import { Link } from "react-router-dom";
import styled from "styled-components";

import OauthsForm from "../../common/Button/OauthsForm";
import UserFormHeader from "../../components/layout/Header/userFormHeader";
import SignupForm from "../../components/Signup/SignupForm";

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
const SignupContainer = styled.div`
  margin: auto 0;
  width: 30%;
  padding: 25px 35px 25px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
  max-width: 450px;
`;
const UsefulContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SignupContent = styled.div`
  width: 100%;
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
    <>
      <UserFormHeader />
      <PageContainer>
        <Container>
          <SignupContainer>
            <UsefulContent>
              <OauthsForm />
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
      </PageContainer>
    </>
  );
};

export default SignUp;
