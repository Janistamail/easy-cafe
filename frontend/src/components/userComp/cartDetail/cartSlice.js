import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //เก็บค่าที่ลูกค้ากด ADD มาจากหน้า homeDetail
    orderFromCustomer: [],
  },
  reducers: {
    //เมื่อลูกค้ากด ADD button
    addOrder: (state, action) => {
      console.log(action.payload);
      state.orderFromCustomer.push(action.payload);
    },
    // decreaseMenuOrder: (state) => {
    //   if (state.amountHomeOrder > 0) {
    //     state.amountHomeOrder -= 1;
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addOrder } = cartSlice.actions;

export default cartSlice.reducer;
