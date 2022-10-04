/* eslint-disable prettier/prettier */
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";
import { useAppSelector } from "../../../hooks/Redux";

const Container = styled(Button)`
  border-radius: 3px;
`;

const JoinButton = () => {
  const navigation = useNavigate();
  const { user_id, product_id } = useParams();
  const { isLogin } = useAppSelector(state => state.login);

  const onClickHandler = () => {
    isLogin
      ? navigation(`/participate/${user_id}/${product_id}`)
      : navigation("/login");
  };
  return (
    <Container width="100%" height="2.5em" onClick={onClickHandler}>
      공구참여
    </Container>
  );
};

export default JoinButton;
