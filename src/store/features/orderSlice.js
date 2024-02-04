import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
  currentOrder: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {

      state.orderList = [...state.orderList, action.payload];
      state.currentOrder = action.payload;

    },
    cancelOrder: (state, action) => {
      const orderId = action.payload.orderId;
      if (action.payload.orderId) {
        state.orderList = state.orderList.filter(
          (order) => order.orderId !== orderId
        );
      }
      state.currentOrder = null;
    },

    deleteCurrentOrder: (state, action) => {
      state.currentOrder = null;
    },
    editOrder: (state, action) => {},
  },
});

export const {
  addOrder,
  cancelOrder,
  editOrder,
  deleteCurrentOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
