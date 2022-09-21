import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";

const Form = styled.form`
  width: 100%;
`;

const Validation = styled.span`
  display: block;
  margin-top: 5px;
  color: red;
  padding-left: 10px;
  margin-bottom: 2rem;
`;

const LinkContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  > a {
    > span {
      font-size: ${({ theme }) => theme.fontSize.size12};
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const ButtoneContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm id="userEmail" type="email" lableText="이메일" />
      <Validation></Validation>
      <InputForm id="userNickname" type="password" lableText="비밀번호" />
      <Validation></Validation>
      <LinkContent>
        <Link to="/password">
          <span>비밀번호 찾기</span>
        </Link>
      </LinkContent>
      <ButtoneContent>
        <Button width="100%" height="2.5rem">
          Login
        </Button>
      </ButtoneContent>
    </Form>
  );
};

export default LoginForm;
