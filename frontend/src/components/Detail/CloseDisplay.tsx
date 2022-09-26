import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5em;
  background-color: ${(props) => props.theme.colors.black400};
  color: ${(props) => props.theme.colors.white000};
  border-radius: 3px;
`;

const CloseDisplay = () => {
  return <Container>모집 종료</Container>;
};

export default CloseDisplay;
