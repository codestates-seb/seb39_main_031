import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const Container = styled(Button)`
  border-radius: 3px;
`;

const JoinButton = () => {
  const navigation = useNavigate();
  const onClickHandler = () => {
    navigation("/participate");
  };
  return (
    <Container width="100%" height="2.5em" onClick={onClickHandler}>
      공구참여
    </Container>
  );
};

export default JoinButton;
