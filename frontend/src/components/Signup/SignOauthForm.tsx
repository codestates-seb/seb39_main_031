import styled from "styled-components";

import OauthButtonForm from "../../common/Button/OauthButtonForm";

const OauthContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignOauthForm = () => {
  return (
    <OauthContent>
      <OauthButtonForm>구글</OauthButtonForm>
      <OauthButtonForm backgroundColor="#03CF5B">네이버</OauthButtonForm>
      <OauthButtonForm backgroundColor="#FEE501">카카오</OauthButtonForm>
    </OauthContent>
  );
};

export default SignOauthForm;
