import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //เก็บค่าที่ลูกค้ากด ADD มาจากหน้า homeDetail
    orderInCart: [],
  },
  reducers: {
    //เมื่อลูกค้ากด ADD button
    // addOrder: (state, action) => {
    //   console.log(action.payload);
    //   state.orderFromCustomer.push(action.payload);
    // },
    updateCart: (state, action) => {
      console.log(action.payload);
      state.orderInCart.push(action.payload);
    },
    // decreaseMenuOrder: (state) => {
    //   if (state.amountHomeOrder > 0) {
    //     state.amountHomeOrder -= 1;
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
