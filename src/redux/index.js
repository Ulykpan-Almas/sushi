import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import itemReducer from "./item/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    item: itemReducer,
  },
});
