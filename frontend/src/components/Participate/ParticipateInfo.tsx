/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import { useAppDispatch } from "../../hooks/Redux";
import { joinModal } from "../../redux/modalSlice";
import { participateActions } from "../../redux/participate";
import { participate_Info } from "../../types/participate";

const InfoContainer = styled.form`
  width: 100%;
  padding: 24px;
`;

const InfoContent = styled.div`
  width: 100%;
`;

const ProductQuantity = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > span {
    font-size: ${({ theme }) => theme.fontSize.size32};
    display: block;
  }
`;

const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const QuntityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    text-align: center;
    width: 50px;
    height: 2rem;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.size24};
  }
  > input::-webkit-outer-spin-button,
  > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ParticipateInfo = (props: participate_Info) => {
  //! 데이터에서 최대 수량 받아서 input의 props로 내려주기
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(props.base_price);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      participateActions.participateData({
        product_id: props.product_id,
        amount: quantity,
      })
    );

    dispatch(joinModal({ modalType: "joinModal", isVisible: true }));
  };

  useEffect(() => {
    if (!quantity) {
      return setPrice(0);
    }
    setPrice(props.base_price * quantity);
  }, [quantity]);

  const pluseQty = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      if (quantity >= props.goal_num - props.state_num) {
        return;
      }
      setQuantity(quantity + 1);
    },
    [quantity]
  );

  const minusQty = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      if (quantity > 1) {
        return setQuantity(quantity - 1);
      }
    },
    [quantity]
  );

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.valueAsNumber;
    setQuantity(target);
  };

  return (
    <InfoContainer onSubmit={onSubmitHandler}>
      <InfoContent>
        <ProductQuantity>
          <p>수량</p>
          <QuntityControl>
            <Button onClick={minusQty} width="24px" height="24px">
              <BiMinus size="12" />
            </Button>
            <input type="number" value={quantity} onChange={onchangeHandler} />
            <Button onClick={pluseQty} width="24px" height="24px">
              <BiPlus size="12" />
            </Button>
          </QuntityControl>
        </ProductQuantity>
        <TotalPrice>
          <p>총 금액</p>
          <span>{price}</span>
        </TotalPrice>

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
