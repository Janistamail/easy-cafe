import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import cartReducer from "./cartDetail/cartSlice";
import authenReducer from "../login/authenSlice";
import editCartReducer from "./editCartDetail/editCartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    authen: authenReducer,
    editCart: editCartReducer,
  },
});
