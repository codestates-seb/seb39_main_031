/* eslint-disable prettier/prettier */
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import SignupSelect from "../../common/Select/SelectForm";
import { signupUser, userSignup } from "../../config/API/api";
import { useAppSelector } from "../../hooks/Redux";
import SignupInputs from "./SignupInputs";

const Form = styled.form`
  width: 100%;
`;

const SignupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const SignupForm = () => {
  const { email, password, passwordCheck, username, region, town, profileUrl } =
    useAppSelector(state => state.signup);
  const navigate = useNavigate();
  const { mutate } = useMutation(async (userInfo: signupUser) =>
    userSignup(userInfo)
  );

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      return alert("이메일을 입력해주세요.");
    }
    if (username === "") {
      return alert("닉네임을 입력해주세요.");
    }
    if (password === "") {
      return alert("비밀번호를 입력해주세요.");
    }
    if (passwordCheck === "") {
      return alert("비밀번호를 확인해주세요.");
    }
    if (passwordCheck !== password) {
      return alert("비밀번호가 일치하지 않습니다");
    }
    if (region === "") {
      return alert("지역을 선택해주세요.");
    }
    if (town === "") {
      return alert("동네를 선택해주세요.");
    }

    //! 회원가입이 성공적으로 이뤄지면 로그인 페이지로 이동하기
    if (
      email &&
      username &&
      password &&
      passwordCheck &&
      password === passwordCheck &&
      region &&
      town
    ) {
      const userData = {
        email,
        password,
        username,
        region,
        town,
        profileUrl,
      };
      console.log(userData);
      mutate(userData, {
        onSuccess: () => {
          navigate("/login");
        },
        onError: error => {
          console.log(error);
        },
      });
    }
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <SignupInputs />
      <SignupSelect label1="지역" label2="동네" />
      <SignupButton>
        <Button width="100%" height="3rem">
          회원가입
        </Button>
      </SignupButton>
    </Form>
  );
};

export default SignupForm;
