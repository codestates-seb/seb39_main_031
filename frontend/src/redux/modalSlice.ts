import { createSlice } from "@reduxjs/toolkit";

type modalState = { modalVisible: boolean };

const initialState: modalState = { modalVisible: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modal(state) {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
