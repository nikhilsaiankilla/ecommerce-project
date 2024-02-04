import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlics";
import wishlistReducer from "./features/wishlistSlice";
import homeReducer from "./features/homeSlice";
import productReducer from "./features/productSlice";
import orderReducer from './features/orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    home: homeReducer,
    products: productReducer,
    order : orderReducer,
  },
});
