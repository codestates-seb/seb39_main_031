import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice";
import modalSlice from "./modalSlice";
import signupSlice from "./signupSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
