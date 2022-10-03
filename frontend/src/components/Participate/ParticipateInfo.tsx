/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
const InfoContent = styled.form`
  width: 70%;

  > div {
    margin-bottom: 1rem;
  }
`;

const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

interface Props {
  onOpenModal: () => void;
  userNickname: string;
  unit: string;
  quantity: number;
  setUserNickname: React.Dispatch<React.SetStateAction<string>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ParticipateInfo = ({
  userNickname,
  unit,
  quantity,
  setUserNickname,
  setQuantity,
  onOpenModal,
}: Props) => {
  //! 데이터에서 최대 수량 받아서 input의 props로 내려주기

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!quantity) {
      return alert("수량을 입력해주세요");
    }
    const participationInfo = {
      userNickname,
      unit,
      quantity,
    };

    console.log(participationInfo);
    onOpenModal();
  };

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(event.target.valueAsNumber);
    },
    [quantity]
  );

  return (
    <InfoContainer onSubmit={onSubmitHandler}>
      <InfoContent>
        <div>
          <InputForm
            lableText="닉네임"
            value={userNickname}
            height="3rem"
            onChange={(e) => setUserNickname(e.target.value)}
          />
        </div>
        <div>
          <InputForm lableText="단위" value={unit} />
        </div>
        <div>
          <InputForm
            lableText="수량"
            type="number"
            onChange={onChangeHandler}
          />
        </div>
        <ButtonContent>
          <Button width="50%" height="2.5rem">
            참여하기
          </Button>
        </ButtonContent>
      </InfoContent>
    </InfoContainer>
  );
};

export default ParticipateInfo;
