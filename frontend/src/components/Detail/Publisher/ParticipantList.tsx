/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 1em;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSize.size15};
  color: ${props => props.theme.colors.black400};
  margin-bottom: 0.5em;
`;

const ListBox = styled.ul`
  width: 100%;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: center;
  color: ${props => props.theme.colors.black900};
  border-top: 1px solid ${props => props.theme.colors.black200};

  &.title {
    font-weight: 900;
    border-top: 1px solid ${props => props.theme.colors.black300};
    border-bottom: 1px solid ${props => props.theme.colors.black300};
  }

  &.total {
    font-weight: 900;
    border-top: 1px solid ${props => props.theme.colors.black300};
  }

  & > .name {
    flex: 1;
  }

  & > .quantity {
    flex: 1;
  }

  & > .price {
    flex: 1;
  }
`;

type entered = {
  enteredUser: { amount: number; totalPrice: number; username: string }[];
};

const ParticipantList = ({ enteredUser }: entered) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    enteredUser.map(user => {
      setTotalPrice(totalPrice + user.totalPrice);
      setTotalAmount(totalAmount + user.amount);
    });
  }, [enteredUser]);

  return (
    <Container>
      <Title>참여자 정보</Title>
      <ListBox>
        <List className="title">
          <div className="name">닉네임</div>
          <div className="quantity">수량</div>
          <div className="price">금액</div>
        </List>
        {enteredUser.map((el, index) => {
          return (
            <List key={index}>
              <div className="name">{el.username}</div>
              <div className="quantity">{el.amount}</div>
              <div className="price">{el.totalPrice}</div>
            </List>
          );
        })}
        <List className="total">
          <div className="name" />
          <div className="quantity">{totalAmount}</div>
          <div className="price">{totalPrice}</div>
        </List>
      </ListBox>
    </Container>
  );
};

export default ParticipantList;
