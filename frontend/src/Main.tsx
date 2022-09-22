import { Outlet } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
