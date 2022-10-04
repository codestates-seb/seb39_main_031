/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  loginEmailCheck,
  loginPasswordCheck,
} from "../../assets/FormCheck/LoginCheckFuc";
import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import { setCookie } from "../../config/Cookie";

const Form = styled.form`
  width: 100%;
`;

const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.size12};
`;

const LinkContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  > a {
    > span {
      font-size: ${({ theme }) => theme.fontSize.size12};
      color: ${({ theme }) => theme.colors.cyan500};
    }
  }
`;

const ButtoneContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface loginInfo {
  userEmail: string;
  userPassword: string;
}

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [validEmail, setValidEmail] = useState<string>("");
  const [validPassword, setValidPssword] = useState<string>("");

  const { mutate } = useMutation(
    async (loginInfo: loginInfo) =>
      await axios.post("/login", loginInfo).then(({ data }) => data)
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogin: loginInfo = { userEmail, userPassword };
    mutate(userLogin, {
      onSuccess: data => {
        setCookie("userInfo", data, {
          path: "/",
          maxAge: 6000,
        });
        window.location.replace("/");
      },
    });

    //! 성공적으로 로그인이 되면 홈으로 이동하기
  };

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const email = event.target.value;
      setUserEmail(email);
      loginEmailCheck(email, setValidEmail);
    },
    [userEmail]
  );

  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value;
      setUserPassword(password);
      loginPasswordCheck(password, setValidPssword);
    },
    [userPassword]
  );

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputForm
        id="userEmail"
        type="email"
        lableText="이메일"
        onChange={onChangeEmail}
      />
      <Validation>{validEmail}</Validation>
      <InputForm
        id="userNickname"
        type="password"
        lableText="비밀번호"
        onChange={onChangePassword}
      />
      <Validation>{validPassword}</Validation>
      <LinkContent>
        <Link to="/password">
          <span>비밀번호 찾기</span>
        </Link>
      </LinkContent>
      <ButtoneContent>
        <Button width="100%" height="3rem">
          Login
        </Button>
      </ButtoneContent>
    </Form>
  );
};

export default LoginForm;
