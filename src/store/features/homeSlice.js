import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  toastTitle: null,
  payments: {},
  userDetails: null,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    openNavbar: (state, action) => {
      state.navOpen = true;
    },
    closeNavbar: (state, action) => {
      state.navOpen = false;
    },
    showToast: (state, action) => {
      state.toastTitle = action.payload;
    },
    addPayments: (state, action) => {
      state.payments = action.payload;
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const {
  openNavbar,
  closeNavbar,
  showToast,
  addPayments,
  addUserDetails,
} = homeSlice.actions;

export default homeSlice.reducer;
