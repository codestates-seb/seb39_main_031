import styled from "styled-components";

import { FilledBar, Progress } from "../../types/post";

const Container = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.black200};
`;

const Fill = styled.div<FilledBar>`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.cyan400};
`;

const ProgressBar = ({ state_num, goal_num }: Progress) => {
  const percentage = `${Math.round((state_num / goal_num) * 100)}%`;

  return (
    <Container>
      <Fill width={percentage} />
    </Container>
  );
};

export default ProgressBar;
