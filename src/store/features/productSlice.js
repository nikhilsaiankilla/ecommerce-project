import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
  ProductsLoading: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productsData = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addProducts, setLoading } = productSlice.actions;

export default productSlice.reducer;
