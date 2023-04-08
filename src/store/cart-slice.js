import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
