/* eslint-disable prettier/prettier */
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import { useAppSelector } from "../../hooks/Redux";
import SignupInputs from "./SignupInputs";
import SignupSelect from "./SignupSelect";

const Form = styled.form`
  width: 100%;
`;

const SignupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const SignupForm = () => {
  const users = useAppSelector(state => state.signup);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (users.email === "") {
      return alert("이메일을 입력해주세요.");
    }
    if (users.nickname === "") {
      return alert("닉네임을 입력해주세요.");
    }
    if (users.password === "") {
      return alert("비밀번호를 입력해주세요.");
    }
    if (users.passwordCheck === "") {
      return alert("비밀번호를 확인해주세요.");
    }
    if (users.passwordCheck !== users.password) {
      return alert("비밀번호가 일치하지 않습니다");
    }
    if (users.region === "") {
      return alert("지역을 선택해주세요.");
    }
    if (users.town === "") {
      return alert("동네를 선택해주세요.");
    }

    //! 회원가입이 성공적으로 이뤄지면 로그인 페이지로 이동하기
    if (
      users.email &&
      users.nickname &&
      users.password &&
      users.passwordCheck &&
      users.password === users.passwordCheck &&
      users.region &&
      users.town
    ) {
      console.log("good");
    }
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <SignupInputs />
      <SignupSelect />
      <SignupButton>
        <Button width="100%" height="3rem">
          회원가입
        </Button>
      </SignupButton>
    </Form>
  );
};

export default SignupForm;
