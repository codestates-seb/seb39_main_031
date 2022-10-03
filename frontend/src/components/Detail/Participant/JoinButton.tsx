import styled from "styled-components";

import Button from "../../../common/Button/ButtonForm";

const Container = styled(Button)`
  border-radius: 3px;
`;

interface Props {
  onClick: () => void;
}

const JoinButton = ({ onClick }: Props) => {
  return (
    <Container width="100%" height="2.5em" onClick={onClick}>
      공구참여
    </Container>
  );
};

export default JoinButton;
