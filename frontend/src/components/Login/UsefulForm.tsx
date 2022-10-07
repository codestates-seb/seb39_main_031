import { Link } from "react-router-dom";
import styled from "styled-components";

import OauthsForm from "../../common/Button/OauthsForm";

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
    font-size: 14px;
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
  margin-top: 2rem;

  > span {
    font-size: ${({ theme }) => theme.fontSize.size12};
    color: ${({ theme }) => theme.colors.black400};
    margin-right: 4px;
  }

  > a {
    font-size: ${({ theme }) => theme.fontSize.size12};
    color: ${({ theme }) => theme.colors.cyan500} !important;
  }
`;

const UsefulForm = () => {
  return (
    <UsefulContent>
      <UsefulTitle>
        <span>간편 로그인</span>
      </UsefulTitle>
      <OauthComponent>
        <OauthsForm />
      </OauthComponent>
      <SignupLink>
        <span>아직 회원이 아니라면?</span>
        <Link to="/signup">회원가입</Link>
      </SignupLink>
    </UsefulContent>
  );
};

export default UsefulForm;
