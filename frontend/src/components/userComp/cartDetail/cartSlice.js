import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //เก็บค่าที่ลูกค้ากด ADD มาจากหน้า homeDetail
    orderInCart: [],
  },
  reducers: {
    //เก็บค่าที่ลูกค้ากด ADD มาจากหน้า homeDetail
    updateCart: (state, action) => {
      console.log(action.payload);
      state.orderInCart.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
