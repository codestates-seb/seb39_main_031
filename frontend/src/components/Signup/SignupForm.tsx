import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
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
  return (
    <Form>
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
