import styled from "styled-components";

import CurrentList from "../../components/CurrentStatus/CurrentList";
// import { useAppDispatch, useAppSelector } from "../../hooks/Redux";

const Page = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    width: 70%;
    max-width: 900px;
    padding: 0;
  }
`;

const Title = styled.h1`
  margin: 2em 0;
  text-decoration: underline ${(props) => props.theme.colors.cyan400} 10px;
  text-underline-offset: -3px;
`;

const CurrentStatus = () => {
  // const dispatch = useAppDispatch();
  // const isVisible = useAppSelector((state) => state.modal.modalVisible);

  // const cancelModalHandler = () => {
  //   dispatch(modalActions.modal());
  // };

  return (
    <Page>
      <Container>
        <Title>참여현황</Title>
        <CurrentList />
      </Container>
    </Page>
  );
};

export default CurrentStatus;
