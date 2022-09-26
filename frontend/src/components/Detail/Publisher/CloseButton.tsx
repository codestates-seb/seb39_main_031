import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const Container = styled(Button)`
  border-radius: 3px;
`;

const CloseButton = () => {
  const CloseHandler = () => {
    console.log("모집 종료");
  };

  return (
    <Container width="100%" height="2.5em" onClick={CloseHandler}>
      모집 종료
    </Container>
  );
};

export default CloseButton;
