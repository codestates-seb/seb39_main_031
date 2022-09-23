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
`;

const OauthsForm = () => {
  return (
    <OauthContent>
      <OauthButtonForm>
        <FcGoogle size="35" />
      </OauthButtonForm>
      <OauthButtonForm backgroundColor="#03CF5B">
        <SiNaver size="35" color="white" />
      </OauthButtonForm>
      <OauthButtonForm backgroundColor="#FEE501">
        <RiKakaoTalkFill size="45" />
      </OauthButtonForm>
    </OauthContent>
  );
};

export default OauthsForm;
