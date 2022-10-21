/* eslint-disable import/named */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type newProduct = {
  category: string;
  body: string;
  title: string;
  unit: string;
  goalQuantity: number;
  unitPerPrice: number;
  region: string;
  town: string;
  endedTime: string;
  productImage: string;
};

interface state {
  [S: string]: string;
}

const initialState: newProduct = {
  category: "",
  body: "",
  title: "",
  unit: "",
  goalQuantity: 0,
  unitPerPrice: 0,
  region: "",
  town: "",
  endedTime: "",
  productImage: "",
};

const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    categoryHandler(state, action: PayloadAction<state>) {
      state.category = action.payload.category;
    },
    bodyHandler(state, action: PayloadAction<state>) {
      state.body = action.payload.body;
    },
    titleHandler(state, action: PayloadAction<state>) {
      state.title = action.payload.title;
    },
    goalQuantityHandler(
      state,
      action: PayloadAction<{ goalQuantity: number }>
    ) {
      state.goalQuantity = action.payload.goalQuantity;
    },
    unitHandler(state, action: PayloadAction<state>) {
      state.unit = action.payload.unit;
    },
    unitPerPriceHandler(
      state,
      action: PayloadAction<{ unitPerPrice: number }>
    ) {
      state.unitPerPrice = action.payload.unitPerPrice;
    },
    regionHandler(state, action: PayloadAction<state>) {
      state.region = action.payload.region;
    },
    townHandler(state, action: PayloadAction<state>) {
      state.town = action.payload.town;
    },
    productImageHandler(state, action: PayloadAction<state>) {
      state.productImage = action.payload.productImage;
    },
    endedTimeHandler(state, action: PayloadAction<state>) {
      state.endedTime = action.payload.endedTime;
    },
    submitHandler(state) {
      state.category = "";
      state.title = "";
      state.unit = "";
      state.unitPerPrice = 0;
      state.region = "";
      state.town = "";
      state.endedTime = "";
      state.body = "";
      state.goalQuantity = 0;
      state.productImage = "";
    },
  },
});

export const newProductActions = newProductSlice.actions;

export default newProductSlice;
