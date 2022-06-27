import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});
