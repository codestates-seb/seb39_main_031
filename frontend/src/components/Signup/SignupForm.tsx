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
`;

const SignupForm = () => {
  const users = useAppSelector(state => state.signup);
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(users);
    //! 회원가입이 성공적으로 이뤄지면 로그인 페이지로 이동하기
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <SignupInputs />
      <SignupSelect />
      <Button width="100%" height="3rem">
        회원가입
      </Button>
      <SignupButton></SignupButton>
    </Form>
  );
};

export default SignupForm;
