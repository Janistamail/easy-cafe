import { configureStore } from "@reduxjs/toolkit";
import ordersReducers from "./orderSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
  reducer: {
    // orders: ordersReducers,
    category: categoryReducer,
  },
});
