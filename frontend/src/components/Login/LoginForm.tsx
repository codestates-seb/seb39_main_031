/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import {
  loginEmailCheck,
  loginPasswordCheck,
} from "../../assets/FormCheck/LoginCheckFuc";
import Button from "../../common/Button/ButtonForm";
import LabelInput from "../../common/Input/LabelInput";
import { loginUser, userLogin } from "../../config/API/api";
import { setCookie } from "../../config/Cookie";

const Form = styled.form`
  width: 100%;
  padding: 1em;
`;

const Validation = styled.div`
  display: block;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.red700};
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.size12};
`;

const LinkContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;

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

interface stateType {
  from: string;
}

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [validEmail, setValidEmail] = useState<string>("");
  const [validPassword, setValidPssword] = useState<string>("");

  const { mutate } = useMutation(async (body: loginUser) => userLogin(body));

  const location = useLocation();
  const { from } = location.state || ({ from: "/" } as stateType);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo: loginUser = { email: userEmail, password: userPassword };

    mutate(userInfo, {
      onSuccess: data => {
        const userData = {
          userId: data.data.userId,
          username: data.data.username,
          authorization: data.headers.authorization,
          profileUrl: data.data.profileUrl,
        };

        setCookie("userInfo", userData, {
          path: "/",
          maxAge: 6000,
        });

        window.location.replace(from);
      },
      onError: error => {
        console.log(error);
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
      <LabelInput
        id="userEmail"
        type="email"
        lableText="이메일"
        onChange={onChangeEmail}
      />
      <Validation>{validEmail}</Validation>
      <LabelInput
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
          로그인
        </Button>
      </ButtoneContent>
    </Form>
  );
};

export default LoginForm;
