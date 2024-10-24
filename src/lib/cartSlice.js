import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (curr) => curr.name === action.payload.name
      );
      console.log(index);

      if (index >= 0) {
        state.cartItems[index].count = action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems.filter((curr) => curr.name != action.payload.name);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
