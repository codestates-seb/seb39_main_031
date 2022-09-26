import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const Container = styled(Button)`
  border-radius: 3px;
`;

const JoinButton = () => {
  return (
    <Container width="100%" height="2.5em">
      공구참여
    </Container>
  );
};

export default JoinButton;
