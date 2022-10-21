//! 삭제할 수도 있는 파일

/* eslint-disable import/named */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type groupbuys = {
  endedTime: string;
  goalQuantity: number;
  productId: number;
  productImg: [string?];
  region: string;
  state: string;
  stateQuantity: number;
  title: string;
  town: string;
  unit: string;
  unitPerPrice: number;
};

const initialState: groupbuys = {
  endedTime: "",
  goalQuantity: 0,
  productId: 0,
  productImg: [],
  region: "",
  state: "",
  stateQuantity: 0,
  title: "",
  town: "",
  unit: "",
  unitPerPrice: 0,
};

const groupbuySlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    newProductHandler(state, action: PayloadAction<groupbuys>) {
      state.endedTime = action.payload.endedTime;
      state.goalQuantity = action.payload.goalQuantity;
      state.productId = action.payload.productId;
      state.productImg = action.payload.productImg;
      state.region = action.payload.region;
      state.state = action.payload.state;
      state.stateQuantity = action.payload.stateQuantity;
      state.title = action.payload.title;
      state.town = action.payload.town;
      state.unit = action.payload.unit;
      state.unitPerPrice = action.payload.unitPerPrice;
    },

    submitproductHandler(state) {
      state.endedTime = "";
      state.goalQuantity = 0;
      state.productId = 0;
      state.productImg = [];
      state.region = "";
      state.state = "";
      state.stateQuantity = 0;
      state.title = "";
      state.town = "";
      state.unit = "";
      state.unitPerPrice = 0;
    },
  },
});

export const groupbuyActions = groupbuySlice.actions;

export default groupbuySlice;
