import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromWishlist: (state, action) => {
      const itemToRemoveId   = action.payload.id
      state.wishlist = state.wishlist.filter(item => item.id !== itemToRemoveId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
