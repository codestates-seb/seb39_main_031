import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Category from "./pages/Category";
import Chat from "./pages/Chat";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import GroupBuying from "./pages/GroupBuying";
import Home from "./pages/Home";
import Like from "./pages/Like";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Participate from "./pages/Participate";
import Password from "./pages/Password";
import SignUp from "./pages/SignUp";
import User from "./pages/User";

const RoutesTree = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/groupbuying" element={<GroupBuying />} />
          <Route path="/:user_id/:product_id" element={<Detail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/user" element={<User />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/like" element={<Like />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password" element={<Password />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesTree;
