import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./login";
import modalSlice from "./modal";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    login: loginSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
