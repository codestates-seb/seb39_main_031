import { createSlice } from "@reduxjs/toolkit";

type loginState = { isLogin: boolean };

const initialState: loginState = { isLogin: false };

const loginSlice = createSlice({
  name: "loginHandler",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
