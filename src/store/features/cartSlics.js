import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // adding products to the cart
    addToCart: (state, action) => {
      // getting the current product id
      const productId = action.payload.id;

      // checking the current product is present in the cart
      // IF  PRODUCT PRESENT IN THE CART THEN STORE THE PRODUCT IN THE
      // EXISTING_ITEM

      const existingItem = state.cart.find((item) => item.id === productId);

      // if product exist then increase the quantity by one
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // if product does not exist then add product to the cart with quantity 1
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      // getting the current product id
      const productId = action.payload.id;

      // checking the current product is present in the cart
      // IF  PRODUCT PRESENT IN THE CART THEN STORE THE PRODUCT IN THE
      // EXISTING_ITEM

      const existingItem = state.cart.find((item) => item.id === productId);

      // if quantity is more then 1 then decrease quantity by one
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // if quantity is 1 then remove the product from cart
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
    },

    clearCart: (state, action) => {
      state.cart = []
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
