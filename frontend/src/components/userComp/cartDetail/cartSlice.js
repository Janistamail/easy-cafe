import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    amountHomeOrder: 1,
  },
  reducers: {
    increaseMenuOrder: (state) => {
      state.amountHomeOrder += 1;
    },
    decreaseMenuOrder: (state) => {
      if (state.amountHomeOrder > 0) {
        state.amountHomeOrder -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseMenuOrder, decreaseMenuOrder } = cartSlice.actions;

export default cartSlice.reducer;
