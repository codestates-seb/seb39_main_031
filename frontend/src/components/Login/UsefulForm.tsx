import { Link } from "react-router-dom";
import styled from "styled-components";

import OauthForm from "./OauthForm";

const UsefulContent = styled.div`
  width: 100%;
`;

const UsefulTitle = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  margin-bottom: 1rem;

  > span {
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.size15};
  }
`;

const OauthComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SignupLink = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  > span {
    font-size: ${({ theme }) => theme.fontSize.size12};
    color: ${({ theme }) => theme.colors.black400};
    margin-right: 4px;
  }

  > a {
    font-size: ${({ theme }) => theme.fontSize.size12};
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`;

const UsefulForm = () => {
  return (
    <UsefulContent>
      <UsefulTitle>
        <span>간편 로그인</span>
      </UsefulTitle>
      <OauthComponent>
        <OauthForm />
      </OauthComponent>
      <SignupLink>
        <span>아직 회원이 아니라면?</span>
        <Link to="/signup">회원가입</Link>
      </SignupLink>
    </UsefulContent>
  );
};

export default UsefulForm;
