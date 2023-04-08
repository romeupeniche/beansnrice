import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./meals-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    meals: mealsSlice,
    cart: cartSlice,
  },
});

export default store;
