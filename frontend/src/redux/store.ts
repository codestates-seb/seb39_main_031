import { configureStore } from "@reduxjs/toolkit";

import groupbuySlice from "./groupbuySlice";
import loginSlice from "./loginSlice";
import modalSlice from "./modalSlice";
import newProductSlice from "./newProductSlice";
import participate from "./participate";
import selectorSlice from "./selectorSlice";
import signupSlice from "./signupSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    newProduct: newProductSlice.reducer,
    groupbuy: groupbuySlice.reducer,
    selector: selectorSlice.reducer,
    participate: participate.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
