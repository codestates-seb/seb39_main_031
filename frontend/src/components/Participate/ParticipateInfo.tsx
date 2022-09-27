/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
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

const ParticipateInfo = () => {
  const [quantity, setQuantity] = useState<string>("");
  const user_nickname = "김박사";
  const unit = "1kg";

  //! 데이터에서 최대 수량 받아서 input의 props로 내려주기

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (quantity === "0" || quantity === "") {
      return alert("수량을 입력해주세요");
    }
    const participationInfo = {
      user_nickname,
      unit,
      quantity,
    };

    console.log(participationInfo);
  };

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(event.target.value);
    },
    [quantity]
  );

  return (
    <InfoContainer onSubmit={onSubmitHandler}>
      <InfoContent>
        <div>
          <InputForm lableText="닉네임" value={user_nickname} height="3rem" />
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
