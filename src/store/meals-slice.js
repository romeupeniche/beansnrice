import { createSlice } from "@reduxjs/toolkit";

const initialMealsState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState: initialMealsState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          img: newItem.img,
          alt: newItem.alt,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    reset(state) {
      state.totalQuantity = initialMealsState.totalQuantity;
      state.items = initialMealsState.items;
      state.totalAmount = initialMealsState.totalAmount;
    },
  },
});

export default mealsSlice.reducer;
export const mealsActions = mealsSlice.actions;
