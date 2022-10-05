/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import { useAppDispatch } from "../../hooks/Redux";
import { joinModal } from "../../redux/modalSlice";
import { participate_Info } from "../../types/participate";

const InfoContainer = styled.div`
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
    // if (!quantity) {
    //   return alert("수량을 입력해주세요");
    // }

    //TODO: 버튼 onClick 이벤트 수정
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

      if (quantity >= props.goal_num) {
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
        setQuantity(quantity - 1);
      }
    },
    [quantity]
  );

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.valueAsNumber;

    // if (!target) {
    //   return;
    // }

    if (target < 1) {
      return alert("1개 이상 선택해야 합니다");
    }
    if (target > props.goal_num) {
      return alert(`최대 ${props.goal_num}개 선택할 수 있습니다`);
    }
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
          <Button
            width="50%"
            height="2.5rem"
            onClick={() =>
              dispatch(joinModal({ modalType: "joinModal", isVisible: true }))
            }
          >
            참여하기
          </Button>
        </ButtonContent>
      </InfoContent>
    </InfoContainer>
  );
};

export default ParticipateInfo;
