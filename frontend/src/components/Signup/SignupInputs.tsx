import styled from "styled-components";

import InputForm from "../../common/Input/InputForm";

const InputContent = styled.div`
  width: 100%;
`;

const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 2rem;
`;

const SignupInputs = () => {
  return (
    <InputContent>
      <InputForm id="userEmail" type="email" lableText="이메일" />
      <Validation></Validation>

      <InputForm id="userNickname" type="text" lableText="닉네임" />
      <Validation></Validation>

      <InputForm id="userPassword" type="password" lableText="비밀번호" />
      <Validation></Validation>

      <InputForm
        id="userPasswordCheck"
        type="password"
        lableText="비밀번호 확인"
      />
      <Validation></Validation>
    </InputContent>
  );
};

export default SignupInputs;
