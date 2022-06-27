import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import cartReducer from "./cartDetail/cartSlice";
import { ordersReducers } from "../batenderComp/orderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducers,
  },
});
