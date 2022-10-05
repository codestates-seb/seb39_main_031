/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import UserFormHeader from "../../components/layout/Header/userFormHeader";
import { useAppDispatch } from "../../hooks/Redux";
import { closeModal, passwordModal } from "../../redux/modalSlice";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasswordContainer = styled.div`
  width: 40%;
  max-width: 560px;
  padding: 35px 35px 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
`;

const PasswordTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.size20};
`;

const PasswordForm = styled.form`
  width: 100%;
`;

const FormButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Password = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const [userEmail, setUserEmail] = useState<string>("");

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userEmail === "") {
      return alert("이메일을 입력해주세요");
    }

    dispatch(passwordModal({ modalType: "passwordModal", isVisible: true }));

    setTimeout(() => {
      navigation("/login");
      dispatch(closeModal());
    }, 3000);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  return (
    <PageContainer>
      <UserFormHeader />
      <Container>
        <PasswordContainer>
          <PasswordTitle>
            <span>가입한 이메일 주소를 입력해주세요.</span>
          </PasswordTitle>
          <PasswordForm onSubmit={onSubmitHandler}>
            <InputForm type="email" onChange={onChangeHandler} />
            <FormButton>
              <Button width="50%" height="2.5rem">
                임시 비밀번호 받기
              </Button>
            </FormButton>
          </PasswordForm>
        </PasswordContainer>
      </Container>
    </PageContainer>
  );
};

export default Password;
