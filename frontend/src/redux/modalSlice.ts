import { createSlice } from "@reduxjs/toolkit";

import { ModalState } from "../types/Modal";

const initialState: ModalState = {
  modalType: "",
  isVisible: false,
  notjoinProps: { image_uri: "", title: "", state_price: 0, quantity: 0 },
  deleteProps: {},
  endProps: {},
  joinProps: {},
  ratingProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    passwordModal: (state, actions) => {
      const { modalType } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
    },
    notjoinModal: (state, actions) => {
      const { modalType, props } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
      state.notjoinProps = props;
    },
    joinModal: (state, actions) => {
      const { modalType, props } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
      state.joinProps = props;
    },
    deleteModal: (state, actions) => {
      const { modalType, props } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
      state.deleteProps = props;
    },
    endModal: (state, actions) => {
      const { modalType, props } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
      state.endProps = props;
    },
    ratingModal: (state, actions) => {
      const { modalType, props } = actions.payload;
      state.modalType = modalType;
      state.isVisible = true;
      state.ratingProps = props;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.notjoinProps = initialState.notjoinProps;
      state.deleteProps = initialState.deleteProps;
      state.endProps = initialState.endProps;
      state.joinProps = initialState.joinProps;
      state.ratingProps = initialState.ratingProps;
    },
  },
});

export const {
  passwordModal,
  notjoinModal,
  joinModal,
  deleteModal,
  endModal,
  ratingModal,
  closeModal,
} = modalSlice.actions;
export const selectModal = (state: { modal: ModalState }) => state.modal;

export default modalSlice;
