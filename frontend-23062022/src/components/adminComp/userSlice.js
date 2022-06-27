import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    order: [],
  },
  reducers: {
    initHome: (state, action) => {
      console.log(action);
      state.order.push(...action.payload);
    },
    // getOrder: (state) => {
    //   return state.order;
    // },
    // addOrder: (state, payload) => {
    //   state.value += 1;
    // },
    // deleteOrder: (state, payload) => {
    //   state.value += 1;
    // },
    // editOrder: (state, payload) => {
    //   state.value += 1;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { initHome } = userSlice.actions;

export default userSlice.reducer;
