/* eslint-disable import/named */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { participateProduct } from "../types/participate";

type modalState = { modalVisible: boolean; product_id: number; amount: number };

const initialState: modalState = {
  modalVisible: false,
  product_id: 0,
  amount: 0,
};

const participate = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modal(state) {
      state.modalVisible = !state.modalVisible;
    },

    participateData(state, action: PayloadAction<participateProduct>) {
      state.amount = action.payload.amount;
      state.product_id = action.payload.product_id;
    },
  },
});

export const participateActions = participate.actions;

export default participate;
