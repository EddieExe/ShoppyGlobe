import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // ✅ Import cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Add cart reducer
  },
});

export default store;
