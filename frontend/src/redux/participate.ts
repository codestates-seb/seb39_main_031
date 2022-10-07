import { createSlice } from "@reduxjs/toolkit";

type modalState = { modalVisible: boolean };

const initialState: modalState = { modalVisible: false };

const participate = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modal(state) {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const modalActions = participate.actions;

export default participate;
