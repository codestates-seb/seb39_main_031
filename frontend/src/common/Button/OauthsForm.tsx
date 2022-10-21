import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import styled from "styled-components";

import OauthButtonForm from "./OauthButtonForm";

const OauthContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

const OauthsForm = () => {
  return (
    <OauthContent>
      <OauthButtonForm>
        <FcGoogle size="30" />
      </OauthButtonForm>
      <OauthButtonForm backgroundColor="#03CF5B">
        <SiNaver size="26" color="white" />
      </OauthButtonForm>
      <OauthButtonForm backgroundColor="#FEE501">
        <RiKakaoTalkFill size="36" />
      </OauthButtonForm>
    </OauthContent>
  );
};

export default OauthsForm;
