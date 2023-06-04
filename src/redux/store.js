import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/prductSlice";
import cartReducer from "../redux/slices/cartSlice";

export default configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
