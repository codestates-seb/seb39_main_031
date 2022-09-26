import { createSlice } from "@reduxjs/toolkit";

type loginState = { isLogin: boolean };

const initialState: loginState = { isLogin: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
