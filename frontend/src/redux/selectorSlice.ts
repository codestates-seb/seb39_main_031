// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type selectorState = { region: string; town: string };

const initialState: selectorState = { region: "", town: "" };

const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    regionHandler(state, action: PayloadAction<selectorState>) {
      state.region = action.payload.region;
      state.town = action.payload.town;
    },
  },
});

export const selectorActions = selectorSlice.actions;

export default selectorSlice;
