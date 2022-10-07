/* eslint-disable import/named */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type loginState = {
  email: string;
  username: string;
  password: string;
  passwordCheck: string;
  region: string;
  town: string;
  profileUrl?: string;
};

export type state = {
  [S: string]: string;
};

const initialState: loginState = {
  email: "",
  username: "",
  password: "",
  passwordCheck: "",
  region: "",
  town: "",
  profileUrl: "https://source.unsplash.com/80x80/?cat",
};

const signupSlice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    emailHandler(state, action: PayloadAction<state>) {
      state.email = action.payload.email;
    },
    nicknameHandler(state, action: PayloadAction<state>) {
      state.username = action.payload.username;
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
