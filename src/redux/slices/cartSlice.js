import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",

  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const findeIncart = state.cart.find((item) => item.id == action.payload);

      if (findeIncart) {
        console.log(findeIncart.quntity);
        findeIncart.quntity += 1;
        return;
      }

      state.cart.push({
        id: action.payload,
        quntity: 1,
      });
    },

    removeFromCart: (state, action) => {
      const findeIncart = state.cart.find((item) => item.id === action.payload);
      console.log("heyy");

      if (findeIncart) {
        findeIncart.quntity -= 1;
        if (findeIncart.quntity == 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
