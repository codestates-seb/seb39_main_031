/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import PasswordModal from "../../common/Modal/PasswordModal.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { modalActions } from "../../redux/modalSlice";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasswordContainer = styled.div`
  width: 40%;
  padding: 35px 35px 40px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 7px 0px;
`;

const PasswordTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const PasswordForm = styled.form`
  width: 100%;
`;

const FormButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Password = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const [userEmail, setUserEmail] = useState<string>("");
  const isVible = useAppSelector(state => state.modal.modalVisible);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userEmail === "") {
      return alert("이메일을 입력해주세요");
    }

    dispatch(modalActions.modal());

    setTimeout(() => {
      navigation("/login");
      dispatch(modalActions.modal());
    }, 4000);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };
  return (
    <PageContainer>
      <PasswordModal visible={isVible} />
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
    </PageContainer>
  );
};

export default Password;
