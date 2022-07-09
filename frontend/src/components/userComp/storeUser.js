import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import cartReducer from "./cartDetail/cartSlice";
import ordersReducers from "../batenderComp/orderSlice";
import authenReducer from "../login/authenSlice";
import editCartReducer from "./editCartDetail/editCartSlice";
// import cateEditReducer from "../adminComp/cateEditSlice";
import productReducers from "../adminComp/EditProduct/productSlice";
import paymentReducer from "./cartDetail/paymentSlice";
import productHomeReducer from "../adminComp/adminSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducers,
    authen: authenReducer,
    editCart: editCartReducer,
    payment: paymentReducer,
    // anycate: cateEditReducer,
    products: productReducers,
    product: productHomeReducer,
  },
});
