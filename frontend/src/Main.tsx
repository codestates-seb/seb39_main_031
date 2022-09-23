import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const MainContainer = styled.div`
  min-height: calc(100vh - 200px);
`;

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;
