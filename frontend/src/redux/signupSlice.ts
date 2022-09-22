/* eslint-disable import/named */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type loginState = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  region: string;
  town: string;
};

export type state = {
  [S: string]: string;
};

const initialState: loginState = {
  email: "",
  nickname: "",
  password: "",
  passwordCheck: "",
  region: "",
  town: "",
};

const signupSlice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    emailHandler(state, action: PayloadAction<state>) {
      state.email = action.payload.email;
    },
    nicknameHandler(state, action: PayloadAction<state>) {
      state.nickname = action.payload.nickname;
    },
    passwordHandler(state, action: PayloadAction<state>) {
      state.password = action.payload.password;
    },
    passwordCheckHandler(state, action: PayloadAction<state>) {
      state.passwordCheck = action.payload.passwordCheck;
    },
    regionHandler(state, action: PayloadAction<state>) {
      state.region = action.payload.region;
    },
    townHandler(state, action: PayloadAction<state>) {
      state.town = action.payload.town;
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
