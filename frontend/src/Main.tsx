import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);
  // url에 따라 홈 and 나머지 header 부분이 달라짐
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
