import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import cartReducer from "./cartDetail/cartSlice";
import ordersReducers from "../batenderComp/orderSlice";
import authenReducer from "../login/authenSlice";
import editCartReducer from "./editCartDetail/editCartSlice";
import cateEditReducer from "../adminComp/cateEditSlice";
import productReducers from "../adminComp/EditProduct/productSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducers,
    authen: authenReducer,
    editCart: editCartReducer,
    anycate: cateEditReducer,
    products: productReducers,
  },
});
