/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useLocation } from "react-router-dom";

import { getCookie } from "./config/Cookie";
import { useAppDispatch } from "./hooks/Redux";
import { loginActions } from "./redux/loginSlice";
import RoutesTree from "./RoutesTree";

const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (location.pathname === "/") {
    const userInfo = getCookie("userInfo");

    if (userInfo) {
      dispatch(loginActions.login());
    }
  }

  return (
    <>
      <RoutesTree />
      <ReactQueryDevtools />
    </>
  );
};

export default App;
