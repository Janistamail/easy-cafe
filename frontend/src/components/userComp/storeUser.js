import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import cartReducer from "./cartDetail/cartSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    auth: authSlice,
  },
});
