import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Page = styled.div`
  height: auto;
  min-height: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Main = () => {
  return (
    <>
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </>
  );
};

export default Main;
