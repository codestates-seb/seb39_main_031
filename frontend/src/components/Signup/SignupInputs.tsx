/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import {
  SignupEmailCheck,
  SignupNicknameCheck,
  SignupPasswordCheck,
  SignupPasswordCheck2,
} from "../../assets/FormCheck/SignupCheckFuc";
import InputForm from "../../common/Input/InputForm";
import { useAppDispatch } from "../../hooks/Redux";
import { signupActions } from "../../redux/signupSlice";

const InputContent = styled.div`
  width: 100%;
`;

const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 1rem;
`;

const SignupInputs = () => {
  const dispatch = useAppDispatch();

  const [userEmail, setUserEmail] = useState<string>("");
  const [userNickname, setUserNickname] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>("");

  const [validEmail, setValidEmail] = useState<string>("");
  const [validNickname, setValidNickname] = useState<string>("");
  const [validPassword, setValidPassword] = useState<string>("");
  const [validPasswordCheck, setValidPasswordCheck] = useState<string>("");

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const email = event.target.value;
      setUserEmail(email);
      SignupEmailCheck(email, setValidEmail);
    },
    [userEmail]
  );
  const onChangeNickname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nickname = event.target.value;
      setUserNickname(nickname);
      SignupNicknameCheck(nickname, setValidNickname);
    },
    [userNickname]
  );
  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value;
      setUserPassword(password);
      SignupPasswordCheck(password, setValidPassword);
    },
    [userPassword]
  );
  const onChangePasswordCheck = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const passwordCehck = event.target.value;
      setUserPasswordCheck(passwordCehck);
      SignupPasswordCheck2(passwordCehck, userPassword, setValidPasswordCheck);
    },
    [userPasswordCheck]
  );

  useEffect(() => {
    dispatch(signupActions.emailHandler({ email: userEmail }));
    dispatch(signupActions.nicknameHandler({ nickname: userNickname }));
    dispatch(signupActions.passwordHandler({ password: userPassword }));
    dispatch(signupActions.passwordCheckHandler({ email: userPasswordCheck }));
  }, [userEmail, userNickname, userPassword, userPasswordCheck]);

  return (
    <InputContent>
      <InputForm
        id="userEmail"
        type="email"
        lableText="이메일"
        onChange={onChangeEmail}
      />
      <Validation>{validEmail}</Validation>

      <InputForm
        id="userNickname"
        type="text"
        lableText="닉네임"
        onChange={onChangeNickname}
      />
      <Validation>{validNickname}</Validation>

      <InputForm
        id="userPassword"
        type="password"
        lableText="비밀번호"
        onChange={onChangePassword}
      />
      <Validation>{validPassword}</Validation>

      <InputForm
        id="userPasswordCheck"
        type="password"
        lableText="비밀번호 확인"
        onChange={onChangePasswordCheck}
      />
      <Validation>{validPasswordCheck}</Validation>
    </InputContent>
  );
};

export default SignupInputs;
